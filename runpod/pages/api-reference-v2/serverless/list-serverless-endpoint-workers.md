> Pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-workers.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/api-reference-v2/serverless/list-serverless-endpoint-workers.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-workers

# List Serverless Endpoint Workers

List active workers for a Runpod Serverless endpoint with worker status, runtime details, and summary counts grouped by status.

`GET /v2/serverless/{id}/workers`

**List serverless endpoint workers**

Lists the active workers for a serverless endpoint.

**Returns.** A `200` with a `ListEndpointWorkersResponse`: a
`workers` array (one entry per active worker, each carrying its `id`,
`status`, and runtime details) plus a `summary` of worker counts
grouped by status. Only currently active workers are included;
scaled-down workers are not returned.

**How `status` is determined.** Each worker's `status` is derived by
reconciling the worker pod's lifecycle status with the endpoint's
live job-queue view (which workers are actively serving requests).
When the job-queue view is unavailable, the response degrades
gracefully: the shape is unchanged, but each `status` and the summary
counts fall back to pod lifecycle alone.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `workers` (required; array)
        - `items` (object)
          - `id` (required; string)
          - `status` (required; string; enum: `RUNNING`, `IDLE`, `INITIALIZING`, `THROTTLED`, `UNHEALTHY`): Derived worker state, reconciled from the worker pod's lifecycle status and the live job-queue view. - `RUNNING` — actively processing a job - `IDLE` — ready and polling for jobs - `INITIALIZING` — starting up, not yet ready - `THROTTLED` — waiting on compute capacity - `UNHEALTHY` — failing health checks
          - `isStale` (required; boolean): True when the worker is running an older endpoint configuration than the current one (e.g. mid rolling-update). This is the authoritative flag: it is derived from `version` vs the response's `endpointVersion`, except on legacy endpoints (`endpointVersion` 1) where it falls back to a container-image comparison.
          - `version` (nullable): Endpoint configuration version this worker is running. Compare with the response's `endpointVersion`. Null if unknown.
          - `gpuCount` (required; integer; minimum: `0`): GPUs allocated to the worker.
          - `image` (nullable): Container image the worker is running.
          - `uptimeSeconds` (nullable; minimum: `0`): Seconds the worker has been running. Null until the worker is placed and running.
          - `gpuTypeId` (nullable): GPU type the worker is placed on. Null until the worker is placed.
          - `dataCenterId` (nullable): Data center the worker is placed in. Null until the worker is placed.
          - `startedAt` (format: date-time; nullable): When the worker last started. Null if it has not started.
      - `summary` (required; object): Histogram of the returned workers by status. The per-status counts are a roll-up of the `workers` array, so `running + idle + initializing + throttled + unhealthy == total == len(workers)`.
        - `running` (required; integer; minimum: `0`): Workers actively processing a job.
        - `idle` (required; integer; minimum: `0`): Ready workers polling for jobs.
        - `initializing` (required; integer; minimum: `0`): Workers starting up, not yet ready.
        - `throttled` (required; integer; minimum: `0`): Workers waiting on compute capacity.
        - `unhealthy` (required; integer; minimum: `0`): Workers failing health checks.
        - `total` (required; integer; minimum: `0`): All workers currently allocated to the endpoint.
      - `endpointVersion` (nullable): The endpoint's current configuration version. A worker whose `version` differs is running stale config (see `worker.isStale`). Null if unknown.
    - Example `workers`: `{"endpointVersion":4,"summary":{"running":1,"idle":1,"initializing":0,"throttled":0,"unhealthy":0,"total":2},"workers":[{"id":"8g3n5t6r","status":"RUNNING","isStale":false,"version":4,"gpuCount":1,"image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","uptimeSeconds":3600,"gpuTypeId":"NVIDIA GeForce RTX 4090","dataCenterId":"US-KS-2","startedAt":"2026-06-01T12:05:00Z"}]}`
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
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
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
