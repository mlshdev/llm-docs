> Pinned source for Runpod main: [api-reference-v2/pods/list-queued-pods.mdx](https://github.com/runpod/docs/blob/badc3b0885d17c76062faf033073f6d062af3aee/api-reference-v2/pods/list-queued-pods.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/pods/list-queued-pods

# List Queued Pods

List the Runpod Pods queued for deploy-when-available, with each one's status, the pod it created, and why any failed.

`GET /v2/queued-pods`

**List queued pods**

Returns the caller's queued pods, cursor-paginated newest-first; an
omitted `limit` defaults to 1000. Every queued pod is listed whatever
its `status`, so the outcome of a queued create can be read after the
fact. Follow `pagination.nextCursor` until `hasNextPage` is false.

**Authentication:** `bearerAuth`

**Parameters**

- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `1000`): Page size, 1–1000. Defaults to 1000 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `queuedPods` (required; array)
            - `items` (object): A pod waiting for capacity, or the record of one that waited. It carries what identifies and schedules the request; the full container settings are not echoed back, keep your create request.
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
        - `variant 2` (object): Mixin for cursor-paginated list responses. Compose it with `allOf` next to the resource's bare list schema so that a list shape shared with a non-paginated endpoint (e.g. a cluster's member pods) does not inherit a pagination block it cannot honour.
          - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
            - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
            - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `queuedPods`: `{"queuedPods":[{"id":"clz1x9k4a0000qw3h8s7d2f1g","status":"DEPLOYED","podId":"7h9k2m4n6p","failureReason":null,"name":"pytorch-training","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","templateId":null,"gpu":{"id":"NVIDIA GeForce RTX 4090","count":1},"cloud":"SECURE","dataCenterIds":["EU-RO-1"],"queue":{"startsAt":null,"expiresAt":"2026-07-01T12:00:00Z","allowedHours":null,"notifyEmail":null},"createdAt":"2026-06-01T12:00:00Z","resolvedAt":"2026-06-01T13:05:00Z"}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
- `413`: The response would exceed the response size cap. Request fewer items and retry; on paginated operations, lower `limit`.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `responseTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Response too large for one request. Request fewer items and retry."}`
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
