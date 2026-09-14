> Pinned source for Trigger.dev v4.6.0: [docs/management/sessions/create.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/sessions/create.mdx)
> Canonical documentation: https://trigger.dev/docs/management/sessions/create

# Create session

`POST /api/v1/sessions`

**Create a session**

Create a Session and trigger its first run in one atomic call. A Session is the durable identity for a bi-directional stream of records (the `.in` and `.out` channels) that survives across the runs processing it.

Idempotent on `externalId` within an environment. Calling create again with an `externalId` that already maps to an open session returns the existing session with `isCached: true` and `201` becomes `200`. Reusing an `externalId` whose session is already closed or expired returns `409`.

Authorize with a secret key, or a public token carrying `write:sessions` for the session you are creating.

**Authentication:** `secretKey` or `publicAccessToken`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): Body for `POST /api/v1/sessions`. The whole body must be 32KB or smaller.
    - `type` (required; string; minimum length: `1`; maximum length: `64`): Free-form discriminator for the session, e.g. `chat.agent`. Not validated against an enum.
      - Example: `chat.agent`
    - `taskIdentifier` (required; string; minimum length: `1`; maximum length: `128`): The task this session triggers runs against.
      - Example: `my-chat`
    - `triggerConfig` (required; object): Trigger options applied to every run a session schedules. `basePayload` is the wire payload merged into each run; the remaining fields map onto the standard trigger options.
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
    - `externalId` (string; minimum length: `1`; maximum length: `256`): Your stable identity for the session, unique per environment. Cannot start with the reserved `session_` prefix. Reusing an `externalId` makes create idempotent; reusing one whose session is closed or expired returns `409`.
      - Example: `chat_1234`
    - `tags` (array; maximum items: `10`): Up to 10 tags on the session row, for dashboard filtering.
      - `items` (string; maximum length: `128`)
    - `metadata` (object): Arbitrary JSON metadata.
    - `expiresAt` (string; format: date-time): Absolute expiry timestamp for retention.

**Responses**

- `200`: An open session already existed for this `externalId`. The existing session is returned with `isCached: true`.
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object): A session row.
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
        - `variant 2` (object)
          - `runId` (required; string): Friendly ID of the first run triggered alongside the session.
            - Example: `run_def456`
          - `publicAccessToken` (required; string): Session-scoped public access token carrying `read:sessions:{key}` and `write:sessions:{key}`. Default TTL is 1 hour. Safe to pass to frontend clients.
          - `isCached` (required; boolean): `true` if an open session already existed for this `externalId` (idempotent upsert), `false` if newly created.
- `201`: Session created and its first run triggered.
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object): A session row.
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
        - `variant 2` (object)
          - `runId` (required; string): Friendly ID of the first run triggered alongside the session.
            - Example: `run_def456`
          - `publicAccessToken` (required; string): Session-scoped public access token carrying `read:sessions:{key}` and `write:sessions:{key}`. Default TTL is 1 hour. Safe to pass to frontend clients.
          - `isCached` (required; boolean): `true` if an open session already existed for this `externalId` (idempotent upsert), `false` if newly created.
- `401`: Unauthorized
- `409`: An `externalId` was reused, but its session is already closed or expired. Closed and expired sessions cannot be reopened.
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `422`: Validation failed — for example the request body exceeds 32KB, or `externalId` starts with the reserved `session_` prefix.
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
