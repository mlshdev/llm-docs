> Pinned source for ZITADEL v4.20.1: [apps/docs/content/self-hosting/manage/reverseproxy/cloudflare/index.mdx](https://github.com/zitadel/zitadel/blob/709968cdd4257d7377bb95f22c840ee39ba951c6/apps/docs/content/self-hosting/manage/reverseproxy/cloudflare/index.mdx)
> Canonical documentation: https://zitadel.com/docs/self-hosting/manage/reverseproxy/cloudflare

## Settings

- [Make sure HTTP/2 is enabled](https://support.cloudflare.com/hc/en-us/articles/200168076-Understanding-Cloudflare-HTTP-2-and-HTTP-3-Support)
- [Verify that gRPC is enabled](https://support.cloudflare.com/hc/en-us/articles/360050483011-Understanding-Cloudflare-gRPC-support)
- [Verify that traffic is proxied through Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/)
- [Configure Zitadel to use the TLS Mode enabled](https://zitadel.com/docs/self-hosting/manage/tls_modes#enabled)

> **Note**
>
> [Cloudflare does only support gRPC with TLS!](https://support.cloudflare.com/hc/en-us/articles/360050483011-Understanding-Cloudflare-gRPC-support)

## Troubleshooting

If something is not working please check the Cloudflare WAF rules for potential violations.
These two rules are known to be triggered:

- 100001 Anomaly:Header:User-Agent - Missing Cloudflare Specials
- 100004 Anomaly:Header:User-Agent, Anomaly:Header:Referer - Missing or empty
