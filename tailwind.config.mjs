/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'cbg-dark': '#232323',
				'cbg-white': '#FFFDF7',
				'c-light-blue': '#D0EAF5',
				'c-light-purple': '#736CED'
			}
		},
	},
	plugins: [],
}