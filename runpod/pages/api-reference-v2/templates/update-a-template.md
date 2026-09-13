> Commit-pinned source for Runpod main: [api-reference-v2/templates/update-a-template.mdx](https://docs.runpod.io/api-reference-v2/templates/update-a-template)

# Update A Template

Update selected fields on a Runpod template while preserving omitted settings, with ownership rules and behavior for existing resources.

`PATCH /v2/templates/{id}`

**Update a template**

Partially updates a template. This is a PATCH: only the fields
present in the body are changed; omitted fields are left untouched.
See `UpdateTemplateRequest` for the full body.

Mutable fields: `name`, `image`, `args`, `disk`, `ports`, `env`,
`registry`, `mounts`, `serverless`, `public`, and `category`.

Only the template's owner can update it (authenticated via the
request's API key); public catalog templates are readable via GET
but return `404` here. Returns `200` with the full updated template. Pods and
endpoints already created from this template are not changed
retroactively — the template is a snapshot applied at creation time.

**Parameters**

- `id` (path, required)

**Request body**

**Responses**

- `200`: OK
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
