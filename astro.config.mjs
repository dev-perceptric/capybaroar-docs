// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const group = (label, dir, pages, extra = {}) => ({ label, ...extra, items: pages.map((p) => `${dir}/${p}`) });

export default defineConfig({
  site: 'https://docs.capybaroar.com',
  integrations: [
    starlight({
      title: 'Capybaroar Docs',
      description: 'Capybaroar help center: connect your channels, schedule posts to 14 networks from one calendar, work with the AI agent and use Capybaroar from Claude, ChatGPT or Cursor.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'external', label: 'Capybaroar app', href: 'https://app.capybaroar.com' }],
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' } },
      ],
      sidebar: [
        { label: 'Get started', items: ['index', ...['welcome', 'create-account', 'connect-a-channel', 'schedule-your-first-post'].map((p) => `get-started/${p}`)] },
        group('Publishing', 'publishing', ['calendar-and-queue', 'bulk-and-automation']),
        { label: 'Channels', collapsed: true, items: ['channels', 'channels/channels-screen', ...['instagram', 'facebook', 'tiktok', 'linkedin', 'youtube', 'x', 'threads', 'pinterest', 'bluesky', 'mastodon', 'discord', 'telegram', 'wordpress'].map((p) => `channels/${p}`)] },
        group('AI agent and MCP', 'ai', ['agent', 'plan-a-week', 'ai-credits', 'rewrite-with-ai', 'mcp']),
        group('Inbox and results', 'results', ['inbox', 'analytics-and-reports', 'link-in-bio']),
        group('Workspace', 'workspace', ['plans-and-billing', 'team-and-roles', 'approvals']),
        group('Developers', 'developers', ['rest-api', 'webhooks']),
        { label: 'API reference', collapsed: true, items: [{ autogenerate: { directory: 'api-reference' } }] },
        group('Reference', 'reference', ['roles-and-permissions', 'plan-limits', 'glossary', 'faq'], { collapsed: true }),
      ],
    }),
  ],
});
