> Commit-pinned source for Runpod main: [api-reference-v2/network-volumes/create-a-network-volume.mdx](https://docs.runpod.io/api-reference-v2/network-volumes/create-a-network-volume)

# Create A Network Volume

Create a persistent Runpod network volume with a name, size, data center, and storage tier for use by Pods and Serverless workers.

`POST /v2/network-volumes`

**Create a network volume**

Provisions a new network volume — persistent, network-attached
storage that can be mounted into pods and serverless workers.
Required inputs are `name`, `size` (in GB), and `dataCenter`; an
optional `type` selects the storage tier and is immutable after
creation. See `CreateNetworkVolumeRequest` for the size bounds and
tier options.

This creates a billable persistent resource that keeps incurring
storage charges until it is deleted. Returns `201` with the created
network volume, including its assigned `id`.

**Request body**

**Responses**

- `201`: Created
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
