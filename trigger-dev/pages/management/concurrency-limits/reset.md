> Pinned source for Trigger.dev v4.7.0: [docs/management/concurrency-limits/reset.mdx](https://github.com/triggerdotdev/trigger.dev/blob/f049c346c80844a3932156f476ec516023bb7f4d/docs/management/concurrency-limits/reset.mdx)
> Canonical documentation: https://trigger.dev/docs/management/concurrency-limits/reset

# Reset Concurrency Limit

`POST /api/v1/concurrency-limits/{name}/reset`

**Reset concurrency limit**

Reset a concurrency limit back to the values declared in your code, clearing any override.

**Authentication:** `secretKey`

**Parameters**

- `name` (path; required; string): The limit's name

**Responses**

- `200`: Concurrency limit reset successfully
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
- `400`: The limit has no override to reset
- `401`: Unauthorized request
- `404`: Concurrency limit not found
- `409`: The limit changed concurrently; retry the request
