> Commit-pinned source for Runpod main: [api-reference-v2/serverless/delete-a-serverless-endpoint.mdx](https://docs.runpod.io/api-reference-v2/serverless/delete-a-serverless-endpoint)

# Delete A Serverless Endpoint

Permanently delete a Runpod Serverless endpoint, terminate its workers, cancel queued and active jobs, and remove its bound template.

`DELETE /v2/serverless/{id}`

**Delete a serverless endpoint**

Permanently deletes a serverless endpoint and its bound template.
This is irreversible: all workers are terminated and any queued or
in-progress jobs are cancelled.

**Parameters**

- `id` (path, required): Serverless endpoint identifier

**Responses**

- `204`: Deleted. Response has no body.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
