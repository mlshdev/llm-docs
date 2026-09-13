> Commit-pinned source for Runpod main: [api-reference-v2/clusters/list-a-clusters-pods.mdx](https://docs.runpod.io/api-reference-v2/clusters/list-a-clusters-pods)

# List A Clusters Pods

List every Pod in a Runpod Cluster with each member's complete configuration and status, beyond the aggregate counts in the Cluster summary.

`GET /v2/clusters/{id}/pods`

**List a cluster's pods**

Returns the full member pods of a cluster. The cluster summary (`GET /v2/clusters/{id}`) carries only aggregate pod counts; this endpoint returns each member as a complete Pod object.

**Parameters**

- `id` (path, required): Cluster identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: Cluster not found
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
