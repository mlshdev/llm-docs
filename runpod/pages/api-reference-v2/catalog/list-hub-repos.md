> Pinned source for Runpod main: [api-reference-v2/catalog/list-hub-repos.mdx](https://github.com/runpod/docs/blob/c845f73c104cb4b69f4caa11f27180533ad8546f/api-reference-v2/catalog/list-hub-repos.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/catalog/list-hub-repos

# List Hub Repos

Search Runpod Hub repos: GitHub repositories Runpod builds into deployable images, with reliability scores and deploy counts.

`GET /v2/catalog/repos`

**List Hub repos**

Returns Hub repos: GitHub repositories Runpod builds into images you
can deploy. Open one with `GET /v2/catalog/repos/{id}` for its listed
release and deploy defaults.

Without `search`, repos are ordered most deployed first.

**Authentication:** `bearerAuth`

**Parameters**

- `search` (query; string; minimum length: `1`; maximum length: `200`): Search text, matched case-insensitively. Every word must match. A skill matches on its name, description and tags; a repo also on its GitHub owner and name; a template on its name and image, and a versioned template's tag also on its line's name and description. Enables `orderBy=RELEVANCE`, which becomes the default order.
  - Example: `comfyui`
- `product` (query; array): Only return items that deploy to one of these products. Comma-separated.
  - Example: `["SERVERLESS"]`
- `minReliability` (query; number; format: double; minimum: `0`; maximum: `1`): Only return items whose `health.reliability` is at least this value. Unscored items are excluded when this is set.
  - Example: `0.9`
- `category` (query; string; minimum length: `1`; maximum length: `100`): Only return items in this category, matched exactly and case-insensitively.
  - Example: `image`
- `tags` (query; array): Only return items carrying every one of these tags, matched exactly and case-insensitively. Comma-separated.
  - Example: `["comfyui","image"]`
- `source` (query; string; enum: `official`, `community`): `official` returns repos Runpod publishes (see `official` on the repo). `community` returns the rest. Omit for all.
  - Example: `official`
- `owner` (query; string; minimum length: `1`; maximum length: `100`): Only return repos from this GitHub owner, matched exactly and case-insensitively.
  - Example: `runpod-workers`
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
      - `repos` (required; array)
        - `items` (object): A Hub repo: a GitHub repository Runpod builds into a deployable image. Read its README at `GET /v2/catalog/repos/{id}/readme`.
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
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `repos`: `{"repos":[{"id":"cm862p99s000008ilegk86af6","name":"ComfyUI","description":"ComfyUI as a serverless API.","products":["SERVERLESS"],"category":"image","tags":["comfyui"],"official":true,"repository":{"owner":"runpod-workers","name":"worker-comfyui","url":"https://github.com/runpod-workers/worker-comfyui","ownerAvatarUrl":"https://avatars.githubusercontent.com/u/123456?v=4"},"health":{"tier":"VERIFIED","reliability":0.97,"computedAt":"2026-11-04T06:00:00Z"},"stats":{"deploys":41210,"stars":812,"views":190455},"latestRelease":{"id":"cm8a1b2c3000108l4d5e6f7g8","tag":"v5.4.1","releasedAt":"2026-10-28T00:00:00Z","image":"runpod/worker-comfyui:5.4.1-base","deployable":true},"createdAt":"2025-03-01T00:00:00Z","updatedAt":"2026-10-28T00:00:00Z"}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
