> Pinned source for Runpod main: [api-reference-v2/registries/create-a-container-registry-credential.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/registries/create-a-container-registry-credential.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/registries/create-a-container-registry-credential

# Create A Container Registry Credential

Store credentials for a private container registry in Runpod for authenticated image pulls while keeping the saved secrets write-only.

`POST /v2/registries`

**Create a container registry credential**

Stores credentials for a private container registry. Credentials are write-only.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string; minimum length: `1`)
    - `password` (required; string; minimum length: `1`): Registry password (write-only, not returned in responses)
    - `username` (required; string; minimum length: `1`): Registry username (write-only, not returned in responses)
  - Example `dockerHubRegistry`: `{"name":"dockerhub-private","username":"runpod-user","password":"correct-horse-battery-staple"}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string)
      - `name` (required; string)
    - Example `registry`: `{"id":"6n2k8v4d","name":"dockerhub-private"}`
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
