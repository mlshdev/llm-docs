> Pinned source for Runpod main: [api-reference-v2/pods/run-a-command-in-a-pod.mdx](https://github.com/runpod/docs/blob/badc3b0885d17c76062faf033073f6d062af3aee/api-reference-v2/pods/run-a-command-in-a-pod.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/pods/run-a-command-in-a-pod

# Run A Command In A Pod

Run one command inside a running Runpod Pod's container and get its stdout, stderr, and exit code back, with no SSH setup.

`POST /v2/pods/{id}/exec`

**Run a command in a pod**

Runs one command inside the pod's container and returns its stdout,
stderr and exit code once it finishes. No SSH key, public IP or exposed
port is needed, and it works with any image.

`command` is an argv array, run directly and never through a shell. For
pipes, redirects or globbing pass `["sh", "-c", "..."]`.

A command that exits non-zero is a result, not an error: the call
answers `200` with `exitCode` set. A command still running after
`timeoutSeconds` (1-25, default 20) answers `200` with
`timedOut: true` and a null `exitCode`. `timedOut` means the call
stopped waiting, not that the command was stopped: it may keep
running in the container.

`stdout` and `stderr` are each capped at 1 MiB. Output past the cap is
cut and `truncated` is `true`.

The pod must be running with its container up, otherwise this answers
`409`; while the container is still starting, the `409` carries
`Retry-After`. A pod whose machine has not been updated for exec yet
answers `503` with `Retry-After`.

`X-Team-Id` is not applied on this route: it reaches only pods owned by
the caller's own account.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Pod identifier
  - Example: `pod_abc123`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `command` (required; array; minimum items: `1`; maximum items: `256`): Command to run, as an argv array of 1-256 arguments of at most 4096 characters each. It is run directly, never through a shell; for pipes, redirects or globbing pass `["sh", "-c", "..."]`. The first element, the program, must contain a non-whitespace character; later arguments may be empty. No argument may contain a NUL character.
      - `items` (string; maximum length: `4096`; pattern: `^[^\x00]*$`)
    - `timeoutSeconds` (integer; default: `20`; minimum: `1`; maximum: `25`): How long the call waits for the command to finish, in seconds. A command still running at this point returns with `timedOut: true`.
    - `cwd` (string; maximum length: `1024`; pattern: `^/[^\x00-\x1f\x7f]*$`): Absolute working directory for the command, at most 1024 characters and without control characters. Defaults to the image's `WORKDIR`.
    - `env` (object): Up to 64 environment variables added to the container's environment for this command only. A name is 1-256 characters and must not contain `=` or a NUL character; a value is at most 16384 characters and must not contain a NUL character.
      - `additional properties` (string; maximum length: `16384`; pattern: `^[^\x00]*$`)
  - Example `gpuQuery`: `{"command":["nvidia-smi","--query-gpu=name,memory.used","--format=csv"],"timeoutSeconds":10}`
  - Example `failingInstall`: `{"command":["sh","-c","pip install -q nosuchpackage"],"cwd":"/workspace"}`
  - Example `timeout`: `{"command":["sleep","120"],"timeoutSeconds":5}`

**Responses**

- `200`: The command finished or the call stopped waiting for it. A non-zero `exitCode` is a result, not an error.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `stdout` (required; string): The command's standard output, as UTF-8 with invalid bytes replaced. Capped at 1 MiB; see `truncated`.
      - `stderr` (required; string): The command's standard error, as UTF-8 with invalid bytes replaced. Capped at 1 MiB; see `truncated`.
      - `exitCode` (required; nullable): The command's exit code. A non-zero code is a result, not an error. Null only when `timedOut` is `true`.
      - `timedOut` (required; boolean): The call stopped waiting at `timeoutSeconds`. It does not mean the command was stopped: it may still be running inside the container.
      - `truncated` (required; boolean): `stdout` or `stderr` reached the 1 MiB cap and was cut.
      - `durationMs` (required; integer): Wall time of the command as measured on the pod's machine, in milliseconds.
    - Example `gpuQuery`: `{"stdout":"name, memory.used [MiB]\nNVIDIA H100 80GB HBM3, 0 MiB\n","stderr":"","exitCode":0,"timedOut":false,"truncated":false,"durationMs":412}`
    - Example `failingInstall`: `{"stdout":"","stderr":"ERROR: No matching distribution found for nosuchpackage\n","exitCode":1,"timedOut":false,"truncated":false,"durationMs":2310}`
    - Example `timeout`: `{"stdout":"","stderr":"","exitCode":null,"timedOut":true,"truncated":false,"durationMs":5003}`
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
- `409`: The pod is not running, or its container has not started yet. A container that is starting answers with `Retry-After`.
  - Header `Retry-After` (integer): Seconds to wait before retrying. Sent only while the pod's container is starting.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
- `502`: The call did not complete. When the pod could not be looked up, or its machine or the exec service could not be reached, the command did not start: retry the call. When the command was sent but no usable answer came back, it may still be running: check before you retry. When the result could not be read, the command ran.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `503`: Command execution is not available for this pod right now: its machine has not been updated for exec, execution is busy, or it is temporarily unavailable. The pod itself is unaffected; retry after `Retry-After`.
  - Header `Retry-After` (integer): Seconds to wait before retrying.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `504`: The pod's machine, or the exec service in front of it, did not answer in time. The command may still be running: check before you retry.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
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
