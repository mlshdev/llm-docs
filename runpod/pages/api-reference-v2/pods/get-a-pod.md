> Commit-pinned source for Runpod main: [api-reference-v2/pods/get-a-pod.mdx](https://docs.runpod.io/api-reference-v2/pods/get-a-pod)

# Get A Pod

Retrieve a Runpod Pod by ID with its compute, container, storage, networking, lifecycle status, and connection details.

`GET /v2/pods/{id}`

**Get a pod**

Returns a single pod by ID.

**Parameters**

- `id` (path, required): Pod identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
