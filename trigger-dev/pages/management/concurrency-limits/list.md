> Pinned source for Trigger.dev v4.7.0: [docs/management/concurrency-limits/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/f049c346c80844a3932156f476ec516023bb7f4d/docs/management/concurrency-limits/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/concurrency-limits/list

# List Concurrency Limits

`GET /api/v1/concurrency-limits`

**List concurrency limits**

List the environment's declared concurrency limits (anonymous inline limits
appear under their derived `task/<task-id>` names), with each limit's bounds
and its live running and queued counts. Results are ordered by the underlying
row name, so named limits sort before `task/`-derived inline limits.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; integer; default: `1`; minimum: `1`)
- `perPage` (query; integer; default: `25`; minimum: `1`; maximum: `100`)

**Responses**

- `200`: Concurrency limits retrieved successfully
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
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
      - `pagination` (object)
        - `currentPage` (integer)
        - `totalPages` (integer)
        - `count` (integer)
- `401`: Unauthorized request
