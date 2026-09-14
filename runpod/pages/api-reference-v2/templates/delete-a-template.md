> Commit-pinned source for Runpod main: [api-reference-v2/templates/delete-a-template.mdx](https://docs.runpod.io/api-reference-v2/templates/delete-a-template)

# Delete A Template

Permanently delete an owned Runpod template by ID and understand restrictions when Pods or Serverless endpoints still reference it.

`DELETE /v2/templates/{id}`

**Delete a template**

Permanently deletes a template by ID. Only the template's owner can
delete it — public catalog templates return `404` here. Rejected if
the template is currently referenced by a pod (see that pod's
`template` field) or bound to a serverless endpoint.

**Parameters**

- `id` (path, required)

**Responses**

- `204`: Deleted. Response has no body.
- `400`: Template is in use by a pod or serverless endpoint and cannot be deleted
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
