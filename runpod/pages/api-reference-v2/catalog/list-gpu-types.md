> Pinned source for Runpod main: [api-reference-v2/catalog/list-gpu-types.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/api-reference-v2/catalog/list-gpu-types.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types

# List Gpu Types

List available Runpod GPU types with pricing and optional availability filters by product, country, and deployment context.

`GET /v2/catalog/gpus`

**List GPU types**

Returns available GPU types with pricing. Availability is included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. With countryCodes, the list is narrowed to GPU types deployable in those countries, so "this geography + this chip" resolves in one read.

**Authentication:** `bearerAuth`

**Parameters**

- `include` (query; array; maximum items: `1`): Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future.
  - Example: `["AVAILABILITY"]`
- `product` (query; array): Comma-separated availability product contexts. Supported values: POD, CLUSTER, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: the same GPU type can be scarce for pods and plentiful for serverless, so the context has to be stated rather than assumed.
  - Example: `["POD","SERVERLESS"]`
- `count` (query; integer; default: `1`; minimum: `1`): GPU count for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Defaults to 1.
  - Example: `2`
- `cloud` (query; string; enum: `SECURE`, `COMMUNITY`): Cloud type for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Supported values: SECURE, COMMUNITY. Upstream default when omitted: SECURE.
- `countryCodes` (query; array): Comma-separated ISO 3166-1 alpha-2 country codes, uppercase, to constrain availability to — e.g. FR or FR,DE. Values within this filter use OR semantics. Valid only with include=AVAILABILITY (400 otherwise); a malformed entry is a 422. Scopes availability, lowest-price calculations and the dataCenters array to those countries, so a listed data center outside them is omitted rather than returned with availability NONE. On the list endpoint a GPU type with no data center in those countries drops out entirely; the single-GPU endpoint still returns the requested type, with availability NONE and dataCenters omitted, so a 404 keeps meaning the GPU type does not exist. Read the NONE on availability rather than the absence of dataCenters, which is also absent when availability was not requested.
  - Example: `["FR","DE"]`
- `cudaVersions` (query; array): Comma-separated CUDA versions to scope availability and lowest-price calculations to, matched exactly. Format: major.minor, e.g. 12.8 — a bare major is rejected here because it identifies no version. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with minCudaVersion (400 if both are sent); a malformed entry is a 422. Also narrows the returned cudaVersions array; omit it to enumerate every version offered.
  - Example: `["12.8","12.6"]`
- `minCudaVersion` (query; string; pattern: `^\d+(\.\d+)?$`): Lowest acceptable CUDA version to scope availability and lowest-price calculations to, compared numerically. Format: integer major or major.minor, e.g. 12 or 12.1 — unlike the `gpu.minCudaVersion` body field on pod and endpoint create, a bare major is accepted here and means any release of that major, because this filter only widens a read. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with cudaVersions (400 if both are sent); a malformed value is a 422. Use this for an open-ended floor and cudaVersions for an exact set.
  - Example: `12.1`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `gpus` (required; array)
        - `items` (object)
          - `id` (required; string): Individual GPU type identifier (use for pod creation)
          - `name` (required; string)
          - `pool` (required; nullable): Serverless GPU pool ID (use for serverless endpoint creation). Null if GPU is not in a serverless pool.
          - `manufacturer` (required; string; enum: `NVIDIA`, `AMD`, `UNKNOWN`): Canonical GPU hardware manufacturer.
          - `memory` (required; integer): VRAM in GB
          - `secure` (required; boolean): Available on secure cloud
          - `community` (required; boolean): Available on community cloud
          - `price` (required; object): List price in USD per hour for a **single** GPU of this type. Pod rates are quoted separately per cloud (`secure`, `community`); `serverless` is the rate for this GPU's pool. In every case the rate for a unit is the figure times `gpu.count`; the rate actually billed for a pod is reported as `cost` on the pod itself.
            - `secure` (required; number; format: float)
            - `community` (required; number; format: float)
            - `serverless` (number; format: float): Serverless list price per GPU per hour, from the `pool` this GPU belongs to. Multiply by `gpu.count` for the per-worker rate. Absent when the GPU is not in a serverless pool available to the caller. Negotiated account discounts are not reflected.
          - `maxCount` (required; object): The largest number of GPUs you can request on a single pod of this type, quoted separately per cloud. A pod runs on one machine, so this is the GPU count of the largest machine of this type Runpod operates in that cloud. This is a ceiling, not a stock level — it does not mean that many GPUs are free right now. For current availability, request `include=AVAILABILITY&product=POD` and read `availability` (overall) or `dataCenters` (per data center).
            - `secure` (required; integer)
            - `community` (required; integer)
          - `availability` (string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
          - `dataCenters` (array): Per-datacenter GPU availability for the requested `product` contexts, listing only the datacenters that offer this GPU in the requested configuration. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the configuration is unavailable everywhere.
            - `items` (object)
              - `id` (required; string): Data center identifier.
              - `name` (required; string): Human-readable data center name.
              - `availability` (required; string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
          - `cudaVersions` (array): CUDA versions offered by machines with this GPU type, each tagged with current capacity. Present only when requested with include=AVAILABILITY, and scoped by the same filters as `availability` (`count`, `cloud`, `product`, and whichever of `cudaVersions` / `minCudaVersion` was supplied). Machines that report no CUDA version are skipped, so this property is absent entirely for a GPU type with none — AMD, for instance. Treat a missing `cudaVersions` the same as an empty one. A version absent from a populated list is not offered for this GPU type.
            - `items` (object)
              - `version` (required; string; pattern: `^\d+\.\d+$`): CUDA version as `major.minor`, suitable for `gpu.allowedCudaVersions` on pod create.
              - `available` (required; boolean): True when at least one machine on this CUDA version has free capacity now. False means the version is offered for this GPU type but is currently full, so a pod constrained to it will fail on capacity.
    - Example `gpus`: `{"gpus":[{"id":"NVIDIA GeForce RTX 4090","name":"RTX 4090","pool":"ADA_24","manufacturer":"NVIDIA","memory":24,"secure":true,"community":true,"price":{"secure":0.44,"community":0.31,"serverless":1.1},"maxCount":{"secure":8,"community":4},"availability":"HIGH","dataCenters":[{"id":"US-KS-2","name":"US Kansas 2","availability":"HIGH"}]}]}`
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `missingBearerToken`: `{"title":"Unauthorized","status":401,"detail":"missing bearer token"}`
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
