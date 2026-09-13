> Commit-pinned source for Runpod main: [api-reference-v2/network-volumes/delete-a-network-volume.mdx](https://docs.runpod.io/api-reference-v2/network-volumes/delete-a-network-volume)

# Delete A Network Volume

Permanently delete a Runpod network volume, release its persistent storage, and confirm the removed volume in the response.

`DELETE /v2/network-volumes/{id}`

**Delete a network volume**

Permanently deletes a network volume and releases its storage.

**Parameters**

- `id` (path, required): Network volume identifier

**Responses**

- `204`: Deleted. Response has no body.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
