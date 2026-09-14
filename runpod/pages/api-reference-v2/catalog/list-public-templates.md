> Commit-pinned source for Runpod main: [api-reference-v2/catalog/list-public-templates.mdx](https://docs.runpod.io/api-reference-v2/catalog/list-public-templates)

# List Public Templates

List Runpod public templates by official, verified, or community source and inspect reusable Pod and Serverless configurations.

`GET /v2/catalog/templates`

**List public templates**

Returns the public template catalog. `source` selects which slice:
`official` (the default) is Runpod-curated templates, `verified` is
community templates Runpod has verified, and `community` is everything
else other users have shared publicly. Both pod and serverless
templates appear — use each entry's `serverless` flag to tell them
apart. `registry` is always null for templates you don't own. Your own
templates (public or private) are managed under `/v2/templates`; fetch
any individual template — catalog or owned — via `/v2/templates/{id}`.

At most 100 templates are returned. Pagination is not yet supported.

**Parameters**

- `source` (query): Which slice of the catalog to return: `official` for Runpod-curated templates (default), `verified` for Runpod-verified community templates, or `community` for all other publicly shared templates.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
