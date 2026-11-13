> Pinned source for Runpod main: [api-reference-v2/signup/verify-an-authentication-attempt.mdx](https://github.com/runpod/docs/blob/fd5e157158fbbe848892a8a814aedd89266b05c1/api-reference-v2/signup/verify-an-authentication-attempt.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/signup/verify-an-authentication-attempt

# Verify An Authentication Attempt

Exchange an emailed verification code for a new Runpod API key.

`POST /v2/signup/authentication-attempts/{id}/verify`

**Verify an authentication attempt**

Exchanges the emailed code and the `codeVerifier` whose hash started the attempt for a new API key, visible and revocable in the console. A wrong code is a `422`, and five wrong codes lock the attempt.

**Authentication:** none

**Parameters**

- `id` (path; required; string; minimum length: `1`; maximum length: `64`): The `attemptId` returned when the attempt started.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `code` (required; string; pattern: `^[0-9]{6}$`): Verification code from the email.
    - `codeVerifier` (required; string; pattern: `^[A-Za-z0-9._~-]{43,128}$`): The random secret whose SHA-256 hash was sent as `codeChallenge`.

**Responses**

- `200`: OK. The attempt is consumed and the key is issued.
  - Header `Cache-Control` (string; enum: `no-store`)
  - Media type: `application/json`
    - Schema (object)
      - `userId` (required; string)
      - `credential` (required; object)
        - `id` (required; string): Identifies the key in the console, where it can be revoked.
        - `apiKey` (required; string): The raw API key. It is returned once, so store it before doing anything else.
- `400`: The request is malformed or its body could not be read.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `403`: The account requires SSO or MFA, or belongs to an organization. Sign in through the console instead.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `404`: No usable attempt matches this id and `codeVerifier`. It does not exist, expired, already issued a key, or locked after five wrong codes.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `413`: The incoming request body exceeds 4096 bytes (4 KiB).
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
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
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
