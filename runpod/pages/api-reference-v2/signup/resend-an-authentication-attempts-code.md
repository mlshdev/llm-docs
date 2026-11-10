> Pinned source for Runpod main: [api-reference-v2/signup/resend-an-authentication-attempts-code.mdx](https://github.com/runpod/docs/blob/03654ae6f119347890b8633ab8b2d72379866aef/api-reference-v2/signup/resend-an-authentication-attempts-code.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/signup/resend-an-authentication-attempts-code

# Resend An Authentication Attempts Code

Email a new verification code for a pending authentication attempt.

`POST /v2/signup/authentication-attempts/{id}/resend`

**Resend an authentication attempt's code**

Emails a new verification code and invalidates the previous one. The attempt's `expiresAt` and wrong-code count carry over. Resending before `resendAfter` is a `429` with `Retry-After`.

**Authentication:** none

**Parameters**

- `id` (path; required; string; minimum length: `1`; maximum length: `64`): The `attemptId` returned when the attempt started.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `codeVerifier` (required; string; pattern: `^[A-Za-z0-9._~-]{43,128}$`): The random secret whose SHA-256 hash was sent as `codeChallenge`.

**Responses**

- `200`: OK. A new code was emailed.
  - Media type: `application/json`
    - Schema (object)
      - `attemptId` (required; string): Identifies the attempt in verify and resend.
      - `expiresAt` (required; string; format: date-time): When the attempt stops accepting codes. Resending does not extend it.
      - `resendAfter` (required; string; format: date-time): Earliest time a resend is accepted.
- `400`: The request is malformed or its body could not be read.
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
