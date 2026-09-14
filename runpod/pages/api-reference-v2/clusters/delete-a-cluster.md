> Commit-pinned source for Runpod main: [api-reference-v2/clusters/delete-a-cluster.mdx](https://docs.runpod.io/api-reference-v2/clusters/delete-a-cluster)

# Delete A Cluster

Permanently delete a Runpod Cluster and terminate all of its member Pods, with the response confirming the deleted Cluster.

`DELETE /v2/clusters/{id}`

**Delete a cluster**

Permanently deletes a cluster and terminates all of its member pods.

**Parameters**

- `id` (path, required): Cluster identifier

**Responses**

- `204`: Deleted
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: Cluster not found
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
