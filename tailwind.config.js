/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px"
		},
		extend: {
			colors: {
				primary: "#0f172a",
				primaryLight: "#334155",
				secondary: "#e2e8f0",
				secondaryLight: "#f1f5f9"
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
	]
};
