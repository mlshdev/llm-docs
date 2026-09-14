> Commit-pinned source for Runpod main: [api-reference-v2/pods/update-a-pod.mdx](https://docs.runpod.io/api-reference-v2/pods/update-a-pod)

# Update A Pod

Update selected settings on an existing Runpod Pod while preserving omitted fields, with guidance on mutable fields and restart behavior.

`PATCH /v2/pods/{id}`

**Update a pod**

Partially updates a pod's configuration. This is a PATCH: only the
fields present in the body are changed, and omitted fields are left
untouched. Use empty values only when you explicitly mean to clear a
field (for example, set `registry` to `null` or set `ports` to `[]`).
See `UpdatePodRequest` for the full body.

Mutable fields: `name`, `image`, `args`, `disk`, `ports`, `env`,
`registry`, `mounts`, `locked`, and `globalNetworking`. Some changes
apply immediately while others (e.g. `globalNetworking`) take effect
on the pod's next start/restart, as noted on the individual fields.

Pods that belong to a Cluster cannot be updated here — manage them
through `/v2/clusters/{id}`.

Returns `200` with the full updated pod.

**Parameters**

- `id` (path, required): Pod identifier

**Request body**

**Responses**

- `200`: OK
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `409`: Pod belongs to a cluster and cannot be modified via the pod endpoints.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
