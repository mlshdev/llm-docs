> Commit-pinned source for Runpod main: [api-reference-v2/templates/create-a-template.mdx](https://docs.runpod.io/api-reference-v2/templates/create-a-template)

# Create A Template

Create a reusable Runpod template for Pod and Serverless container settings, including images, storage, ports, environment, and mounts.

`POST /v2/templates`

**Create a template**

Creates a reusable container-configuration preset — image, disk,
ports, env, registry, and mount settings — for pods and serverless
endpoints. Pass its ID as `templateId` to `createPod` or
`createEndpoint`, or spread its fields into the request body
directly. Returns the created template.

**Request body**

**Responses**

- `201`: Created
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
