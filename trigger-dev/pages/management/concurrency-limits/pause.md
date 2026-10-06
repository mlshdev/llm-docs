> Pinned source for Trigger.dev v4.7.3: [docs/management/concurrency-limits/pause.mdx](https://github.com/triggerdotdev/trigger.dev/blob/10b9960d5a45cfb323cfc48a157e3cb8d481339c/docs/management/concurrency-limits/pause.mdx)
> Canonical documentation: https://trigger.dev/docs/management/concurrency-limits/pause

# Pause or Resume Concurrency Limit

`POST /api/v1/concurrency-limits/{name}/pause`

**Pause or resume a concurrency limit**

Pause a concurrency limit to prevent runs holding it from starting, or resume a
paused limit. Runs that are currently executing will continue to completion, and
the limit's configured bounds are kept.

**Authentication:** `secretKey`

**Parameters**

- `name` (path; required; string): The limit's name

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `action` (required; string; enum: `pause`, `resume`): Whether to pause or resume the limit

**Responses**

- `200`: Concurrency limit paused or resumed successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The limit's id, starting with `climit_`
        - Example: `climit_abcdef123456`
      - `name` (required; string): The limit's name, as declared with `concurrencyLimit()`
        - Example: `openai`
      - `perKey` (required; object): Caps each concurrencyKey pool; runs without a key share one pool
        - `current` (integer; nullable): Enforced right now (null = no per-key bound). Enforcement clamps it to the environment concurrency limit at admit time.
          - Example: `null`
        - `base` (integer; nullable): The declared value an override reverts to on reset
          - Example: `null`
        - `override` (integer; nullable): The overridden value, when an override is active
          - Example: `null`
        - `overriddenAt` (string; format: date-time; nullable): When the override was applied
          - Example: `null`
      - `total` (required; object): Caps every run holding this limit, keys or not
        - `current` (integer; nullable): Enforced right now (null = no total bound). Enforcement clamps it to the environment concurrency limit at admit time.
          - Example: `25`
        - `base` (integer; nullable): The declared value an override reverts to on reset
          - Example: `25`
        - `override` (integer; nullable): The overridden value, when an override is active
          - Example: `null`
        - `overriddenAt` (string; format: date-time; nullable): When the override was applied
          - Example: `null`
      - `running` (required; integer): Runs executing that hold this limit
        - Example: `14`
      - `queued` (required; integer): Runs that are queued and must clear this limit to execute
        - Example: `100`
      - `paused` (boolean): Whether the limit is paused. A paused limit admits no runs until resumed; its configured bounds are kept.
        - Example: `false`
- `400`: Invalid request parameters
- `401`: Unauthorized request
- `404`: Concurrency limit not found
- `409`: The limit changed concurrently; retry the request
