> Pinned source for Runpod main: [api-reference-v2/network-volumes/create-a-network-volume.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/api-reference-v2/network-volumes/create-a-network-volume.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/network-volumes/create-a-network-volume

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

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `dataCenter` (required; string; minimum length: `1`): Data center in which to create the volume
    - `name` (required; string; minimum length: `1`): Human-readable name
    - `size` (required; integer; minimum: `10`; maximum: `4096`): Storage to allocate in GB
    - `type`: Storage tier for the volume. Optional. When omitted, the volume is provisioned using the requested data center's default (primary) storage tier. HIGH\_PERFORMANCE provisions a high-performance (HPS) volume; STANDARD provisions a standard volume. A volume's tier is immutable after creation.
      - allOf:
        - `variant 1` (string; enum: `STANDARD`, `HIGH_PERFORMANCE`): Data center network volume storage type.
  - Example `networkVolume`: `{"name":"training-dataset","dataCenter":"US-KS-2","size":50,"type":"HIGH_PERFORMANCE"}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): Unique network volume identifier
      - `name` (required; string): Human-readable name (not required to be unique)
      - `size` (required; integer; minimum: `10`; maximum: `4096`): Allocated storage in GB
      - `dataCenter` (required; string): Data center location; immutable after creation
      - `type` (required): Storage tier of this volume. Set at creation and immutable.
        - allOf:
          - `variant 1` (string; enum: `STANDARD`, `HIGH_PERFORMANCE`): Data center network volume storage type.
    - Example `networkVolume`: `{"id":"2q9m7x4c","name":"training-dataset","size":50,"dataCenter":"US-KS-2","type":"HIGH_PERFORMANCE"}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `badRequest`: `{"title":"Bad Request","status":400,"detail":"request could not be processed"}`
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
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `validationFailed`: `{"title":"Unprocessable Entity","status":422,"detail":"Request validation failed."}`
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
