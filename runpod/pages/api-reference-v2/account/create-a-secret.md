> Pinned source for Runpod main: [api-reference-v2/account/create-a-secret.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference-v2/account/create-a-secret.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/account/create-a-secret

# Create A Secret

Create an encrypted Runpod account secret that Pods, Serverless endpoints, and templates can reference from environment variables at boot.

`POST /v2/account/secrets`

**Create a secret**

Stores a new account-scoped encrypted string. `name` must be unique
across the account's secrets and is immutable; `value` is write-only
and can never be read back through the API.

Use the secret from pods, serverless endpoints, and templates by
setting an environment variable's value to
`{{ RUNPOD_SECRET_<name> }}` — Runpod substitutes the stored value
when the pod or worker boots.

Returns `201` with the created secret's metadata, or `409` when the
name is already taken.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string; minimum length: `1`; maximum length: `191`; pattern: `^[a-zA-Z_][a-zA-Z0-9_.\-/]*$`): Unique name for the secret — referenced from environment variables as `{{ RUNPOD_SECRET_<name> }}`; immutable after creation. Maximum 191 characters, must start with a letter or underscore, and may contain letters, digits, and `_.-/`. Names beginning with the reserved prefix `RUNPOD` are rejected (case-insensitive).
    - `value` (required; string; minimum length: `1`; maximum length: `16777216`): The secret value. Write-only — never returned by the API. Must be smaller than 16 MiB of UTF-8 text (strictly under 16,777,216 bytes).
    - `description` (string; maximum length: `65535`): Optional human-readable description, at most 65,535 bytes of UTF-8 text.
  - Example `secret`: `{"name":"hf-token","value":"hf_********************************","description":"Hugging Face read token"}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object): An account-scoped secret: an encrypted string stored by Runpod, referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder, substituted with the secret's value when the pod or worker boots. The value is write-only and never returned by the API.
      - `id` (required; string): Unique secret identifier
      - `name` (required; string): Unique, human-readable name — the `<name>` referenced by the `RUNPOD_SECRET_<name>` placeholder. Immutable after creation.
      - `description` (nullable): Human-readable description
      - `createdAt` (required; string; format: date-time): When the secret was created
      - `valueLastUpdatedAt` (format: date-time; nullable): When the secret's value was last set (creation or rotation)
    - Example `secret`: `{"id":"2q9m7x4cavgd","name":"hf-token","description":"Hugging Face read token","createdAt":"2026-09-10T17:23:45Z","valueLastUpdatedAt":"2026-09-10T17:23:45Z"}`
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
- `409`: A secret with this name already exists.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
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
