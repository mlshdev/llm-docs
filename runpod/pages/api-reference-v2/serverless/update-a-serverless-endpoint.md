> Pinned source for Runpod main: [api-reference-v2/serverless/update-a-serverless-endpoint.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/api-reference-v2/serverless/update-a-serverless-endpoint.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/update-a-serverless-endpoint

# Update A Serverless Endpoint

Update selected settings on a Runpod Serverless endpoint, including compute, workers, scaling, storage, and container configuration.

`PATCH /v2/serverless/{id}`

**Update a serverless endpoint**

Partially updates a serverless endpoint. This is a PATCH: only the
fields present in the body are changed; omitted fields are left
untouched. See `UpdateEndpointRequest` for the full body.

Mutable fields: `name`, `gpu`, `cpu`, `workers` (`min`/`max`),
`scaling` (`type`/`value`/`idleTimeout`), `dataCenterIds`,
`networkVolumes`, `timeout`, `flashboot`, and the container settings
(`image`, `args`, `disk`, `ports`, `env`, `registry`).

Omitted compute preserves the current selection. `cpu` completely
replaces a CPU endpoint's selection; compute family is immutable.
`gpu` on CPU, `cpu` on GPU, or both fields returns 400.

Returns `200` with the full updated endpoint. Effect timing differs
by field: scaling and worker-bound settings (`workers`, `scaling`,
`timeout`) are applied to the autoscaler promptly, while
container-affecting changes (e.g. `image`, `env`) create a new
endpoint release that rolls out as workers cycle — in-flight workers
keep the previous version until they are replaced. Track rollout via
`listEndpointReleases`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - allOf:
      - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
        - allOf:
          - `variant 1` (object): Container configuration universal to every containerized resource. Compose ContainerConfig instead unless the resource cannot support private registries (clusters, until the upstream input accepts a registry credential).
            - `args` (string): Arguments passed to the container entrypoint
            - `disk` (integer; minimum: `1`): Container disk in GB (ephemeral, wiped on restart)
            - `env` (object): Environment variables as key-value pairs
              - `additional properties` (string)
            - `image` (string): Docker image reference
            - `ports` (array): Exposed ports, formatted as port/protocol
              - `items` (string)
          - `variant 2` (object)
            - `registry` (nullable): Container registry credential ID (for private images)
      - `variant 2` (object): Only provided fields are changed.
        - `cpu` (array; minimum items: `1`; unique items): Complete replacement CPU selection. Valid only for an existing CPU endpoint; endpoint compute family cannot be changed.
          - `items`
            - allOf:
              - `variant 1` (object)
                - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
                - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
        - `dataCenterIds` (array): Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose.
          - `items` (string)
        - `flashboot` (string; enum: `OFF`, `FLASHBOOT`, `PRIORITY_FLASHBOOT`): FlashBoot cold-start acceleration mode. - `OFF` — disabled - `FLASHBOOT` — enabled - `PRIORITY_FLASHBOOT` — enabled with priority capacity
        - `gpu`: Partial GPU update — every field is optional and an omitted one is left unchanged. Unlike create, `pools` is optional, so changing only a CUDA constraint does not require resending the pool list. `excludedTypes` requires `pools`, because the two are one selection and only a supplied `pools` replaces it — an exclusion on its own would otherwise be silently dropped.
          - allOf:
            - `variant 1` (object)
              - `pools` (array; minimum items: `1`): Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`.
                - `items` (string)
              - `excludedTypes` (array; unique items): GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card.
                - `items` (string; pattern: `^\s*[^-\s]`)
              - `count` (integer; default: `1`; minimum: `1`): GPUs per worker
            - `variant 2` (object)
              - `allowedCudaVersions` (array): Acceptable CUDA versions for worker placement, as `major.minor`. An explicit `[]` clears the constraint; omitting the field leaves it unchanged. Takes effect as workers are replaced. A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. Setting one does not clear the other — clear it explicitly in the same patch if the endpoint already carries it.
                - `items` (string; pattern: `^\d+\.\d+$`)
              - `minCudaVersion` (string; pattern: `^$|^\d+\.\d+$`): Lowest acceptable CUDA version for worker placement, as `major.minor`. An explicit `""` clears the floor; omitting the field leaves it unchanged. Takes effect as workers are replaced. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor.
        - `name` (string; minimum length: `1`)
        - `networkVolumes` (array)
          - `items` (string)
        - `scaling`: Autoscaling signal — a discriminated union on `type`: `QUEUE_DELAY` (queue-based endpoints only) or `REQUEST_COUNT`. The scaler is chosen independently of the endpoint's routing `type` and can be switched on update.
          - oneOf:
            - `variant 1` (object): Scale on queue wait time. Queue-based endpoints only.
              - `type` (required; string; enum: `QUEUE_DELAY`): Scaler discriminator. Always `QUEUE_DELAY` for this variant.
              - `queueDelay` (required; number; format: float; minimum: `0.5`): Adjusts the number of workers based on how long requests wait in the queue.
            - `variant 2` (object): Scale on concurrent in-flight requests per worker. Required for load-balancing endpoints; also selectable for queue-based.
              - `type` (required; string; enum: `REQUEST_COUNT`): Scaler discriminator. Always `REQUEST_COUNT` for this variant.
              - `requestCount` (required; integer; minimum: `1`): Adjusts the number of workers based on active in-flight requests.
        - `templateId` (string): ID of a serverless template whose container settings are applied as if they were provided in this PATCH body (image, args, disk, ports, env, registry). Explicit body fields override the template's; `env` merges template and body per key (body wins) and, per PATCH semantics, replaces the endpoint's env. One-time application — no link to the template is retained. Must be one of your templates or a public template (unknown or inaccessible ID → 404); must be a serverless template (→ 422).
        - `timeout` (integer)
        - `workers` (object)
          - `min` (integer; minimum: `0`): Minimum number of workers.
          - `max` (integer; minimum: `0`): Maximum number of workers.
          - `idleTimeout` (integer; minimum: `1`; maximum: `3600`): Seconds before idle workers scale down. Not applicable to queue-based endpoints scaling on `requestCount` — rejected on create/update and omitted from responses for that combination.
  - Example `scaleEndpoint`: `{"workers":{"min":1,"max":10,"idleTimeout":10},"scaling":{"type":"QUEUE_DELAY","queueDelay":8}}`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
          - allOf:
            - `variant 1` (object): Container configuration universal to every containerized resource. Compose ContainerConfig instead unless the resource cannot support private registries (clusters, until the upstream input accepts a registry credential).
              - `args` (string): Arguments passed to the container entrypoint
              - `disk` (integer; minimum: `1`): Container disk in GB (ephemeral, wiped on restart)
              - `env` (object): Environment variables as key-value pairs
                - `additional properties` (string)
              - `image` (string): Docker image reference
              - `ports` (array): Exposed ports, formatted as port/protocol
                - `items` (string)
            - `variant 2` (object)
              - `registry` (nullable): Container registry credential ID (for private images)
        - `variant 2` (object)
          - `id` (required; string)
          - `name` (required; string)
          - `type` (string; enum: `QUEUE`, `LOAD_BALANCER`): Request-routing semantics for a modern serverless endpoint. - `QUEUE` — submit asynchronous or synchronous jobs through the managed queue. - `LOAD_BALANCER` — send requests directly to worker-defined HTTP paths. Configure via `env`: `PORT` (server port, default 80), `PORT_HEALTH` (health-check port, default 80), and `HEALTH_CHECK_PATH` (path the load balancer polls for worker health, default `/ping`).
          - `requestUrls`: Request URLs appropriate to the endpoint's top-level `type`. Queue-based endpoints provide job submission and management URLs; load-balancing endpoints provide `base` and `health` because their remaining paths are worker-defined. Request and response bodies for the queue-based URLs are documented in the [serverless operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference). Load-balancing endpoints are documented in [Load balancing endpoints](https://docs.runpod.io/serverless/load-balancing/overview).
            - oneOf:
              - `variant 1` (object)
                - `run` (required; string; format: uri): URL for asynchronously submitting a queued job. See the [/run operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/run) for request and response bodies.
                - `runSync` (required; string; format: uri): URL for synchronously submitting a queued job. Accepts an optional `?wait=x` query parameter to control how long the request waits for job completion, defaulting to 90 seconds. See the [/runsync operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/runsync) for request and response bodies.
                - `status` (required; string; format: uri): Check the current state, execution statistics, and results of a previously submitted job. See the [/status operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/status) for request and response bodies.
                - `stream` (required; string; format: uri): Receive incremental results as they become available from a job that generates output progressively. See the [/stream operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/stream) for request and response bodies.
                - `cancel` (required; string; format: uri): Stop an in-progress job or remove a queued job before it starts. See the [/cancel operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/cancel) for request and response bodies.
                - `retry` (required; string; format: uri): Requeue a failed or timed-out job without submitting a new request. See the [/retry operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/retry) for request and response bodies.
                - `purgeQueue` (required; string; format: uri): Remove all pending jobs from the queue. Does not affect in-progress jobs. See the [/purge-queue operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/purge-queue) for request and response bodies.
                - `health` (required; string; format: uri): Overview of an endpoint's operational status. See the [/health operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/health) for request and response bodies.
              - `variant 2` (object)
                - `base` (required; string; format: uri): Base URL for worker-defined HTTP and WebSocket paths. See [Load balancing endpoints](https://docs.runpod.io/serverless/load-balancing/overview).
                - `health` (required; string; format: uri): Health check endpoint the load balancer will periodically ping to decide if the worker is healthy enough to receive traffic. Configurable by setting the `HEALTH_CHECK_PATH` environment variable. Defaults to `/ping` if the variable is not set. See [Health checks](https://docs.runpod.io/serverless/load-balancing/overview#health-checks) for the response codes it interprets.
          - `gpu`
            - anyOf:
              - `variant 1`
                - allOf:
                  - `variant 1` (object)
                    - `pools` (array; minimum items: `1`): Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`.
                      - `items` (string)
                    - `excludedTypes` (array; unique items): GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card.
                      - `items` (string; pattern: `^\s*[^-\s]`)
                    - `count` (integer; default: `1`; minimum: `1`): GPUs per worker
                  - `variant 2` (object)
                    - `allowedCudaVersions` (required; array): Acceptable CUDA versions for worker placement, as `major.minor`. Empty means any version.
                      - `items` (string)
                    - `minCudaVersion` (required; nullable): Lowest acceptable CUDA version for worker placement, as `major.minor`. Null means no floor.
              - `variant 2` (null)
          - `cpu` (array; minimum items: `1`): Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier.
            - `items`
              - allOf:
                - `variant 1` (object)
                  - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
                  - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
                - `variant 2` (object)
                  - `memory` (required; integer; minimum: `1`): Memory allocated to the pod in GB.
          - `workers` (required)
            - allOf:
              - `variant 1` (object)
                - `min` (integer; minimum: `0`): Minimum number of workers.
                - `max` (integer; minimum: `0`): Maximum number of workers.
                - `idleTimeout` (integer; minimum: `1`; maximum: `3600`): Seconds before idle workers scale down. Not applicable to queue-based endpoints scaling on `requestCount` — rejected on create/update and omitted from responses for that combination.
          - `scaling` (required): Autoscaling signal — a discriminated union on `type`: `QUEUE_DELAY` (queue-based endpoints only) or `REQUEST_COUNT`. The scaler is chosen independently of the endpoint's routing `type` and can be switched on update.
            - oneOf:
              - `variant 1` (object): Scale on queue wait time. Queue-based endpoints only.
                - `type` (required; string; enum: `QUEUE_DELAY`): Scaler discriminator. Always `QUEUE_DELAY` for this variant.
                - `queueDelay` (required; number; format: float; minimum: `0.5`): Adjusts the number of workers based on how long requests wait in the queue.
              - `variant 2` (object): Scale on concurrent in-flight requests per worker. Required for load-balancing endpoints; also selectable for queue-based.
                - `type` (required; string; enum: `REQUEST_COUNT`): Scaler discriminator. Always `REQUEST_COUNT` for this variant.
                - `requestCount` (required; integer; minimum: `1`): Adjusts the number of workers based on active in-flight requests.
          - `dataCenterIds` (required; array)
            - `items` (string)
          - `networkVolumes` (required; array)
            - `items` (string)
          - `timeout` (required; integer): Per-request execution timeout in milliseconds
          - `flashboot` (required; string; enum: `OFF`, `FLASHBOOT`, `PRIORITY_FLASHBOOT`): FlashBoot cold-start acceleration mode. - `OFF` — disabled - `FLASHBOOT` — enabled - `PRIORITY_FLASHBOOT` — enabled with priority capacity
          - `createdAt` (required; string; format: date-time)
    - Example `endpoint`: `{"id":"4m7x2k9q","name":"image-generator","type":"QUEUE","requestUrls":{"run":"https://api.runpod.ai/v2/4m7x2k9q/run","runSync":"https://api.runpod.ai/v2/4m7x2k9q/runsync","status":"https://api.runpod.ai/v2/4m7x2k9q/status/{job_id}","stream":"https://api.runpod.ai/v2/4m7x2k9q/stream/{job_id}","cancel":"https://api.runpod.ai/v2/4m7x2k9q/cancel/{job_id}","retry":"https://api.runpod.ai/v2/4m7x2k9q/retry/{job_id}","purgeQueue":"https://api.runpod.ai/v2/4m7x2k9q/purge-queue","health":"https://api.runpod.ai/v2/4m7x2k9q/health"},"image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":20,"ports":["8000/http"],"env":{"MODEL_NAME":"sdxl"},"registry":null,"gpu":{"pools":["ADA_24"],"count":1,"allowedCudaVersions":[],"minCudaVersion":null},"workers":{"min":1,"max":10,"idleTimeout":10},"scaling":{"type":"QUEUE_DELAY","queueDelay":8},"dataCenterIds":["US-KS-2"],"networkVolumes":["2q9m7x4c"],"timeout":300000,"flashboot":"OFF","createdAt":"2026-06-01T12:00:00Z"}`
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
