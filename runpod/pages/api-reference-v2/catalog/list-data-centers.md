> Commit-pinned source for Runpod main: [api-reference-v2/catalog/list-data-centers.mdx](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers)

# List Data Centers

List Runpod data centers with region, compliance, storage, networking, and optional GPU or CPU availability details.

`GET /v2/catalog/datacenters`

**List data centers**

Returns available data center locations with region, compliance, supported network volume tiers, and global networking support. Use include=GPU_AVAILABILITY or include=CPU_AVAILABILITY to add per-resource availability arrays to each data center. The regions, networkVolumeTypes, compliance, and globalNetwork query parameters filter the list before it is returned.

**Parameters**

- `include` (query): Comma-separated optional expansions. Supported value: GPU_AVAILABILITY, CPU_AVAILABILITY.
- `regions` (query): Comma-separated DataCenterRegion enum values. Values within this filter use OR semantics. Different filter families combine with AND.
- `networkVolumeTypes` (query): Comma-separated volume types. Supported values: STANDARD, HIGH_PERFORMANCE. Values within this filter use AND semantics; volumes=STANDARD,HIGH_PERFORMANCE requires both storage types. Different filter families combine with AND.
- `compliance` (query): Comma-separated Compliance enum values. Values within this filter use AND semantics; compliance=GDPR,SOC_2_TYPE_2 requires both certifications. Different filter families combine with AND.
- `globalNetwork` (query): Filter by global networking support. true returns only data centers that support global networking; false only those that do not. Different filter families combine with AND.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
