> Pinned source for Trigger.dev v4.8.1: [docs/management/concurrency-limits/reset.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/concurrency-limits/reset.mdx)
> Canonical documentation: https://trigger.dev/docs/management/concurrency-limits/reset

# Reset Concurrency Limit

`POST /api/v1/concurrency-limits/{name}/reset`

**Reset concurrency limit**

Reset a concurrency limit back to the values declared in your code, clearing any override. With a concurrencyKey in the body, clear that key's per-key override instead and leave the limit itself alone.

**Authentication:** `secretKey`

**Parameters**

- `name` (path; required; string): The limit's name

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `concurrencyKey` (string): Clear the per-key override for this concurrencyKey only.

**Responses**

- `200`: Concurrency limit reset successfully
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
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
        - `variant 2` (object): A limit's view for one concurrencyKey, returned when a request names a concurrencyKey.
          - `name` (required; string): The limit's name, as declared with `concurrencyLimit()`
            - Example: `subagents`
          - `concurrencyKey` (required; string): The concurrencyKey this view is for
            - Example: `session_abc123`
          - `perKey` (required; object): The per-key bound for this key
            - `current` (integer; nullable): Enforced right now for this key (the override when one is in force, else the limit's perKey), clamped to the environment concurrency limit
              - Example: `3`
            - `base` (integer; nullable): The limit's own perKey as enforced
              - Example: `1`
            - `override` (integer; nullable): The key's temporary override, when one is in force
              - Example: `3`
            - `expiresAt` (string; format: date-time; nullable): When the key's override lapses; null when there is none
              - Example: `2026-10-16T12:00:00.000Z`
          - `running` (required; integer): Runs executing for this key that hold this limit
            - Example: `2`
          - `paused` (required; boolean): Whether the limit is paused. A paused limit admits no runs, override or not.
            - Example: `false`
- `400`: The limit has no override to reset
- `401`: Unauthorized request
- `404`: Concurrency limit not found
- `409`: The limit changed concurrently; retry the request
