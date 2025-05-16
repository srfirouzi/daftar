module.exports = ({ env }) => ({
	plugins: [
		require("postcss-import")(),
		require("postcss-custom-properties")({
			preserve: env === "ie" ? false : true // فقط در IE برای حذف کردن var ها
		})
	]
  });