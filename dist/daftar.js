var daftar=(function(){
/* body */


function _elem(elem){
	if (elem instanceof HTMLElement){
		return elem;
	}
	if (typeof elem === 'string') {
		var element = document.querySelector(elem);
		return element;
	}
	return null;	
}

function _elems(elems) {
	if (typeof elems === 'string') {
		var nodeList = document.querySelectorAll(elems);
		return Array.prototype.slice.call(nodeList);
	}
	if (elems && typeof elems.length === 'number' && elems.item) {
		return Array.prototype.slice.call(elems);
	}
	if (elems && elems.nodeType === 1) {
		return [elems];
	}
	if (Object.prototype.toString.call(elems) === '[object Array]') {
		return elems;
	}
	return [];
}

function isRTL(elem) {
	var p = _elem(elem);
	if (p && p.length) p = p[0];
	var isRtl = false;
	while (p && p !== document) {
		if ( p.classList.contains('rtl')) {
			isRtl = true;
			break;
		}
		p = p.parentNode;
	}
	return isRtl;
}

function positionDropdown(dropdown) {
	var menu = dropdown.lastElementChild;
	if (!menu) return;

	menu.style.top = '';
	menu.style.bottom = '';
	menu.style.left = '';
	menu.style.right = '';
	menu.style.maxHeight = '';
	menu.style.overflowY = 'auto';
	menu.style.transform = '';

	var dropdownRect = dropdown.getBoundingClientRect();
	var menuHeight = menu.offsetHeight;
	var menuWidth = menu.offsetWidth;
	var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

	var spaceBelow = viewportHeight - dropdownRect.bottom;
	var spaceAbove = dropdownRect.top;
	var spaceRight = viewportWidth - dropdownRect.left;
	var spaceLeft = dropdownRect.right;

	if (spaceBelow >= menuHeight) {
		menu.style.top = '100%';
		menu.style.bottom = 'auto';
	} else if (spaceAbove >= menuHeight) {
		menu.style.bottom = '100%';
		menu.style.top = 'auto';
	} else {
		if (spaceBelow > spaceAbove) {
			menu.style.top = '100%';
			menu.style.bottom = 'auto';
			menu.style.maxHeight = spaceBelow + 'px';
		} else {
			menu.style.bottom = '100%';
			menu.style.top = 'auto';
			menu.style.maxHeight = spaceAbove + 'px';
		}
	}

	if (!isRTL(dropdown)) {
		if (spaceRight >= menuWidth) {
			menu.style.left = '0';
			menu.style.right = 'auto';
		} else if (spaceLeft >= menuWidth) {
			menu.style.left = 'auto';
			menu.style.right = '0';
		} else {
			menu.style.left = '50%';
			menu.style.right = 'auto';
			menu.style.transform = 'translateX(-50%)';
		}
	} else {
		if (spaceLeft >= menuWidth) {
			menu.style.right = '0';
			menu.style.left = 'auto';
		} else if (spaceRight >= menuWidth) {
			menu.style.right = 'auto';
			menu.style.left = '0';
		} else {
			menu.style.right = '50%';
			menu.style.left = 'auto';
			menu.style.transform = 'translateX(50%)';
		}
	}
}





var daftar={
	dir: function (elem, dir) {
		elem = _elem(elem) || document.body;
		elem.classList.remove('rtl');
		elem.classList.remove('ltr');
		if (dir != '')
			elem.classList.add(dir);
	},
	theme: function (name) {
		var elem = document.body;
		elem.classList.remove('dark');
		elem.classList.remove('light');
		elem.classList.add(name);
	},
	tab:{
		active:function(elem){
			elem = _elem(elem);
			var siblings = elem.parentElement.querySelectorAll('.tab');
			for (var i = 0; i < siblings.length; i++) {
				siblings[i].classList.remove('active');
			}
			elem.classList.add('active');
		}
	},
	page:{
		open:function(parent, pageid){
			parent = _elem(parent);
			var pages = parent.children;
			for (var i = 0; i < pages.length; i++) {
				if (i == pageid)
					pages[i].classList.add('active');
				else
					pages[i].classList.remove('active');
			}	
		}
	},
	modal:{
		open:function(elem){
			elem = _elem(elem);
			elem.classList.add('show');
			document.body.classList.add('body-modal-open');
		},
		close:function(elem){
			elem = _elem(elem);
			elem.classList.remove('show');
			document.body.classList.remove('body-modal-open');
		}

	}
};



/* events */
document.addEventListener('click', function (event) {
	var target = event.target ;
	var activeParent = null;
	var parentElement = target.parentElement;

	while (parentElement && !parentElement.classList.contains('dropdown')) {
		parentElement = parentElement.parentElement;
		if (parentElement === document.documentElement) {
			parentElement = null;
			break;
		}
	}

	if (parentElement && parentElement.classList.contains('dropdown')) {
		activeParent = parentElement;
	}

	var allDropdowns = document.querySelectorAll('.dropdown.show');
	for (var i = 0; i < allDropdowns.length; i++) {
		if (allDropdowns[i] !== activeParent) {
			allDropdowns[i].classList.remove('show');
		}
	}

	if (activeParent) {
		if (activeParent.classList.contains('show')) {
			activeParent.classList.remove('show');
		} else {
			activeParent.classList.add('show');
			positionDropdown(activeParent);
		}
	}
});


return daftar;
/* end of body */
})();
