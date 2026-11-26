> Pinned source for Runpod main: [api-reference-v2/catalog/get-a-public-template.mdx](https://github.com/runpod/docs/blob/c845f73c104cb4b69f4caa11f27180533ad8546f/api-reference-v2/catalog/get-a-public-template.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/get-a-public-template

# Get A Public Template

Retrieve a Runpod public template with its health, deploy stats and, for a versioned line, every version and tag.

`GET /v2/catalog/templates/{id}`

**Get a public template**

Returns one public template. This covers every public template,
including ones the list leaves out: your own, and ones below the
list's quality bar.

For a versioned line, `versions` lists every version with its tags.
The top-level fields are the requested tag's when you ask by tag ID,
and the first current tag's when you ask by line ID. A line ID
resolves only while the line has a current tag; its published tags
resolve regardless, with `currentVersion` null when nothing is
current.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): A template ID from `GET /v2/catalog/templates`, a versioned line's ID, or any of its tags' IDs.
  - Example: `opvzatg7kb`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1`: A public template. Every `id` is deployable and resolves at `GET /v2/templates/{id}`.
          - allOf:
            - `variant 1`
              - allOf:
                - `variant 1`: Reusable container configuration shared across templates, pods, serverless endpoints, and clusters. Adding a field here automatically propagates to all of them.
                  - allOf:
                    - `variant 1` (object): Container configuration universal to every containerized resource. ContainerConfig composes it and adds `registry`; resources compose ContainerConfig.
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
                      - `registry` (nullable): Container registry credential ID for a private image: one of your credentials from `/v2/registries`. Leave it unset for a private Amazon ECR image. Runpod pulls those with an ECR delegation (`/v2/registries/delegations`) matched to the image's account, region and repository at pull time, so there is no delegation ID to pass here (a delegation ID is not a credential ID). A credential set here is used instead of any delegation.
                - `variant 2` (object)
                  - `id` (required; string)
                  - `name` (required; string)
                  - `mounts` (required; object): Storage mounts attached to a template. Templates support only a single persistent mount today; any `network` property is rejected with 422 by the schema validator. PATCH semantics: omitting `mounts` or sending `{}` leaves the existing mount unchanged.
                    - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
                      - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Minimum 10 GB.
                      - `path` (required; string): Mount path inside the container. May be changed via PATCH.
                  - `serverless` (required; boolean): Whether this template is for serverless workers (true) or pods (false)
                  - `public` (required; boolean): Whether this template is visible to other Runpod users
                  - `category` (required; string; enum: `CPU`, `NVIDIA`, `AMD`): Controls how the template is grouped and filtered in the Runpod console. It does not affect hardware selection, scheduling, or billing. - `CPU` — CPU-only workloads - `NVIDIA` — NVIDIA GPU workloads - `AMD` — AMD GPU workloads
                  - `startSsh` (required; boolean): Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection).
                  - `startJupyter` (required; boolean): Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection).
                  - `allowedCudaVersions` (required; array): Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it.
                    - `items` (string)
            - `variant 2` (object): The Hub fields of a catalog template. A `VERSIONED` item is one tag of a versioned line: `id`, `name`, `image` and the container fields are the tag's, as `GET /v2/templates/{id}` returns them, and `versionedTemplateId` names the line.
              - `type` (required; string; enum: `SINGLE`, `VERSIONED`): `SINGLE` is a standalone template. `VERSIONED` is a tag of a versioned template line; the list shows each line's current tags.
              - `versionedTemplateId` (required; nullable): The versioned line this tag belongs to. Null for `SINGLE`.
              - `currentVersion` (required; nullable): The line's current version. Null for `SINGLE`, and for a tag whose line has no current version.
              - `official` (required; boolean): Whether Runpod publishes the template.
              - `verified` (required; boolean): Whether Runpod has verified this community template.
              - `products` (required; array)
                - `items` (string; enum: `POD`, `SERVERLESS`): Where a catalog item deploys.
              - `health` (required; object): How reliably a catalog item deploys.
                - `tier` (required; string; enum: `VERIFIED`, `UNVERIFIED`, `UNSTABLE`): `UNVERIFIED` while `reliability` is null. Otherwise `UNSTABLE` below Runpod's cutoff for the object's kind and `VERIFIED` at or above it. Set your own bar with `minReliability`.
                - `reliability` (required; format: double; nullable; minimum: `0`; maximum: `1`): Share of recent deploys that reached a healthy state; 0.9 means 90%. Null until there is enough deploy history to score.
                - `computedAt` (required; format: date-time; nullable): When `reliability` was last computed. Null when never scored.
              - `gpuCompatibility` (required; object): The GPUs and CUDA versions a catalog item declares. Empty lists mean it declares none.
                - `recommendedGpuTypeIds` (required; array): GPU type IDs, as in `GET /v2/catalog/gpus`.
                  - `items` (string)
                - `incompatibleGpuTypeIds` (required; array): GPU type IDs, as in `GET /v2/catalog/gpus`.
                  - `items` (string)
                - `minVramInGb` (required; nullable): Null when it declares none. Repos never declare one.
                - `allowedCudaVersions` (required; array)
                  - `items` (string)
                - `minCudaVersion` (required; nullable): The lowest CUDA version it runs on, applied when `allowedCudaVersions` is empty. Null when it declares none. Templates never declare one.
              - `stats` (required; object): Unique users who deployed the template, refreshed periodically. For a `VERSIONED` item, the sum over every tag in its line.
                - `deployers` (required; integer): All time.
                - `deployersLast30Days` (required; integer)
              - `createdAt` (required; string; format: date-time)
              - `updatedAt` (required; string; format: date-time): When the template's content was last edited.
        - `variant 2` (object)
          - `versions` (required; array): A versioned line's versions, newest first, deprecated ones included. Empty for `SINGLE`.
            - `items` (object)
              - `id` (required; string)
              - `version` (required; string)
              - `name` (required; string)
              - `changelog` (required; string): Empty when there is none.
              - `channel` (required): Null once a newer version takes the channel.
                - oneOf:
                  - `variant 1` (string; enum: `CURRENT`, `BETA`, `ALPHA`): The release channel a version holds.
                  - `variant 2` (null)
              - `deprecatedAt` (required; format: date-time; nullable)
              - `createdAt` (required; string; format: date-time)
              - `tags` (required; array)
                - `items` (object): One deployable image of a version.
                  - `templateId` (required; string): Deploy with this; it resolves at `GET /v2/templates/{id}`.
                  - `name` (required; string)
                  - `image` (required; string)
                  - `channel` (required)
                    - oneOf:
                      - `variant 1` (string; enum: `CURRENT`, `BETA`, `ALPHA`, `DEPRECATED`): The channel a tag holds. `DEPRECATED` once superseded.
                      - `variant 2` (null)
    - Example `versioned`: `{"id":"opvzatg7kb","name":"ROCm","image":"runpod/rocm:1.6.0-rocm644-ubuntu2404-py312-pytorch271","args":"","disk":50,"mounts":{},"ports":["8888/http","22/tcp"],"env":{},"registry":null,"serverless":false,"public":true,"category":"AMD","startSsh":true,"startJupyter":true,"allowedCudaVersions":[],"type":"VERSIONED","versionedTemplateId":"cmv9r2rer000vbcnlha8hwf9c","currentVersion":"2.7.1","official":true,"verified":false,"products":["POD"],"health":{"tier":"VERIFIED","reliability":0.99,"computedAt":"2026-11-04T06:00:00Z"},"gpuCompatibility":{"recommendedGpuTypeIds":[],"incompatibleGpuTypeIds":[],"minVramInGb":null,"allowedCudaVersions":[],"minCudaVersion":null},"stats":{"deployers":1840,"deployersLast30Days":211},"createdAt":"2026-10-15T16:25:38Z","updatedAt":"2026-10-30T18:19:02Z","versions":[{"id":"cmv9r2to100diufgzw2zvmr30","version":"2.7.1","name":"ROCm","changelog":"Template 1.6.0: ROCm 6.4.4 and PyTorch 2.7.1.","channel":"CURRENT","deprecatedAt":null,"createdAt":"2026-10-15T16:25:39Z","tags":[{"templateId":"opvzatg7kb","name":"ROCm 6.4.4 · Ubuntu 24.04 · 1.6.0-2.7.1","image":"runpod/rocm:1.6.0-rocm644-ubuntu2404-py312-pytorch271","channel":"CURRENT"}]}]}`
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
