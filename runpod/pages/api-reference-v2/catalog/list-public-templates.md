> Pinned source for Runpod main: [api-reference-v2/catalog/list-public-templates.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/catalog/list-public-templates.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/list-public-templates

# List Public Templates

Search Runpod public templates by official, verified, or community source and inspect reusable Pod and Serverless configurations.

`GET /v2/catalog/templates`

**List public templates**

Returns the public template catalog. `source` selects which slice:
`official` (the default) is Runpod-curated templates, `verified` is
community templates Runpod has verified, and `community` is everything
else other users have shared publicly. Both pod and serverless
templates appear — use each entry's `serverless` flag to tell them
apart. `registry` is always null for templates you don't own. Your own
templates (public or private) are managed under `/v2/templates`; fetch
any individual template — catalog or owned — via `/v2/templates/{id}`.

A versioned template line appears as its current tags: each is a
deployable template of its own.

Without `search`, templates are ordered most deployed first: by the number
of unique users who deployed them.

**Authentication:** `bearerAuth`

**Parameters**

- `source` (query; string; enum: `official`, `verified`, `community`; default: `official`): Which slice of the catalog to return: `official` for Runpod-curated templates (default), `verified` for Runpod-verified community templates, or `community` for all other publicly shared templates.
  - Example: `official`
- `search` (query; string; minimum length: `1`; maximum length: `200`): Search text, matched case-insensitively. Every word must match. A skill matches on its name, description and tags; a repo also on its GitHub owner and name; a template on its name and image, and a versioned template's tag also on its line's name and description. Enables `orderBy=RELEVANCE`, which becomes the default order.
  - Example: `comfyui`
- `type` (query; string; enum: `SINGLE`, `VERSIONED`): Only return standalone (`SINGLE`) or versioned (`VERSIONED`) templates. Omit for both.
  - Example: `VERSIONED`
- `product` (query; array): Only return items that deploy to one of these products. Comma-separated.
  - Example: `["SERVERLESS"]`
- `minReliability` (query; number; format: double; minimum: `0`; maximum: `1`): Only return items whose `health.reliability` is at least this value. Unscored items are excluded when this is set.
  - Example: `0.9`
- `category` (query; string; enum: `CPU`, `NVIDIA`, `AMD`): Only return templates in this category.
  - Example: `NVIDIA`
- `orderBy` (query; string; enum: `RELEVANCE`, `POPULAR`, `UPDATED`, `HEALTH`, `NAME`): Defaults to `RELEVANCE` when `search` is set and `POPULAR` otherwise. `RELEVANCE` without `search` is rejected with 400.
  - Example: `POPULAR`
- `orderDirection` (query; string; enum: `ASC`, `DESC`): Sort direction. Defaults to `ASC` for `orderBy=NAME` and `DESC` otherwise.
  - Example: `DESC`
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `1000`): Page size, 1–1000. Defaults to 1000 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `templates` (required; array)
        - `items`: A public template. Every `id` is deployable and resolves at `GET /v2/templates/{id}`.
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
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `templates`: `{"templates":[{"id":"30zmvf89kd","name":"PyTorch 2.8","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":50,"mounts":{},"ports":["8888/http","22/tcp"],"env":{},"registry":null,"serverless":false,"public":true,"category":"NVIDIA","startSsh":true,"startJupyter":true,"allowedCudaVersions":[],"type":"SINGLE","versionedTemplateId":null,"currentVersion":null,"official":true,"verified":false,"products":["POD"],"health":{"tier":"VERIFIED","reliability":0.99,"computedAt":"2026-11-04T06:00:00Z"},"gpuCompatibility":{"recommendedGpuTypeIds":[],"incompatibleGpuTypeIds":[],"minVramInGb":null,"allowedCudaVersions":[],"minCudaVersion":null},"stats":{"deployers":1840,"deployersLast30Days":211},"createdAt":"2025-06-02T00:00:00Z","updatedAt":"2025-07-10T00:00:00Z"}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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

**Required API key scope:** `catalog:read`
