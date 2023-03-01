import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
process.env.BROWSER = 'firefox';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});