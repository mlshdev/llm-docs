> Pinned source for Runpod main: [api-reference-v2/serverless/create-a-serverless-endpoint.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/api-reference-v2/serverless/create-a-serverless-endpoint.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/create-a-serverless-endpoint

# Create A Serverless Endpoint

Create a Runpod Serverless endpoint with GPU or CPU compute, container or template settings, worker limits, and scaling policies.

`POST /v2/serverless`

**Create a serverless endpoint**

Creates a serverless endpoint. Callers specify exactly one of `gpu` or
`cpu`; neither or both returns 400. Container settings come from the
body, from a serverless template referenced by `templateId` (body
fields override the template's), or both; `image` is required unless
`templateId` is set. See `CreateEndpointRequest` for the full body.

The CUDA constraints live on `gpu` — `gpu.allowedCudaVersions` and
`gpu.minCudaVersion` — so a CPU create cannot express them and the
schema rejects the attempt with a 422. A non-empty set and a floor are
mutually exclusive (400 if both are sent); an explicit empty set states
no constraint and may accompany a floor.

Returns `201` with the created endpoint. The endpoint can accept jobs
immediately, but starts with no active workers unless `workers.min`
is greater than 0. Workers are provisioned on demand and autoscaled
between `workers.min` and `workers.max` according to the `scaling`
policy, so the first request to an idle endpoint may incur cold-start
latency while a worker pulls its image and boots.

## Checking what you can deploy

`gpu.pools` takes serverless GPU **pool** IDs, not the GPU type IDs
used for pods. `gpu.excludedTypes` takes the type IDs — it subtracts
specific cards from the pools you picked. Read both from the catalog
before you create:

- [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types)
  — the `pool` field carries the pool ID for each GPU type (`null`
  means that type is not in a serverless pool). Add
  `include=AVAILABILITY&product=SERVERLESS` for current serverless
  stock.
- [List data centers](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers)
  — locations to constrain with `dataCenterIds`, with
  `include=GPU_AVAILABILITY` for stock per data center.

Unlike pod creation, you do not need to retry across GPUs yourself:
list every pool you are willing to run on and workers are placed on
whichever one has capacity. Listing more pools — and leaving
`dataCenterIds` unset — gives the scheduler more room and reduces the
chance of workers failing to start when a single pool is exhausted.

If your workload needs a specific card, pick the pool that holds it and
exclude the rest of that pool with `gpu.excludedTypes`. Keep at least
one type in the selection — upstream rejects a selection that leaves
none.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - allOf:
      - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
        - allOf:
          - `variant 1` (object): Container configuration universal to every containerized resource. Compose ContainerConfig instead unless the resource cannot support a direct registry credential (clusters — there the registry credential arrives via a pod template, see CreateClusterRequest.templateId).
            - `args` (string): The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged.
            - `cmd` (array): Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
              - `items` (string)
            - `entrypoint` (array): Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
              - `items` (string)
            - `disk` (integer; minimum: `1`): Container disk in GB (ephemeral, wiped on restart)
            - `env` (object): Environment variables as key-value pairs
              - `additional properties` (string)
            - `image` (string): Docker image reference
            - `ports` (array): Exposed ports, formatted as port/protocol
              - `items` (string)
          - `variant 2` (object)
            - `registry` (nullable): Container registry credential ID (for private images)
      - `variant 2`
      - `variant 3` (object)
        - `gpu`: GPU request for an endpoint create. Carries the CUDA constraints, which live here rather than at the body's top level so they are unrepresentable on a CPU endpoint.
          - allOf:
            - `variant 1` (object)
              - `pools` (array; minimum items: `1`): Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule.
                - `items` (string)
              - `excludedTypes` (array; unique items): GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card.
                - `items` (string; pattern: `^\s*[^-\s]`)
              - `count` (integer; default: `1`; minimum: `1`): GPUs per worker
            - `variant 2` (object)
              - `allowedCudaVersions` (array): Acceptable CUDA versions for worker placement, as `major.minor`. Omit to accept any version (or inherit the template's constraint when creating from `templateId`). Matching is exact — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=SERVERLESS` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor.
                - `items` (string; pattern: `^\d+\.\d+$`)
              - `minCudaVersion` (string; pattern: `^\d+\.\d+$`): Lowest acceptable CUDA version for worker placement, as `major.minor`, compared numerically rather than as a decimal — so 12.11 is above 12.2. Use this for an open-ended floor and allowedCudaVersions for an exact set. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor.
        - `name` (required; string; minimum length: `1`)
        - `scaling` (required): Autoscaling signal — a discriminated union on `type`: `QUEUE_DELAY` (queue-based endpoints only) or `REQUEST_COUNT`. The scaler is chosen independently of the endpoint's routing `type` and can be switched on update.
          - oneOf:
            - `variant 1` (object): Scale on queue wait time. Queue-based endpoints only.
              - `type` (required; string; enum: `QUEUE_DELAY`): Scaler discriminator. Always `QUEUE_DELAY` for this variant.
              - `queueDelay` (required; number; format: float; minimum: `0.5`): Adjusts the number of workers based on how long requests wait in the queue.
            - `variant 2` (object): Scale on concurrent in-flight requests per worker. Required for load-balancing endpoints; also selectable for queue-based.
              - `type` (required; string; enum: `REQUEST_COUNT`): Scaler discriminator. Always `REQUEST_COUNT` for this variant.
              - `requestCount` (required; integer; minimum: `1`): Adjusts the number of workers based on active in-flight requests.
        - `type` (required): Request-routing model. Required — it determines the valid scaler and request URLs, so it must be chosen explicitly on every create.
          - allOf:
            - `variant 1` (string; enum: `QUEUE`, `LOAD_BALANCER`): Request-routing semantics for a modern serverless endpoint. - `QUEUE` — submit asynchronous or synchronous jobs through the managed queue. - `LOAD_BALANCER` — send requests directly to worker-defined HTTP paths. Configure via `env`: `PORT` (server port, default 80), `PORT_HEALTH` (health-check port, default 80), and `HEALTH_CHECK_PATH` (path the load balancer polls for worker health, default `/ping`).
        - `cpu` (array; minimum items: `1`; unique items): Eligible CPU configurations for each worker. Memory is derived from the selected flavor's catalog RAM multiplier. Exact duplicate configurations are rejected; the same flavor may be listed at different vCPU counts.
          - `items`
            - allOf:
              - `variant 1` (object)
                - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
                - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
        - `dataCenterIds` (array): Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose.
          - `items` (string)
        - `flashboot` (default: `OFF`)
          - allOf:
            - `variant 1` (string; enum: `OFF`, `FLASHBOOT`, `PRIORITY_FLASHBOOT`): FlashBoot cold-start acceleration mode. - `OFF` — disabled - `FLASHBOOT` — enabled - `PRIORITY_FLASHBOOT` — enabled with priority capacity
        - `networkVolumes` (array)
          - `items` (string)
        - `templateId` (string; minimum length: `1`): ID of a serverless template to base this endpoint on. The template is resolved at create time into the same container settings you could otherwise spread into this body (image, args, disk, ports, env, registry); explicit body fields override the template's, except `env`, which is merged per key with body values winning. The template's allowedCudaVersions seeds `gpu.allowedCudaVersions` when the body omits it — but only for a GPU create, since a CPU endpoint has no gpu block to seed into, and not when the body sets `gpu.minCudaVersion`, since seeding a set beside a floor would manufacture the mutual-exclusion 400 from a valid request. Its pod-specific startSsh/startJupyter flags are ignored. Later template edits do not affect the endpoint. The template may be one of your own or a public catalog template — see `GET /v2/catalog/templates` (unknown or inaccessible ID → 404) — and must be a serverless template (→ 422).
        - `timeout` (integer; default: `300000`)
        - `workers` (object)
          - allOf:
            - `variant 1` (object)
              - `min` (integer; minimum: `0`): Minimum number of workers.
              - `max` (integer; minimum: `0`): Maximum number of workers.
              - `idleTimeout` (integer; minimum: `1`; maximum: `3600`): Seconds before idle workers scale down. Not applicable to queue-based endpoints scaling on `requestCount` — rejected on create/update and omitted from responses for that combination.
          - `min` (integer; default: `0`)
          - `max` (integer; default: `3`)
          - `idleTimeout` (integer; default: `10`)
  - Example `serverlessEndpoint`: `{"name":"image-generator","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","type":"QUEUE","gpu":{"pools":["ADA_24"],"count":1},"workers":{"min":0,"max":5,"idleTimeout":5},"scaling":{"type":"QUEUE_DELAY","queueDelay":4},"dataCenterIds":["US-KS-2"],"timeout":300000}`
  - Example `cpuServerlessEndpoint`: `{"name":"cpu-inference","image":"python:3.11-slim","type":"QUEUE","cpu":[{"id":"cpu5c","vcpuCount":4},{"id":"cpu5g","vcpuCount":8}],"workers":{"min":0,"max":3,"idleTimeout":10},"scaling":{"type":"QUEUE_DELAY","queueDelay":4},"timeout":300000}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
          - allOf:
            - `variant 1` (object): Container configuration universal to every containerized resource. Compose ContainerConfig instead unless the resource cannot support a direct registry credential (clusters — there the registry credential arrives via a pod template, see CreateClusterRequest.templateId).
              - `args` (string): The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged.
              - `cmd` (array): Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
                - `items` (string)
              - `entrypoint` (array): Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
                - `items` (string)
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
                    - `pools` (array; minimum items: `1`): Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule.
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
    - Example `endpoint`: `{"id":"4m7x2k9q","name":"image-generator","type":"QUEUE","requestUrls":{"run":"https://api.runpod.ai/v2/4m7x2k9q/run","runSync":"https://api.runpod.ai/v2/4m7x2k9q/runsync","status":"https://api.runpod.ai/v2/4m7x2k9q/status/{job_id}","stream":"https://api.runpod.ai/v2/4m7x2k9q/stream/{job_id}","cancel":"https://api.runpod.ai/v2/4m7x2k9q/cancel/{job_id}","retry":"https://api.runpod.ai/v2/4m7x2k9q/retry/{job_id}","purgeQueue":"https://api.runpod.ai/v2/4m7x2k9q/purge-queue","health":"https://api.runpod.ai/v2/4m7x2k9q/health"},"image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":20,"ports":["8000/http"],"env":{"MODEL_NAME":"sdxl"},"registry":null,"gpu":{"pools":["ADA_24"],"count":1,"allowedCudaVersions":[],"minCudaVersion":null},"workers":{"min":0,"max":5,"idleTimeout":5},"scaling":{"type":"QUEUE_DELAY","queueDelay":4},"dataCenterIds":["US-KS-2"],"networkVolumes":["2q9m7x4c"],"timeout":300000,"flashboot":"OFF","createdAt":"2026-06-01T12:00:00Z"}`
    - Example `cpuEndpoint`: `{"id":"7c3v1n8p","name":"cpu-inference","type":"QUEUE","requestUrls":{"run":"https://api.runpod.ai/v2/7c3v1n8p/run","runSync":"https://api.runpod.ai/v2/7c3v1n8p/runsync","status":"https://api.runpod.ai/v2/7c3v1n8p/status/{job_id}","stream":"https://api.runpod.ai/v2/7c3v1n8p/stream/{job_id}","cancel":"https://api.runpod.ai/v2/7c3v1n8p/cancel/{job_id}","retry":"https://api.runpod.ai/v2/7c3v1n8p/retry/{job_id}","purgeQueue":"https://api.runpod.ai/v2/7c3v1n8p/purge-queue","health":"https://api.runpod.ai/v2/7c3v1n8p/health"},"image":"python:3.11-slim","args":"","disk":20,"ports":[],"env":{},"registry":null,"cpu":[{"id":"cpu5c","vcpuCount":4,"memory":16},{"id":"cpu5g","vcpuCount":8,"memory":16}],"workers":{"min":0,"max":3,"idleTimeout":10},"scaling":{"type":"QUEUE_DELAY","queueDelay":4},"dataCenterIds":[],"networkVolumes":[],"timeout":300000,"flashboot":"OFF","createdAt":"2026-06-01T12:00:00Z"}`
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
