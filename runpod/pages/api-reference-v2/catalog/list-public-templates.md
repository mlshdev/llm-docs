> Pinned source for Runpod main: [api-reference-v2/catalog/list-public-templates.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/catalog/list-public-templates.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/list-public-templates

# List Public Templates

List Runpod public templates by official, verified, or community source and inspect reusable Pod and Serverless configurations.

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

At most 100 templates are returned. Pagination is not yet supported.

**Authentication:** `bearerAuth`

**Parameters**

- `source` (query; string; enum: `official`, `verified`, `community`; default: `official`): Which slice of the catalog to return: `official` for Runpod-curated templates (default), `verified` for Runpod-verified community templates, or `community` for all other publicly shared templates.
  - Example: `official`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `templates` (required; array)
        - `items`
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
              - `mounts` (required; object): Storage mounts attached to a template. Templates support only a single persistent mount today; any `network` property is rejected with 422 by the schema validator. PATCH semantics: omitting `mounts` or sending `{}` leaves the existing mount unchanged.
                - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
                  - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Upstream enforces a 10 GB floor.
                  - `path` (required; string): Mount path inside the container. May be changed via PATCH.
              - `serverless` (required; boolean): Whether this template is for serverless workers (true) or pods (false)
              - `public` (required; boolean): Whether this template is visible to other Runpod users
              - `category` (required; string; enum: `CPU`, `NVIDIA`, `AMD`): Controls how the template is grouped and filtered in the Runpod console. It does not affect hardware selection, scheduling, or billing. - `CPU` — CPU-only workloads - `NVIDIA` — NVIDIA GPU workloads - `AMD` — AMD GPU workloads
              - `startSsh` (required; boolean): Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection).
              - `startJupyter` (required; boolean): Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection).
              - `allowedCudaVersions` (required; array): Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it.
                - `items` (string)
    - Example `templates`: `{"templates":[{"id":"30zmvf89kd","name":"PyTorch 2.8","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":50,"mounts":{},"ports":["8888/http","22/tcp"],"env":{},"registry":null,"serverless":false,"public":true,"category":"NVIDIA","startSsh":true,"startJupyter":true,"allowedCudaVersions":[]}]}`
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
