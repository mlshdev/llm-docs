> Pinned source for Runpod main: [api-reference-v2/network-volumes/update-a-network-volume.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference-v2/network-volumes/update-a-network-volume.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/network-volumes/update-a-network-volume

# Update A Network Volume

Update a Runpod network volume's mutable fields, such as its name or size. Size can only be increased, never reduced.

`PATCH /v2/network-volumes/{id}`

**Update a network volume**

Updates mutable fields on a network volume. Only provided fields are changed.
Note: `size` may only increase; attempts to reduce size will be rejected.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Network volume identifier
  - Example: `agv6w2qcg7`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): Only the provided fields are updated. At least one field must be present; an empty body is rejected.
    - `name` (string; minimum length: `1`): New human-readable name
    - `size` (integer; minimum: `10`; maximum: `4096`): New size in GB. Must be greater than or equal to the current size — network volume storage cannot be reduced.
  - Example `resizeNetworkVolume`: `{"size":200}`

**Responses**

- `200`: OK
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
    - Example `networkVolume`: `{"id":"2q9m7x4c","name":"training-dataset","size":200,"dataCenter":"US-KS-2","type":"HIGH_PERFORMANCE"}`
- `400`: Invalid request body or size decrease attempted
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
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
