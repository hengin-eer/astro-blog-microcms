import { createClient, MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: import.meta.env.SERVICE_DOMAIN,
	apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async (queries: MicroCMSQueries) => {
	return await client.get({ endpoint: "blogs", queries });
};

export const getBlogArticle = async (blogId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail({ endpoint: "blogs", contentId: blogId, queries, });
};