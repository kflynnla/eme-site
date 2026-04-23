import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Astro content collections. Mirrors tina/config.ts — Tina writes these
 * files; Astro reads them at build time.
 */

// Reusable shapes -----------------------------------------------------
const cta = z.object({
  label: z.string(),
  href: z.string(),
});

const spec = z.object({
  label: z.string(),
  value: z.string(),
});

// Homepage singleton --------------------------------------------------
const homepage = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/homepage' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      overline: z.string(),
      headline: z.string(),
      subhead: z.string(),
      specs: z.array(spec).optional(),
      primaryCta: cta,
      secondaryCta: cta.optional(),
      image: z.string().optional(),
      imageBadge: z.string().optional(),
      imageCaption: z.string().optional(),
    }),
    coverageMap: z.object({
      headline: z.string(),
      sub: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
    productCards: z.array(z.object({
      title: z.string(),
      capacity: z.string(),
      line: z.string(),
      href: z.string(),
      ctaLabel: z.string(),
    })),
    industryCards: z.array(z.object({
      title: z.string(),
      line: z.string(),
      href: z.string(),
    })),
    showcase: z.object({
      label: z.string(),
      headline: z.string(),
      body: z.string(),
      ctaLabel: z.string().optional(),
      ctaHref: z.string().optional(),
    }),
    finalCta: z.object({
      headline: z.string(),
      sub: z.string().optional(),
      primary: cta,
      secondary: cta.optional(),
    }),
  }),
});

// Gantry models -------------------------------------------------------
const gantryModels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gantry-models' }),
  schema: z.object({
    model: z.string(),
    capacity: z.string(),
    craneWeight: z.string().optional(),
    setup: z.string().optional(),
    slug: z.string(),
    headline: z.string(),
    subhead: z.string().optional(),
    overline: z.string().optional(),
    specRows: z.array(z.object({
      sku: z.string(),
      beamLength: z.string().optional(),
      height: z.string().optional(),
      weight: z.string().optional(),
    })).optional(),
    image: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Industries ----------------------------------------------------------
const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortPitch: z.string().optional(),
    heroHeadline: z.string().optional(),
    recommendedModels: z.array(z.string()).optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Install stories -----------------------------------------------------
const installStories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/install-stories' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date().optional(),
    customer: z.string().optional(),
    industry: z.string().optional(),
    product: z.string().optional(),
    outcomeMetric: z.string(),
    heroImage: z.string().optional(),
    customerQuote: z.string().optional(),
  }),
});

// Blog ----------------------------------------------------------------
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    heroImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { homepage, gantryModels, industries, installStories, blog };
