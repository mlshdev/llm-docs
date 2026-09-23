> Pinned source for Runpod main: [api-reference-v2/templates/update-a-template.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/templates/update-a-template.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/templates/update-a-template

# Update A Template

Update selected fields on a Runpod template while preserving omitted settings, with ownership rules and behavior for existing resources.

`PATCH /v2/templates/{id}`

**Update a template**

Partially updates a template. This is a PATCH: only the fields
present in the body are changed; omitted fields are left untouched.
See `UpdateTemplateRequest` for the full body.

Mutable fields: `name`, `image`, `args`, `disk`, `ports`, `env`,
`registry`, `mounts`, `serverless`, `public`, and `category`.

Only the template's owner can update it (authenticated via the
request's API key); public catalog templates are readable via GET
but return `404` here. Returns `200` with the full updated template. Pods and
endpoints already created from this template are not changed
retroactively — the template is a snapshot applied at creation time.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string)
  - Example: `tpl_abc`

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
      - `variant 2` (object)
        - `allowedCudaVersions` (array): Acceptable CUDA versions for pods created from this template. An explicit `[]` clears the constraint; omitting the field leaves it unchanged.
          - `items` (string; pattern: `^\d+\.\d+$`)
        - `category` (string; enum: `CPU`, `NVIDIA`, `AMD`): Controls how the template is grouped and filtered in the Runpod console. It does not affect hardware selection, scheduling, or billing. - `CPU` — CPU-only workloads - `NVIDIA` — NVIDIA GPU workloads - `AMD` — AMD GPU workloads
        - `mounts` (object): Storage mounts attached to a template. Templates support only a single persistent mount today; any `network` property is rejected with 422 by the schema validator. PATCH semantics: omitting `mounts` or sending `{}` leaves the existing mount unchanged.
          - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
            - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Upstream enforces a 10 GB floor.
            - `path` (required; string): Mount path inside the container. May be changed via PATCH.
        - `name` (string; minimum length: `1`)
        - `public` (boolean)
        - `serverless` (boolean)
        - `startJupyter` (boolean): Start JupyterLab at container startup (`JUPYTER_PASSWORD` env injection). See the create-time field for details.
        - `startSsh` (boolean): Provision SSH access at container startup (`PUBLIC_KEY` env injection). See the create-time field for details.
  - Example `renameTemplate`: `{"name":"Renamed PyTorch Template"}`

**Responses**

- `200`: OK
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
    - Example `template`: `{"id":"9x4m2p7v","name":"Renamed PyTorch Template","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":50,"mounts":{"persistent":{"size":20,"path":"/workspace"}},"ports":["8888/http"],"env":{"JUPYTER_ENABLE_LAB":"yes"},"registry":null,"serverless":false,"public":false,"category":"NVIDIA","startSsh":true,"startJupyter":false,"allowedCudaVersions":[]}`
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
