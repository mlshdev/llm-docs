> Commit-pinned source for Runpod main: [api-reference-v2/registries/delete-a-container-registry-credential.mdx](https://docs.runpod.io/api-reference-v2/registries/delete-a-container-registry-credential)

# Delete A Container Registry Credential

Delete a Runpod container registry credential by ID and understand how active Pods and templates that reference it are handled.

`DELETE /v2/registries/{id}`

**Delete a container registry credential**

Permanently deletes a container registry credential by ID. Rejected
if any pod currently uses this credential to pull its image.
Templates that reference it are not part of that check — they
silently lose the reference (`registry` becomes null) instead of
blocking the delete.

**Parameters**

- `id` (path, required)

**Responses**

- `204`: Deleted. Response has no body.
- `400`: Registry credential is in use by a pod and cannot be deleted
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
