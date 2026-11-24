> Pinned source for Runpod main: [api-reference-v2/catalog/get-a-hub-repo.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/catalog/get-a-hub-repo.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/get-a-hub-repo

# Get A Hub Repo

Retrieve a Runpod Hub repo with its listed release and the defaults it deploys with.

`GET /v2/catalog/repos/{id}`

**Get a Hub repo**

Returns one repo with its listed release, including the GPUs, disk
and environment variables the release deploys with. Read the README
at `GET /v2/catalog/repos/{id}/readme`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Repo ID, as returned by `GET /v2/catalog/repos`.
  - Example: `cm862p99s000008ilegk86af6`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema: A repo with its license and listed release.
      - allOf:
        - `variant 1` (object): A Hub repo: a GitHub repository Runpod builds into a deployable image. Read its README at `GET /v2/catalog/repos/{id}/readme`.
          - `id` (required; string)
          - `name` (required; string)
          - `description` (required; string): Empty when the repo has none.
          - `products` (required; array)
            - `items` (string; enum: `POD`, `SERVERLESS`): Where a catalog item deploys.
          - `category` (required; nullable)
          - `tags` (required; array)
            - `items` (string)
          - `official` (required; boolean): Whether Runpod publishes it: true for repos owned by the `runpod-workers` GitHub organization.
          - `repository` (required; object): The GitHub repository a Hub repo is built from.
            - `owner` (required; string)
            - `name` (required; string)
            - `url` (required; string; format: uri)
            - `ownerAvatarUrl` (required; format: uri; nullable)
          - `health` (required; object): How reliably a catalog item deploys.
            - `tier` (required; string; enum: `VERIFIED`, `UNVERIFIED`, `UNSTABLE`): `UNVERIFIED` while `reliability` is null. Otherwise `UNSTABLE` below Runpod's cutoff for the object's kind and `VERIFIED` at or above it. Set your own bar with `minReliability`.
            - `reliability` (required; format: double; nullable; minimum: `0`; maximum: `1`): Share of recent deploys that reached a healthy state; 0.9 means 90%. Null until there is enough deploy history to score.
            - `computedAt` (required; format: date-time; nullable): When `reliability` was last computed. Null when never scored.
          - `stats` (required; object)
            - `deploys` (required; integer)
            - `stars` (required; integer): GitHub stars.
            - `views` (required; integer): Hub page views.
          - `latestRelease` (required): Null until a release is listed.
            - anyOf:
              - `variant 1` (object): The release the Hub lists for a repo.
                - `id` (required; string): Hub release ID.
                - `tag` (required; string): Git tag.
                - `releasedAt` (required; string; format: date-time)
                - `image` (required; nullable): The built image. Null while the build is still running.
                - `deployable` (required; boolean): Whether the release has a built image to deploy.
              - `variant 2` (null)
          - `createdAt` (required; string; format: date-time)
          - `updatedAt` (required; string; format: date-time): When the listed release was published.
        - `variant 2` (object)
          - `license` (required; nullable)
          - `latestRelease` (required)
            - anyOf:
              - `variant 1`: The listed release, with its notes and deploy defaults.
                - allOf:
                  - `variant 1` (object): The release the Hub lists for a repo.
                    - `id` (required; string): Hub release ID.
                    - `tag` (required; string): Git tag.
                    - `releasedAt` (required; string; format: date-time)
                    - `image` (required; nullable): The built image. Null while the build is still running.
                    - `deployable` (required; boolean): Whether the release has a built image to deploy.
                  - `variant 2` (object)
                    - `name` (required; string)
                    - `notes` (required; string): The release notes. Empty when there are none.
                    - `deploy` (required; object): How the release deploys by default, from its `hub.json`.
                      - `computeType` (required; string; enum: `GPU`, `CPU`)
                      - `endpointType` (required; string; enum: `QUEUE`, `LOAD_BALANCER`): Request-routing semantics for a modern serverless endpoint. - `QUEUE` — submit asynchronous or synchronous jobs through the managed queue. - `LOAD_BALANCER` — send requests directly to worker-defined HTTP paths. Configure via `env`: `PORT` (server port, default 80), `PORT_HEALTH` (health-check port, default 80), and `HEALTH_CHECK_PATH` (path the load balancer polls for worker health, default `/ping`).
                      - `cpu` (required): The CPU flavor and vCPU count when `computeType` is `CPU`. A release that names no flavor gets `cpu3g`, and one that names no vCPU count gets 4. Null for GPU.
                        - anyOf:
                          - `variant 1` (object)
                            - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
                            - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
                          - `variant 2` (null)
                      - `gpuTypeIds` (required; array): GPU type IDs the release deploys to, as in `GET /v2/catalog/gpus`. Empty when it doesn't pin any.
                        - `items` (string)
                      - `gpuCount` (required; integer)
                      - `containerDiskInGb` (required; nullable): Null when the release doesn't set one.
                      - `gpuCompatibility` (required; object): The GPUs and CUDA versions a catalog item declares. Empty lists mean it declares none.
                        - `recommendedGpuTypeIds` (required; array): GPU type IDs, as in `GET /v2/catalog/gpus`.
                          - `items` (string)
                        - `incompatibleGpuTypeIds` (required; array): GPU type IDs, as in `GET /v2/catalog/gpus`.
                          - `items` (string)
                        - `minVramInGb` (required; nullable): Null when it declares none. Repos never declare one.
                        - `allowedCudaVersions` (required; array)
                          - `items` (string)
                        - `minCudaVersion` (required; nullable): The lowest CUDA version it runs on, applied when `allowedCudaVersions` is empty. Null when it declares none. Templates never declare one.
                      - `volume` (required): The volume the release asks for. Null when it asks for none.
                        - anyOf:
                          - `variant 1` (object): A volume a release asks to have attached at deploy.
                            - `required` (required; boolean): Whether the deploy needs the volume, rather than only offering one.
                            - `types` (required; array): The volume types it accepts. Never empty.
                              - `items` (string; enum: `GLOBAL`, `NETWORK`): A kind of volume a deploy can attach.
                          - `variant 2` (null)
                      - `env` (required; array)
                        - `items` (object): An environment variable the repo reads, with its default.
                          - `key` (required; string)
                          - `default` (required; nullable): The default value as a string. Null when there is none.
                          - `description` (required; nullable)
                          - `required` (required; boolean): Whether the repo needs a value for this variable.
              - `variant 2` (null)
    - Example `repo`: `{"id":"cm862p99s000008ilegk86af6","name":"ComfyUI","description":"ComfyUI as a serverless API.","products":["SERVERLESS"],"category":"image","tags":["comfyui"],"official":true,"repository":{"owner":"runpod-workers","name":"worker-comfyui","url":"https://github.com/runpod-workers/worker-comfyui","ownerAvatarUrl":"https://avatars.githubusercontent.com/u/123456?v=4"},"health":{"tier":"VERIFIED","reliability":0.97,"computedAt":"2026-11-04T06:00:00Z"},"stats":{"deploys":41210,"stars":812,"views":190455},"license":"MIT","latestRelease":{"id":"cm8a1b2c3000108l4d5e6f7g8","tag":"v5.4.1","releasedAt":"2026-10-28T00:00:00Z","image":"runpod/worker-comfyui:5.4.1-base","deployable":true,"name":"v5.4.1","notes":"Adds Flux.2 support.","deploy":{"computeType":"GPU","endpointType":"QUEUE","cpu":null,"gpuTypeIds":["NVIDIA GeForce RTX 4090","NVIDIA L4"],"gpuCount":1,"containerDiskInGb":20,"gpuCompatibility":{"recommendedGpuTypeIds":["NVIDIA GeForce RTX 4090","NVIDIA L4"],"incompatibleGpuTypeIds":[],"minVramInGb":null,"allowedCudaVersions":["12.8","12.9"],"minCudaVersion":null},"volume":null,"env":[{"key":"COMFY_LOG_LEVEL","default":"DEBUG","description":"Log level for ComfyUI.","required":false}]}},"createdAt":"2025-03-01T00:00:00Z","updatedAt":"2026-10-28T00:00:00Z"}`
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

**Required API key scope:** `catalog:read`
