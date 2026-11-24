> Pinned source for Runpod main: [api-reference-v2/catalog/list-skills.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/catalog/list-skills.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/list-skills

# List Skills

Search Runpod skills: step-by-step guides an agent follows to set up a workload on Runpod, such as ComfyUI on a pod.

`GET /v2/catalog/skills`

**List skills**

Returns skills: step-by-step guides, published by Runpod, that an
agent follows to set up a workload. Each skill has a README and one
or more variants; open one with `GET /v2/catalog/skills/{id}`.

Without `search`, skills are ordered most recently updated first.
`minReliability`, `product` and `category` don't apply to skills and
are rejected with 422, as is any other undeclared parameter.

**Authentication:** `bearerAuth`

**Parameters**

- `search` (query; string; minimum length: `1`; maximum length: `200`): Search text, matched case-insensitively. Every word must match. A skill matches on its name, description and tags; a repo also on its GitHub owner and name; a template on its name and image, and a versioned template's tag also on its line's name and description. Enables `orderBy=RELEVANCE`, which becomes the default order.
  - Example: `comfyui`
- `tags` (query; array): Only return items carrying every one of these tags, matched exactly and case-insensitively. Comma-separated.
  - Example: `["comfyui","image"]`
- `mcpSupport` (query; array): Only return skills with one of these MCP support levels. Comma-separated. Skills that don't state one are excluded when this is set.
  - Example: `["FULL","PARTIAL"]`
- `orderBy` (query; string; enum: `RELEVANCE`, `UPDATED`, `NAME`): Defaults to `RELEVANCE` when `search` is set and `UPDATED` otherwise. `RELEVANCE` without `search` is rejected with 400.
  - Example: `UPDATED`
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
      - `skills` (required; array)
        - `items` (object): A skill: a step-by-step guide, published by Runpod, that an agent follows to set up a workload. Read its README at `GET /v2/catalog/skills/{id}/readme`.
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
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `skills`: `{"skills":[{"id":"02-comfyui-pod","name":"ComfyUI server on a pod","description":"Provisions a GPU pod, gets ComfyUI running with a checkpoint and the default text-to-image workflow, and returns a proxy URL for the web UI.","tags":["comfyui","image-generation","pod"],"mcpSupport":"PARTIAL","official":true,"sourceUrl":"https://raw.githubusercontent.com/runpod/runpod-plugins-official/main/plugins/runpod/skills/runpod/golden-paths/02-comfyui-pod/README.md","createdAt":"2026-07-14T21:20:11Z","updatedAt":"2026-10-13T14:51:26Z"}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
