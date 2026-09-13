// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const compositions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compositions' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    instrumentation: z.string(),
    duration: z.string().optional(),
    scoreUrl: z.string().optional(),   // link to PDF/audio
    audioUrl: z.string().optional(),
  }),
});

export const collections = { blog, compositions };