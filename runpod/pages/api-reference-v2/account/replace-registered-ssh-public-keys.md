> Pinned source for Runpod main: [api-reference-v2/account/replace-registered-ssh-public-keys.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/account/replace-registered-ssh-public-keys.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/account/replace-registered-ssh-public-keys

# Replace Registered Ssh Public Keys

Replace all SSH public keys registered to your Runpod account, remove omitted keys, and apply the new set to subsequently created Pods.

`PUT /v2/account/ssh-keys`

**Replace registered SSH public keys**

Replaces the account's full set of registered SSH public keys. Existing keys not present in the request are removed; send `[]` to remove all keys. Keys take effect for pods created afterwards with `startSsh` — running pods are not updated.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `keys` (required; array): The full set of SSH public keys to register — this is a complete replacement, not a merge. Each entry is an authorized\_keys-style line: `<type> <base64-key> [comment]`, e.g. from `~/.ssh/id_ed25519.pub`. Send `[]` to remove all keys. These keys are provisioned into pods created with `startSsh` and authenticate both SSH paths reported in the pod's `ssh` block.
      - `items` (string; pattern: `^(ssh|ecdsa|sk)-[^\s]+ [^\s]+([ \t][^\n\r]*)?$`)
  - Example `replaceKeys`: `{"keys":["ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILXGDN/SclOozk1xsDztpmhGiKkkrfQB9SKoO8dSIQQZ me@example.com"]}`

**Responses**

- `200`: OK — the updated key set
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `keys` (required; array): The account's registered SSH public keys, one authorized\_keys-style entry per element (`<type> <base64-key> [comment]`).
        - `items` (string)
    - Example `keys`: `{"keys":["ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILXGDN/SclOozk1xsDztpmhGiKkkrfQB9SKoO8dSIQQZ me@example.com"]}`
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
