import { defineConfig } from 'tinacms';

/**
 * Tina CMS schema for easilymovedequipment.com.
 *
 * Each collection below produces a section in Tina's browser-based editor.
 * Content is stored as Markdown/JSON in src/content/ and committed to the
 * same GitHub repo Cloudflare Pages builds from — no separate DB, every
 * edit is a commit in kflynnla/eme-site.
 *
 * Setup required on first use:
 *   1. In Tina Cloud dashboard, find the Client ID for this project.
 *   2. Paste it into the Cloudflare Pages env var TINA_PUBLIC_CLIENT_ID.
 *   3. Also set TINA_TOKEN to the Read-Only token from Tina Cloud.
 *
 * Local preview of the Tina editor (optional) requires Python to build the
 * better-sqlite3 native module on Windows. Skip locally — edit via the
 * Tina Cloud web UI instead.
 */

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',      // Tina admin mounts at /admin on the built site
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',     // Images uploaded via Tina go to public/uploads/
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      // -----------------------------------------------------------------
      // HOMEPAGE — singleton content file driving src/pages/index.astro
      // -----------------------------------------------------------------
      {
        name: 'homepage',
        label: 'Homepage',
        path: 'src/content/homepage',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false }, // singleton
        },
        match: { include: 'index' },
        fields: [
          {
            type: 'string', name: 'title', label: 'SEO · Page title', required: true,
            description: '50–60 chars. Primary keyword first. Ends with "| eme".',
          },
          {
            type: 'string', name: 'description', label: 'SEO · Meta description', required: true,
            ui: { component: 'textarea' },
            description: '140–155 chars. Value claim, proof point, CTA.',
          },
          {
            type: 'object', name: 'hero', label: 'Hero',
            fields: [
              { type: 'string', name: 'overline', label: 'Overline' },
              { type: 'string', name: 'headline', label: 'Headline (<br> for line breaks)', required: true },
              { type: 'string', name: 'subhead', label: 'Subhead', ui: { component: 'textarea' }, required: true },
              {
                type: 'object', name: 'specs', label: 'Spec strip', list: true,
                ui: { itemProps: (i: { label?: string }) => ({ label: i?.label }) },
                fields: [
                  { type: 'string', name: 'label', label: 'Label (short — e.g. Capacity)' },
                  { type: 'string', name: 'value', label: 'Value (mono — e.g. 1,100 – 22,000 LB)' },
                ],
              },
              {
                type: 'object', name: 'primaryCta', label: 'Primary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
              {
                type: 'object', name: 'secondaryCta', label: 'Secondary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
              { type: 'image', name: 'image', label: 'Hero image (replaces placeholder)' },
              { type: 'string', name: 'imageBadge', label: 'Image badge (e.g. "Live on jobsite")' },
              { type: 'string', name: 'imageCaption', label: 'Image caption (mono, uppercase)' },
            ],
          },
          {
            type: 'object', name: 'coverageMap', label: 'Coverage map section',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'sub', label: 'Sub-headline', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaLabel', label: 'CTA label' },
              { type: 'string', name: 'ctaHref', label: 'CTA URL' },
            ],
          },
          {
            type: 'object', name: 'productCards', label: 'Product line overview — cards', list: true,
            ui: { itemProps: (i: { title?: string }) => ({ label: i?.title }) },
            fields: [
              { type: 'string', name: 'title', label: 'Card title' },
              { type: 'string', name: 'capacity', label: 'Capacity strip (e.g. 1,100 – 22,000 LB)' },
              { type: 'string', name: 'line', label: 'One-line value prop', ui: { component: 'textarea' } },
              { type: 'string', name: 'href', label: 'Link URL' },
              { type: 'string', name: 'ctaLabel', label: 'CTA label' },
            ],
          },
          {
            type: 'object', name: 'industryCards', label: 'Industries grid — cards', list: true,
            ui: { itemProps: (i: { title?: string }) => ({ label: i?.title }) },
            fields: [
              { type: 'string', name: 'title', label: 'Industry name' },
              { type: 'string', name: 'line', label: 'Short pitch', ui: { component: 'textarea' } },
              { type: 'string', name: 'href', label: 'Link URL' },
            ],
          },
          {
            type: 'object', name: 'showcase', label: 'Dark showcase band',
            fields: [
              { type: 'string', name: 'label', label: 'Overline label' },
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'body', label: 'Body copy', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaLabel', label: 'CTA label' },
              { type: 'string', name: 'ctaHref', label: 'CTA URL' },
            ],
          },
          {
            type: 'object', name: 'finalCta', label: 'Final CTA band',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'sub', label: 'Sub', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'primary', label: 'Primary',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
              {
                type: 'object', name: 'secondary', label: 'Secondary',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
            ],
          },
        ],
      },

      // -----------------------------------------------------------------
      // GANTRY MODELS — one file per capacity (1100R, 2200R, …, 22000R)
      // -----------------------------------------------------------------
      {
        name: 'gantryModel',
        label: 'Gantry Models',
        path: 'src/content/gantry-models',
        format: 'md',
        fields: [
          { type: 'string', name: 'model', label: 'Model code (e.g. 4400R)', required: true },
          { type: 'string', name: 'capacity', label: 'Rated capacity (e.g. 4,400 lb)', required: true },
          { type: 'string', name: 'craneWeight', label: 'Crane weight (e.g. ~380 lb)' },
          {
            type: 'string', name: 'setup', label: 'Setup method',
            options: ['2-Person · No Equipment', 'Standard Facility Equipment'],
          },
          { type: 'string', name: 'slug', label: 'URL slug (preserves SEO history)', required: true, description: 'e.g. aluminum-gantry-crane-4400-series — do NOT change on live pages without a 301' },
          { type: 'string', name: 'headline', label: 'Hero headline', required: true },
          { type: 'string', name: 'subhead', label: 'Hero subhead', ui: { component: 'textarea' } },
          { type: 'string', name: 'overline', label: 'Hero overline' },
          {
            type: 'object', name: 'specRows', label: 'Spec matrix rows', list: true,
            ui: { itemProps: (i: { sku?: string }) => ({ label: i?.sku }) },
            fields: [
              { type: 'string', name: 'sku', label: 'SKU / variant (e.g. 4400R-10)' },
              { type: 'string', name: 'beamLength', label: 'Beam length' },
              { type: 'string', name: 'height', label: 'Under-beam height' },
              { type: 'string', name: 'weight', label: 'Net weight' },
            ],
          },
          { type: 'image', name: 'image', label: 'Hero photograph' },
          { type: 'rich-text', name: 'body', label: 'Additional long-form content', isBody: true },
          {
            type: 'string', name: 'title', label: 'SEO · Page title',
            description: 'Format: [Primary Keyword] — [Supporting Benefit] | eme',
          },
          { type: 'string', name: 'description', label: 'SEO · Meta description', ui: { component: 'textarea' } },
        ],
      },

      // -----------------------------------------------------------------
      // INDUSTRIES — one file per industry
      // -----------------------------------------------------------------
      {
        name: 'industry',
        label: 'Industries',
        path: 'src/content/industries',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Industry name', required: true },
          { type: 'string', name: 'slug', label: 'URL slug', required: true },
          { type: 'string', name: 'shortPitch', label: 'Homepage card pitch', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroHeadline', label: 'Hero headline' },
          { type: 'rich-text', name: 'challenge', label: 'The challenge — narrative' },
          { type: 'rich-text', name: 'solution', label: 'How eme solves it' },
          {
            type: 'string', name: 'recommendedModels', label: 'Recommended gantry models', list: true,
            options: ['1100R', '2200R', '4400R', '6600R', '11000R', '22000R'],
          },
          { type: 'rich-text', name: 'body', label: 'Additional content', isBody: true },
          { type: 'string', name: 'seoTitle', label: 'SEO · Page title' },
          { type: 'string', name: 'seoDescription', label: 'SEO · Meta description', ui: { component: 'textarea' } },
        ],
      },

      // -----------------------------------------------------------------
      // INSTALL STORIES — social proof. Outcome metrics are REQUIRED.
      // -----------------------------------------------------------------
      {
        name: 'installStory',
        label: 'Install Stories',
        path: 'src/content/install-stories',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Story title', required: true },
          { type: 'string', name: 'slug', label: 'URL slug', required: true },
          { type: 'datetime', name: 'date', label: 'Publish date' },
          { type: 'string', name: 'customer', label: 'Customer name (if permission granted)' },
          {
            type: 'string', name: 'industry', label: 'Industry',
            options: ['Mechanical Contracting', 'Specialized Rigging', 'Water & Wastewater', 'Helicopter Maintenance', 'Trucking', 'Industrial Maintenance', 'Data Centers', 'Rooftop & In-Building'],
          },
          {
            type: 'string', name: 'product', label: 'Product used',
            options: ['1100R', '2200R', '4400R', '6600R', '11000R', '22000R', 'Davit', 'Eagle Beam', 'Accessory'],
          },
          {
            type: 'string', name: 'outcomeMetric', label: 'Outcome metric (required)',
            description: 'e.g. "Saved $18,000 on crane truck line item" — stories without a metric do not convert.',
            required: true,
          },
          { type: 'image', name: 'heroImage', label: 'Hero photo' },
          { type: 'rich-text', name: 'body', label: 'Story body', isBody: true },
          { type: 'string', name: 'customerQuote', label: 'Customer quote (if permission)', ui: { component: 'textarea' } },
        ],
      },

      // -----------------------------------------------------------------
      // BLOG
      // -----------------------------------------------------------------
      {
        name: 'post',
        label: 'Blog',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'slug', label: 'URL slug', required: true },
          { type: 'datetime', name: 'date', label: 'Publish date', required: true },
          { type: 'string', name: 'excerpt', label: 'Excerpt (card preview)', ui: { component: 'textarea' } },
          {
            type: 'string', name: 'category', label: 'Category',
            options: ['Technical', 'Industry', 'Product News', 'Safety'],
          },
          { type: 'image', name: 'heroImage', label: 'Hero image' },
          { type: 'rich-text', name: 'body', label: 'Post body', isBody: true },
          { type: 'string', name: 'seoTitle', label: 'SEO · Page title' },
          { type: 'string', name: 'seoDescription', label: 'SEO · Meta description', ui: { component: 'textarea' } },
        ],
      },
    ],
  },
});
