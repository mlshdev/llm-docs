> Commit-pinned source for Runpod main: [api-reference-v2/clusters/get-a-cluster.mdx](https://docs.runpod.io/api-reference-v2/clusters/get-a-cluster)

# Get A Cluster

`GET /v2/clusters/{id}`

**Get a cluster**

Returns a single cluster by ID. The pods field is an aggregate summary (total + count by status); fetch the member pods themselves from /v2/clusters/{id}/pods.

**Parameters**

- `id` (path, required): Cluster identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: Cluster not found
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
