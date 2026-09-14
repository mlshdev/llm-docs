> Commit-pinned source for Runpod main: [api-reference-v2/pods/terminate-a-pod.mdx](https://docs.runpod.io/api-reference-v2/pods/terminate-a-pod)

# Terminate A Pod

Permanently terminate a Runpod Pod, release its compute, and understand what happens to persistent mounts, network volumes, and Cluster members.

`DELETE /v2/pods/{id}`

**Terminate a pod**

Permanently terminates and deletes a pod. This is irreversible:
compute is released, any `mounts.persistent` host-local storage is
destroyed with it (a `mounts.network` volume is only detached — the
volume itself is not deleted), and the pod no longer appears in
`listPods`.

Pods that belong to a Cluster cannot be terminated here — delete the
cluster via `DELETE /v2/clusters/{id}`.

**Parameters**

- `id` (path, required): Pod identifier

**Responses**

- `204`: Deleted. Response has no body.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `409`: Pod belongs to a cluster and cannot be terminated via the pod endpoints.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
