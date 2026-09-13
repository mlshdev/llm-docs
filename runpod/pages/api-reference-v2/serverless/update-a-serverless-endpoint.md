> Commit-pinned source for Runpod main: [api-reference-v2/serverless/update-a-serverless-endpoint.mdx](https://docs.runpod.io/api-reference-v2/serverless/update-a-serverless-endpoint)

# Update A Serverless Endpoint

Update selected settings on a Runpod Serverless endpoint, including compute, workers, scaling, storage, and container configuration.

`PATCH /v2/serverless/{id}`

**Update a serverless endpoint**

Partially updates a serverless endpoint. This is a PATCH: only the
fields present in the body are changed; omitted fields are left
untouched. See `UpdateEndpointRequest` for the full body.

Mutable fields: `name`, `gpu`, `cpu`, `workers` (`min`/`max`),
`scaling` (`type`/`value`/`idleTimeout`), `dataCenterIds`,
`networkVolumes`, `timeout`, `flashboot`, and the container settings
(`image`, `args`, `disk`, `ports`, `env`, `registry`).

Omitted compute preserves the current selection. `cpu` completely
replaces a CPU endpoint's selection; compute family is immutable.
`gpu` on CPU, `cpu` on GPU, or both fields returns 400.

Returns `200` with the full updated endpoint. Effect timing differs
by field: scaling and worker-bound settings (`workers`, `scaling`,
`timeout`) are applied to the autoscaler promptly, while
container-affecting changes (e.g. `image`, `env`) create a new
endpoint release that rolls out as workers cycle — in-flight workers
keep the previous version until they are replaced. Track rollout via
`listEndpointReleases`.

**Parameters**

- `id` (path, required): Serverless endpoint identifier

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
