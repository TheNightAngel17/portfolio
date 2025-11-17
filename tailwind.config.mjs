/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['media'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			// screens: {
			// 	sm: "100%",
			// 	md: "100%",
			// 	lg: "520px",
			// 	xl: "620px",
			// 	2xl: "1280px"
			// },
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors
				'light-theme': '#E9EBEC',
				'primary-light': '#00d1e1',
				'primary-hover-light': '#00e8fa',

				// Dark mode colors
				'dark-theme': '#0C151D',
				'primary-dark': '#00e8fa',
				'primary-hover-dark': '#00d1e1',

				// Neutrals
				'n200': '#d7d9da',
				'n900': '#222222',
				'n700': '#171F26',
				'n500': '#555555',

			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
