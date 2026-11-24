> Pinned source for Runpod main: [api-reference-v2/catalog/get-a-skill.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/catalog/get-a-skill.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/get-a-skill

# Get A Skill

Retrieve a Runpod skill with its variants, the default marked, and the skills it relies on.

`GET /v2/catalog/skills/{id}`

**Get a skill**

Returns one skill with its variants. Read the README at
`GET /v2/catalog/skills/{id}/readme` and a variant at
`GET /v2/catalog/skills/{id}/variants/{variantId}`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Skill ID, as returned by `GET /v2/catalog/skills`.
  - Example: `02-comfyui-pod`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema: A skill with its variants.
      - allOf:
        - `variant 1` (object): A skill: a step-by-step guide, published by Runpod, that an agent follows to set up a workload. Read its README at `GET /v2/catalog/skills/{id}/readme`.
          - `id` (required; string): Stable skill identifier.
          - `name` (required; string)
          - `description` (required; string)
          - `tags` (required; array): Lowercase kebab-case labels.
            - `items` (string)
          - `mcpSupport` (required): Null when the skill doesn't say.
            - anyOf:
              - `variant 1` (string; enum: `FULL`, `PARTIAL`, `NONE`): Whether an agent with only the Runpod MCP server can finish the skill: `FULL`, `PARTIAL`, or `NONE`.
              - `variant 2` (null)
          - `official` (required; boolean): Whether Runpod publishes it. Always true for skills.
          - `sourceUrl` (required; string; format: uri): Raw GitHub URL of the skill's README.
          - `createdAt` (required; string; format: date-time)
          - `updatedAt` (required; string; format: date-time)
        - `variant 2` (object)
          - `variants` (required; array)
            - `items` (object): One way to follow a skill, such as using a prebuilt image or building your own. Read it at `GET /v2/catalog/skills/{id}/variants/{variantId}`.
              - `id` (required; string)
              - `name` (required; string)
              - `description` (required; nullable)
              - `default` (required; boolean): Whether this is the skill's default variant. At most one variant per skill is the default.
              - `sourceUrl` (required; string; format: uri): Raw GitHub URL of the variant.
          - `supplementalSkills` (required; array)
            - `items` (object): A skill or reference document the skill relies on.
              - `name` (required; string)
              - `url` (required; string; format: uri): Raw GitHub URL of the skill or reference document.
    - Example `skill`: `{"id":"02-comfyui-pod","name":"ComfyUI server on a pod","description":"Provisions a GPU pod, gets ComfyUI running with a checkpoint and the default text-to-image workflow, and returns a proxy URL for the web UI.","tags":["comfyui","image-generation","pod"],"mcpSupport":"PARTIAL","official":true,"sourceUrl":"https://raw.githubusercontent.com/runpod/runpod-plugins-official/main/plugins/runpod/skills/runpod/golden-paths/02-comfyui-pod/README.md","createdAt":"2026-07-14T21:20:11Z","updatedAt":"2026-10-13T14:51:26Z","variants":[{"id":"variant-a-from-scratch","name":"From scratch","description":"Install ComfyUI yourself on a PyTorch template. Pick this for custom versions or nodes.","default":false,"sourceUrl":"https://raw.githubusercontent.com/runpod/runpod-plugins-official/main/plugins/runpod/skills/runpod/golden-paths/02-comfyui-pod/variant-a-from-scratch.md"},{"id":"variant-b-prebuilt","name":"Prebuilt official image","description":"Deploy Runpod's official ComfyUI image. Least effort, most reliable.","default":true,"sourceUrl":"https://raw.githubusercontent.com/runpod/runpod-plugins-official/main/plugins/runpod/skills/runpod/golden-paths/02-comfyui-pod/variant-b-prebuilt.md"}],"supplementalSkills":[{"name":"Storage","url":"https://raw.githubusercontent.com/runpod/runpod-plugins-official/main/plugins/runpod/skills/runpod-usage/reference/storage.md"}]}`
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
