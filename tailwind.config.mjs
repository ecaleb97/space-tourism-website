/** @type {import('tailwindcss').Config} */

const BASE_URL = '/src/assets';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
				'main-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
				'main-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
				'destination-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
				'destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
				'destination-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
				'technology-desktop': `url(${BASE_URL}/technology/background-technology-desktop.jpg)`,
				'technology-mobile': `url(${BASE_URL}/technology/background-technology-mobile.jpg)`,
				'technology-tablet': `url(${BASE_URL}/technology/background-technology-tablet.jpg)`,
			},
			colors: {
				primary: '#D0D6F9'
			}
		},
	},
	plugins: [],
}
