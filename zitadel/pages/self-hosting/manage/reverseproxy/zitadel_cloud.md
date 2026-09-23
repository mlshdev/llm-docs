> Pinned source for ZITADEL v4.19.1: [apps/docs/content/self-hosting/manage/reverseproxy/zitadel_cloud/index.mdx](https://github.com/zitadel/zitadel/blob/76959769b9020fe96e45d9ee78ed079fdd6ad0e8/apps/docs/content/self-hosting/manage/reverseproxy/zitadel_cloud/index.mdx)
> Canonical documentation: https://zitadel.com/docs/self-hosting/manage/reverseproxy/zitadel_cloud

## Fronting Zitadel Cloud

You can use your reverse-proxy, content delivery network (CDN) or web application firewall (WAF) to front Zitadel Cloud.
However, we currently do not recommend this for production settings.

To configure your service that fronts Zitadel please have a look at the vendors in this page.

## Things to look out for when fronting Zitadel Cloud

- Cache-control - Zitadel Cloud uses a CDN to globally distribute data. Please try to avoid overriding this header as it may lead to side-effects
- Rate Limits - Zitadel Cloud uses a combination of static and dynamic rate limits. If you receive occasional 429 headers you are rate limited.
