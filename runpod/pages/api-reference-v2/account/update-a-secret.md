> Pinned source for Runpod main: [api-reference-v2/account/update-a-secret.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/account/update-a-secret.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/account/update-a-secret

# Update A Secret

Update a Runpod account secret's description or rotate its value. The new value takes effect the next time a referencing Pod or worker boots.

`PATCH /v2/account/secrets/{id}`

**Update a secret**

Rotates a secret's value and/or updates its description. Only the
provided fields are changed and at least one field is required; the
`name` is immutable.

Pods and workers receive the new value at their next boot — running
instances keep the value they were started with.

When both fields are sent, the value is applied first, then the
description. The two updates are not atomic: if the description
update fails after the value was rotated, the response is an error
but the new value has already taken effect. Send the fields in
separate requests when that partial outcome matters.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Secret identifier
  - Example: `2q9m7x4cavgd`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): Only the provided fields are updated; at least one field is required. The secret's `name` is immutable.
    - `value` (string; minimum length: `1`; maximum length: `16777216`): New secret value, replacing the current one. Write-only. Must be smaller than 16 MiB of UTF-8 text (strictly under 16,777,216 bytes).
    - `description` (string; maximum length: `65535`): New human-readable description, at most 65,535 bytes of UTF-8 text. Send `""` to clear.
  - Example `rotateSecret`: `{"value":"hf_********************************"}`
  - Example `updateDescription`: `{"description":"Rotated HF token"}`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object): An account-scoped secret: an encrypted string stored by Runpod, referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder, substituted with the secret's value when the pod or worker boots. The value is write-only and never returned by the API.
      - `id` (required; string): Unique secret identifier
      - `name` (required; string): Unique, human-readable name — the `<name>` referenced by the `RUNPOD_SECRET_<name>` placeholder. Immutable after creation.
      - `description` (nullable): Human-readable description
      - `createdAt` (required; string; format: date-time): When the secret was created
      - `valueLastUpdatedAt` (format: date-time; nullable): When the secret's value was last set (creation or rotation)
    - Example `secret`: `{"id":"2q9m7x4cavgd","name":"hf-token","description":"Rotated HF token","createdAt":"2026-08-01T12:00:00Z","valueLastUpdatedAt":"2026-09-10T17:40:12Z"}`
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
