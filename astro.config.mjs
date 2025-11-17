// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import d2 from "astro-d2";

import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
    site: 'https://simple-portfolio.vicbox.dev/',
    integrations: [ d2({output: "d2"}), mermaid({autoTheme: true}), mdx(), react(), tailwind({
        applyBaseStyles: false,
    }), icon(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    }});