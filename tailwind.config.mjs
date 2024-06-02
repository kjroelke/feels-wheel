/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
		},
		fontSize: {
			'sm': '0.833rem',
			'base': '1rem',
			'md': '1.2rem',
			'lg': '1.44rem',
			'xl': '1.728rem',
			'2xl': '2.074rem',
			'3xl': '2.488rem',
			'4xl': '2.986rem',
		},
	},
	plugins: [],
};
