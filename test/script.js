$(function(){
    //main bar 
    if($('#desktop').is(":checked")){
        $("html").css("font-size","12px");
    }else{
        $("html").css("font-size","16px");
    }
    $('#desktop').change(function(){
        if($('#desktop').is(":checked")){
            $("html").css("font-size","12px");
        }else{
            $("html").css("font-size","16px");
        }
    });

    if($('#theme').is(":checked")){
        $(document.body).addClass('dark');
        $(document.body).removeClass('ligth');
    }else{
        $(document.body).addClass('ligth');
        $(document.body).removeClass('dark');
    }
    
    $('#theme').change(function(){
        if($(this).is(":checked")){
            $(document.body).addClass('dark');
            $(document.body).removeClass('ligth');
        }else{
            $(document.body).addClass('ligth');
            $(document.body).removeClass('dark');
        }
    });
    $('.c-b-none').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$("#main");
        a.removeClass('rtl');
        a.removeClass('ltr');
    });
    $('.c-b-ltr').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$("#main");
        a.removeClass('rtl');
        a.addClass('ltr');
    });
    $('.c-b-rtl').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$("#main");
        a.addClass('rtl');
        a.removeClass('ltr');
    });
    // end main bar
    //section
    $('.c-none').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$(this).parent().parent().children('.content')
        a.removeClass('rtl');
        a.removeClass('ltr');
    });
    $('.c-ltr').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$(this).parent().parent().children('.content')
        a.removeClass('rtl');
        a.addClass('ltr');
    });
    $('.c-rtl').click(function(){
        $(this).parent().children('.active').removeClass('active');
        $(this).addClass('active');
        var a=$(this).parent().parent().children('.content')
        a.addClass('rtl');
        a.removeClass('ltr');
    });

});