> Commit-pinned source for Runpod main: [api-reference-v2/network-volumes/update-a-network-volume.mdx](https://docs.runpod.io/api-reference-v2/network-volumes/update-a-network-volume)

# Update A Network Volume

`PATCH /v2/network-volumes/{id}`

**Update a network volume**

Updates mutable fields on a network volume. Only provided fields are changed.
Note: `size` may only increase; attempts to reduce size will be rejected.

**Parameters**

- `id` (path, required): Network volume identifier

**Request body**

**Responses**

- `200`: OK
- `400`: Invalid request body or size decrease attempted
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
