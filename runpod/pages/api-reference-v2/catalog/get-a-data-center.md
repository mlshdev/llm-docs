> Pinned source for Runpod main: [api-reference-v2/catalog/get-a-data-center.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference-v2/catalog/get-a-data-center.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/get-a-data-center

# Get A Data Center

Retrieve a single Runpod data center by ID, optionally including current GPU or CPU availability for Pod deployment.

`GET /v2/catalog/datacenters/{id}`

**Get a data center**

Returns a single data center. Availability is included only when requested with include=GPU\_AVAILABILITY or include=CPU\_AVAILABILITY.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string)
  - Example: `US-CA-2`
- `include` (query; array): Comma-separated optional expansions. Supported value: GPU\_AVAILABILITY, CPU\_AVAILABILITY.

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string)
      - `name` (required; string)
      - `region` (required; string; enum: `NORTH_AMERICA`, `SOUTH_AMERICA`, `EUROPE`, `ASIA`, `MIDDLE_EAST`, `AFRICA`, `OCEANIA`, `ANTARCTICA`, `UNKNOWN`): Continental region containing the data center.
      - `globalNetwork` (required; boolean): Whether this data center supports global networking (private cross-datacenter pod-to-pod network).
      - `networkVolumeTypes` (required; array): Network volume tiers this DC supports. Empty = none.
        - `items` (string; enum: `STANDARD`, `HIGH_PERFORMANCE`): Data center network volume storage type.
      - `compliance` (required; array): Compliance certifications held by this data center
        - `items` (string; enum: `GDPR`, `ISO_IEC_27001`, `ISO_14001`, `PCI_DSS`, `HITRUST`, `SOC_1_TYPE_2`, `SOC_2_TYPE_2`, `SOC_3_TYPE_2`, `ITAR`, `FISMA_HIGH`, `HIPAA`, `RENEWABLE`): Compliance certifications.
      - `gpuAvailability` (array): Availability of each GPU this data center offers. Present only when requested with include=GPU\_AVAILABILITY, and omitted entirely when the data center offers no GPUs.
        - `items` (object)
          - `id` (required; string): Catalog resource identifier.
          - `name` (required; string): Human-readable catalog resource name.
          - `availability` (required; string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
      - `cpuAvailability` (array): Availability of each CPU flavor this data center offers. Present only when requested with include=CPU\_AVAILABILITY, and omitted entirely when the data center offers no CPU flavors.
        - `items` (object)
          - `id` (required; string): Catalog resource identifier.
          - `name` (required; string): Human-readable catalog resource name.
          - `availability` (required; string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
    - Example `dataCenter`: `{"id":"US-KS-2","name":"US Kansas 2","region":"NORTH_AMERICA","globalNetwork":true,"networkVolumeTypes":["STANDARD","HIGH_PERFORMANCE"],"compliance":["SOC_2_TYPE_2","ISO_IEC_27001"],"gpuAvailability":[{"id":"NVIDIA GeForce RTX 4090","name":"RTX 4090","availability":"HIGH"}],"cpuAvailability":[{"id":"cpu3c-2-4","name":"Compute-Optimized","availability":"MEDIUM"}]}`
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
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
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
