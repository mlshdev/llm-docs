> Commit-pinned source for Runpod main: [api-reference-v2/billing/get-cluster-billing-history.mdx](https://docs.runpod.io/api-reference-v2/billing/get-cluster-billing-history)

# Get Cluster Billing History

Retrieve time-bucketed Runpod Cluster billing history, including GPU compute, disk, inter-node networking, and total costs.

`GET /v2/billing/clusters`

**Get cluster billing history**

Returns Cluster billing history for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use clusterId to filter to one cluster; without it, records are emitted per cluster per bucket. Each record includes GPU compute, disk, inter-node networking, and total amounts. Clusters are GPU-only, so no CPU cost component is returned.

**Parameters**

- `startTime` (query): Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening.
- `endTime` (query): End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records.
- `bucketSize` (query): Length of each billing time bucket. Defaults to day.
- `lastN` (query): Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both.
- `clusterId` (query): Filter to a specific cluster.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
