import { defineConfig } from 'astro/config';

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGithubPages ? 'https://yuxin-ip.github.io' : undefined,
  base: isGithubPages ? '/xiaojian-footprints' : undefined
});
