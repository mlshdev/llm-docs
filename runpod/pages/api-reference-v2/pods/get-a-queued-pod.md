> Pinned source for Runpod main: [api-reference-v2/pods/get-a-queued-pod.mdx](https://github.com/runpod/docs/blob/badc3b0885d17c76062faf033073f6d062af3aee/api-reference-v2/pods/get-a-queued-pod.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/pods/get-a-queued-pod

# Get A Queued Pod

Retrieve a queued Runpod Pod by ID to see whether it is still waiting for capacity, which pod it created, or why it failed.

`GET /v2/queued-pods/{id}`

**Get a queued pod**

Returns a single queued pod by ID. Poll it after a `202` from
`createPod`: `status` moves from `QUEUED` to `DEPLOYED` (with
`podId`), `FAILED` (with `failureReason`), `EXPIRED`, or `CANCELLED`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Queued pod identifier
  - Example: `clz1x9k4a0000qw3h8s7d2f1g`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object): A pod waiting for capacity, or the record of one that waited. It carries what identifies and schedules the request; the full container settings are not echoed back, keep your create request.
      - `id` (required; string)
      - `status` (required; string; enum: `QUEUED`, `DEPLOYED`, `FAILED`, `EXPIRED`, `CANCELLED`): Where a queued pod is in its life. - `QUEUED` — waiting for capacity (from `queue.startsAt` when set) - `DEPLOYED` — capacity came and a pod was created; `podId` names it - `FAILED` — capacity came but the deploy was refused for good; `failureReason` says why - `EXPIRED` — `queue.expiresAt` passed without capacity - `CANCELLED` — cancelled with `DELETE /v2/queued-pods/{id}`
      - `podId` (required; nullable): The pod created once capacity came; null until then. Read it with `GET /v2/pods/{id}`.
      - `failureReason` (required): Set only when `status` is `FAILED`.
        - anyOf:
          - `variant 1` (string; enum: `INSUFFICIENT_BALANCE`, `SPENDING_LIMIT`, `GPU_QUOTA_EXCEEDED`, `GPU_CONCURRENCY_EXCEEDED`, `ORG_RESTRICTED`, `UNKNOWN`): Why a `FAILED` queued pod could not deploy once capacity came. - `INSUFFICIENT_BALANCE` — the account balance was too low - `SPENDING_LIMIT` — the deploy would have passed the spending limit - `GPU_QUOTA_EXCEEDED` — the account's quota for this GPU type was reached - `GPU_CONCURRENCY_EXCEEDED` — the plan's concurrent GPU cap was reached - `ORG_RESTRICTED` — the account joined an organization, which cannot use queued deploys - `UNKNOWN` — anything else; contact support
          - `variant 2` (null)
      - `name` (required; string): The name the pod will carry.
      - `image` (required; nullable): The image the pod will run. Null when it comes from `templateId` at deploy time.
      - `templateId` (required; nullable): The template the scheduler resolves at deploy time. Null for queued pods from this API, which expands `templateId` into `image` when the request is made.
      - `gpu` (required; object)
        - `id` (required; string): GPU type identifier
        - `count` (integer; default: `1`; minimum: `1`; maximum: `1024`): Number of GPUs
      - `cloud` (required; string; enum: `SECURE`, `COMMUNITY`): Cloud tier. - `SECURE` — Runpod-owned datacenter hardware - `COMMUNITY` — community-hosted hardware
      - `dataCenterIds` (required; array): The data centers the deploy is limited to; empty when any will do.
        - `items` (string)
      - `queue` (required; object): The `queue` options as stored, with the defaults applied.
        - `startsAt` (required; format: date-time; nullable): When waiting begins. Null when it began with the request.
        - `expiresAt` (required; string; format: date-time): When waiting ends.
        - `allowedHours` (required): Null when any hour is allowed.
          - anyOf:
            - `variant 1` (object): Hours of the day, in UTC, during which the queued pod may deploy, per weekday. Omit the object to allow any time. A weekday that is omitted is unrestricted; an empty array blocks that whole day. Each entry is an hour from 0 to 23 and allows deploys from that hour to the next.
              - `monday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `tuesday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `wednesday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `thursday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `friday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `saturday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
              - `sunday` (array)
                - `items` (integer; minimum: `0`; maximum: `23`)
            - `variant 2` (null)
        - `notifyEmail` (required; format: email; nullable): Null when no email was asked for.
      - `createdAt` (required; string; format: date-time)
      - `resolvedAt` (required; format: date-time; nullable): When the queued pod deployed, failed or expired. Null while it waits, and after a cancel.
    - Example `queuedPod`: `{"id":"clz1x9k4a0000qw3h8s7d2f1g","status":"QUEUED","podId":null,"failureReason":null,"name":"pytorch-training","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","templateId":null,"gpu":{"id":"NVIDIA GeForce RTX 4090","count":1},"cloud":"SECURE","dataCenterIds":["EU-RO-1"],"queue":{"startsAt":null,"expiresAt":"2026-07-01T12:00:00Z","allowedHours":{"monday":[9,10,11,12,13,14,15,16]},"notifyEmail":null},"createdAt":"2026-06-01T12:00:00Z","resolvedAt":null}`
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
