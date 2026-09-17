> Pinned source for Trigger.dev v4.6.3: [docs/management/sessions/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/sessions/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/sessions/list

# List sessions

`GET /api/v1/sessions`

**List sessions**

List sessions in the current environment, newest first. Filter by type, tags, task identifier, external id, status, and creation window. Use cursor-based pagination with `page[after]` and `page[before]` to navigate pages.

List rows omit `triggerConfig`; retrieve a single session to read it.

**Authentication:** `secretKey` or `publicAccessToken`

**Parameters**

- `page` (query; object): Paginate the results. Specify the number of sessions per page, and the ID of the session to start the page after or before. For object fields like `page`, use the "form" encoding style. For example, to get the next page, use `page[after]=session_1234`.
- `filter` (query; object): Use this parameter to filter the sessions. You can filter by type, tags, task identifier, external id, status, and created at. For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get ACTIVE and CLOSED sessions, you can use `filter[status]=ACTIVE,CLOSED`. For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object): A session row.
          - `id` (required; string): The session's friendly ID, prefixed with `session_`.
            - Example: `session_abc123`
          - `externalId` (string; nullable): Your stable identity for the session, if one was set.
            - Example: `chat_1234`
          - `type` (required; string): The session type discriminator.
            - Example: `chat.agent`
          - `taskIdentifier` (required; string): The task this session triggers runs against.
            - Example: `my-chat`
          - `triggerConfig` (object): Trigger options applied to every run a session schedules. `basePayload` is the wire payload merged into each run; the remaining fields map onto the standard trigger options.
            - `basePayload` (required; object): Base payload passed to every run this session triggers. For `chat.agent` this carries `{ chatId, ...clientData }`.
            - `machine` (string): Machine preset for each run, e.g. `small-1x`.
              - Example: `small-1x`
            - `queue` (string; maximum length: `128`): Queue to schedule runs on.
            - `tags` (array; maximum items: `5`): Tags applied to every run this session triggers.
              - `items` (string; maximum length: `128`)
            - `maxAttempts` (integer; minimum: `1`; maximum: `10`): Maximum retry attempts per run.
            - `maxDuration` (integer; minimum: `1`): Per-run wall-clock cap in seconds.
            - `lockToVersion` (string): Pin every run to a specific worker version.
              - Example: `20240523.1`
            - `region` (string): Region to schedule runs in.
            - `idleTimeoutInSeconds` (integer; minimum: `1`; maximum: `3600`): Idle timeout surfaced to `chat.agent` via the wire payload.
          - `currentRunId` (string; nullable): Friendly ID of the live run for this session, if any. Prefixed with `run_`. Omitted on list rows.
            - Example: `run_def456`
          - `tags` (required; array): Tags on the session row.
            - Example: `["chat:1234"]`
            - `items` (string)
          - `metadata` (object; nullable): Arbitrary JSON metadata, or `null` if unset.
          - `closedAt` (string; format: date-time; nullable): When the session was closed, or `null` if open.
          - `closedReason` (string; nullable): The optional reason recorded when the session was closed.
          - `expiresAt` (string; format: date-time; nullable): The session's retention deadline, or `null` if none.
          - `createdAt` (required; string; format: date-time)
          - `updatedAt` (required; string; format: date-time)
      - `pagination` (object)
        - `next` (string): The session ID to start the next page after. Pass it as the `page[after]` parameter on the next request.
          - Example: `session_abc123`
        - `previous` (string): The session ID to start the previous page before. Pass it as the `page[before]` parameter on the next request.
          - Example: `session_xyz789`
- `400`: Invalid query parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Query Error`
      - `details` (array)
        - `items` (object)
          - `code` (required; string): The error code
            - Example: `custom`
          - `message` (required; string): The error message
            - Example: `Invalid status values: FOOBAR`
          - `path` (array): The relevant path in the request
            - Example: `["filter[status]"]`
            - `items` (string)
- `401`: Unauthorized request
