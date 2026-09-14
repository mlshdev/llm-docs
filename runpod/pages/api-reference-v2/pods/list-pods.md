> Commit-pinned source for Runpod main: [api-reference-v2/pods/list-pods.mdx](https://docs.runpod.io/api-reference-v2/pods/list-pods)

# List Pods

List Pods owned by the authenticated Runpod user, with an option to include member Pods that belong to Runpod Clusters.

`GET /v2/pods`

**List pods**

Returns pods owned by the authenticated user. Cluster member
pods are excluded by default; set `includeClusterPods=true` to include
them (each carries a non-null `cluster` membership block).

**Parameters**

- `includeClusterPods` (query): Include cluster member pods in the result. Defaults to false.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
