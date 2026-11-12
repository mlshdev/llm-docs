> Pinned source for Runpod main: [api-reference-v2/signup/start-an-authentication-attempt.mdx](https://github.com/runpod/docs/blob/b3d94eb34607d1c8be2215f891c34b55b0a5df24/api-reference-v2/signup/start-an-authentication-attempt.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/signup/start-an-authentication-attempt

# Start An Authentication Attempt

Email a verification code to sign in or create a Runpod account without an API key.

`POST /v2/signup/authentication-attempts`

**Start an authentication attempt**

Emails a verification code to sign in to an existing account or create a new one, without an API key. The response is the same whether or not an account exists for the email.

**Authentication:** none

**Parameters**

- `Idempotency-Key` (header; required; string; minimum length: `1`; maximum length: `128`): Use an unpredictable unique key, such as a UUID, for each new attempt. Retrying with the same key and body returns the same attempt without sending another email. For the same email, the same key with a different body is a `422`.
  - Example: `0f8c2d4e-6a1b-4c3d-9e7f-1a2b3c4d5e6f`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `email` (required; string; format: email; maximum length: `254`): Address to send the verification code to. It may belong to an existing account or a new one.
    - `keyName` (required; string; minimum length: `1`; maximum length: `64`): Name of the API key issued when verification succeeds.
    - `codeChallenge` (required; string; pattern: `^[A-Za-z0-9_-]{43}$`): Unpadded base64url SHA-256 hash of a random `codeVerifier` the caller keeps private. Verify and resend require the matching verifier.

**Responses**

- `201`: Created. A verification code was emailed.
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
