> Commit-pinned source for Runpod main: [api-reference-v2/clusters/rename-a-cluster.mdx](https://docs.runpod.io/api-reference-v2/clusters/rename-a-cluster)

# Rename A Cluster

`PATCH /v2/clusters/{id}`

**Rename a cluster**

Renames a cluster. This endpoint only changes the cluster
name — compute shape, type, and container configuration are fixed at
creation and cannot be updated.

**Parameters**

- `id` (path, required): Cluster identifier

**Request body**

**Responses**

- `200`: OK
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: Cluster not found
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
