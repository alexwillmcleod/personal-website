import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import fetchApi from '../lib/strapi';
import type Article from '../interfaces/article';

export async function GET(context: {site: string}) {
	const posts = await getCollection('blog');
  const articles: Article[] = await fetchApi<Article[]>({
    endpoint: 'articles',
    wrappedByKey: 'data'
  });
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: articles.map((article) => ({
			...article.attributes,
      pubDate: new Date(article.attributes.publishedAt),
			link: `/blog/${article.attributes.slug}/`,
		})),
	});
}
