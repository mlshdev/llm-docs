> Commit-pinned source for Runpod main: [api-reference-v2/catalog/list-gpu-types.mdx](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types)

# List Gpu Types

List available Runpod GPU types with pricing and optional availability filters by product, country, and deployment context.

`GET /v2/catalog/gpus`

**List GPU types**

Returns available GPU types with pricing. Availability is included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. With countryCodes, the list is narrowed to GPU types deployable in those countries, so "this geography + this chip" resolves in one read.

**Parameters**

- `include` (query): Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future.
- `product` (query): Comma-separated availability product contexts. Supported values: POD, CLUSTER, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: the same GPU type can be scarce for pods and plentiful for serverless, so the context has to be stated rather than assumed.
- `count` (query): GPU count for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Defaults to 1.
- `cloud` (query): Cloud type for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Supported values: SECURE, COMMUNITY. Upstream default when omitted: SECURE.
- `countryCodes` (query): Comma-separated ISO 3166-1 alpha-2 country codes, uppercase, to constrain availability to — e.g. FR or FR,DE. Values within this filter use OR semantics. Valid only with include=AVAILABILITY (400 otherwise); a malformed entry is a 422. Scopes availability, lowest-price calculations and the dataCenters array to those countries, so a listed data center outside them is omitted rather than returned with availability NONE. On the list endpoint a GPU type with no data center in those countries drops out entirely; the single-GPU endpoint still returns the requested type, with availability NONE and dataCenters omitted, so a 404 keeps meaning the GPU type does not exist. Read the NONE on availability rather than the absence of dataCenters, which is also absent when availability was not requested.
- `cudaVersions` (query): Comma-separated CUDA versions to scope availability and lowest-price calculations to, matched exactly. Format: major.minor, e.g. 12.8 — a bare major is rejected here because it identifies no version. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with minCudaVersion (400 if both are sent); a malformed entry is a 422. Also narrows the returned cudaVersions array; omit it to enumerate every version offered.
- `minCudaVersion` (query): Lowest acceptable CUDA version to scope availability and lowest-price calculations to, compared numerically. Format: integer major or major.minor, e.g. 12 or 12.1 — unlike the `gpu.minCudaVersion` body field on pod and endpoint create, a bare major is accepted here and means any release of that major, because this filter only widens a read. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with cudaVersions (400 if both are sent); a malformed value is a 422. Use this for an open-ended floor and cudaVersions for an exact set.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
