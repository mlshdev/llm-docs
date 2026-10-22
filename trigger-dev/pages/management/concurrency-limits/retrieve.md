> Pinned source for Trigger.dev v4.7.7: [docs/management/concurrency-limits/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/management/concurrency-limits/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/concurrency-limits/retrieve

# Retrieve Concurrency Limit

`GET /api/v1/concurrency-limits/{name}`

**Retrieve concurrency limit**

Retrieve a concurrency limit by name, with its bounds and live running and queued counts. With the concurrencyKey query parameter, retrieve the limit's view for that one key instead (its per-key bound, any per-key override and when it expires, and the runs executing for the key).

**Authentication:** `secretKey`

**Parameters**

- `name` (path; required; string): The limit's name, as declared with `concurrencyLimit()`
- `concurrencyKey` (query; string): Return the view for this concurrencyKey instead of the limit itself.

**Responses**

- `200`: Concurrency limit retrieved successfully
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
- `401`: Unauthorized request
- `404`: Concurrency limit not found
