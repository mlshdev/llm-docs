> Pinned source for Runpod main: [api-reference-v2/account/list-secrets.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/account/list-secrets.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/account/list-secrets

# List Secrets

List the encrypted secrets on your Runpod account that Pods, Serverless endpoints, and templates reference from environment variables. Values are never returned.

`GET /v2/account/secrets`

**List secrets**

Returns the account's secrets — encrypted strings referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder syntax, substituted with the secret's value when the pod or worker boots. Secret values are write-only and are never returned.

**Authentication:** `bearerAuth`

**Parameters**

- `name` (query; string): When provided, returns only the secret with this name (case-insensitive).

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `secrets` (required; array)
        - `items` (object): An account-scoped secret: an encrypted string stored by Runpod, referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder, substituted with the secret's value when the pod or worker boots. The value is write-only and never returned by the API.
          - `id` (required; string): Unique secret identifier
          - `name` (required; string): Unique, human-readable name — the `<name>` referenced by the `RUNPOD_SECRET_<name>` placeholder. Immutable after creation.
          - `description` (nullable): Human-readable description
          - `createdAt` (required; string; format: date-time): When the secret was created
          - `valueLastUpdatedAt` (format: date-time; nullable): When the secret's value was last set (creation or rotation)
    - Example `secrets`: `{"secrets":[{"id":"2q9m7x4cavgd","name":"hf-token","description":"Hugging Face read token","createdAt":"2026-08-01T12:00:00Z","valueLastUpdatedAt":"2026-09-01T08:30:00Z"}]}`
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
