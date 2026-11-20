> Pinned source for Runpod main: [api-reference-v2/tags/create-a-tag.mdx](https://github.com/runpod/docs/blob/2260ee963520748b2e23054fcee3ac046f62deff/api-reference-v2/tags/create-a-tag.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/tags/create-a-tag

# Create A Tag

Create a Runpod tag and optionally attach it to pods, clusters, serverless endpoints, and network volumes.

`POST /v2/tags`

**Create a tag**

Creates a tag. Pass `resources` to attach it at creation time; the tag is created and attached in one step, so if any resource cannot be attached, no tag is created.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `key` (required; string; minimum length: `1`; maximum length: `191`; pattern: `[^\t-\r  - ]`): Tag key, 1–191 characters as sent, with at least one that is not whitespace. Leading and trailing whitespace is ignored. Keys under the reserved `runpod:` prefix, in any letter case, are rejected.
    - `value` (required; string; maximum length: `191`): Tag value, at most 191 characters. May be empty. Stored exactly as sent, whitespace included.
    - `resources` (array; maximum items: `100`): Existing resources to attach the new tag to.
      - `items` (object)
        - `id` (required; string; minimum length: `1`)
        - `type` (required; string; enum: `POD`, `CLUSTER`, `SERVERLESS_ENDPOINT`, `NETWORK_VOLUME`): Kind of resource a cost center or tag can be attached to.
  - Example `bare`: `{"key":"env","value":"dev"}`
  - Example `withResources`: `{"key":"env","value":"dev","resources":[{"id":"p9k2m4n6q8","type":"POD"},{"id":"nv_7h3x1q","type":"NETWORK_VOLUME"}]}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): Shared by every resource the tag is attached to.
      - `key` (required; string): Returned exactly as stored.
      - `value` (required; string): Returned exactly as stored. May be empty.
      - `createdAt` (required; string; format: date-time)
      - `updatedAt` (required; string; format: date-time)
    - Example `tag`: `{"id":"clz1x9k4a0000qw3h8s7d2f1g","key":"env","value":"dev","createdAt":"2026-11-04T09:00:00Z","updatedAt":"2026-11-04T09:00:00Z"}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
- `409`: A tag with this key and value already exists, or a resource already carries 25 public tags, the most one resource can carry. In the second case the detail names the resource.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `413`: The incoming request body exceeds 1048576 bytes (1 MiB). Body size is checked after authentication and rate limiting. GET and DELETE reject any nonempty request body with `422` instead. An operation can also return this status when the request it expands into is too large, even if the incoming body is within the limit.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `requestTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Request body exceeds the 1048576 byte limit."}`
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)

**Required API key scope:** `tags:write`
