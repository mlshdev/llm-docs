> Pinned source for Runpod main: [api-reference-v2/catalog/get-a-cpu-type.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/catalog/get-a-cpu-type.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/get-a-cpu-type

# Get A Cpu Type

Retrieve one Runpod CPU type with pricing and optional availability details for a specified product and deployment context.

`GET /v2/catalog/cpus/{id}`

**Get a CPU type**

Returns a single CPU type with pricing. Availability details are included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string)
  - Example: `cpu5c`
- `include` (query; array; maximum items: `1`): Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future.
  - Example: `["AVAILABILITY"]`
- `product` (query; array): Comma-separated availability product contexts. Supported values for CPUs: POD, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: availability differs by product.
- `vcpuCount` (query; integer; minimum: `2`): Availability vCPU count. Valid only with include=AVAILABILITY. Must be a power of two.
  - Example: `4`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): CPU flavor identifier (use in cpu.id for pod creation)
      - `name` (required; string): Human-readable flavor name
      - `group` (required; string): CPU generation group
      - `vcpu` (required; object)
        - `min` (required; integer)
        - `max` (required; integer)
      - `ramGbPerVcpu` (required; number; format: float): GB of RAM allocated per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total RAM for an instance of this flavor. May be fractional.
      - `price` (required; object)
        - `securePerVcpu` (required; number; format: float): Price for secure pods per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total price.
        - `serverlessPerVcpu` (required; number; format: float): Price for serverless per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total price.
      - `availability` (string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
      - `dataCenters` (array): Per-datacenter CPU availability for the requested `product` contexts, listing only the datacenters that offer this CPU flavor. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the flavor is unavailable everywhere.
        - `items` (object)
          - `id` (required; string): Data center identifier.
          - `name` (required; string): Human-readable data center name.
          - `availability` (required; string; enum: `NONE`, `LOW`, `MEDIUM`, `HIGH`): Catalog stock availability level.
    - Example `cpu`: `{"id":"cpu3c-2-4","name":"Compute-Optimized","group":"Gen 3","vcpu":{"min":2,"max":32},"ramGbPerVcpu":2.5,"price":{"securePerVcpu":0.04,"serverlessPerVcpu":0.03},"availability":"MEDIUM","dataCenters":[{"id":"US-KS-2","name":"US Kansas 2","availability":"MEDIUM"}]}`
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
