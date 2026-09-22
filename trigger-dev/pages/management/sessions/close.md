> Pinned source for Trigger.dev v4.6.4: [docs/management/sessions/close.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/sessions/close.mdx)
> Canonical documentation: https://trigger.dev/docs/management/sessions/close

# Close session

`POST /api/v1/sessions/{session}/close`

**Close a session**

Close a session. Closing is terminal and idempotent — closing an already-closed session returns the existing row unchanged. A closed session cannot be reopened, and reusing its `externalId` on create returns `409`.

Requires a secret key — a session public token cannot close a session.

**Authentication:** `secretKey`

**Parameters**

- `session` (path; required; string): The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.
  - Example: `session_abc123`

**Request body**

- Media type: `application/json`
  - Schema (object): Body for `POST /api/v1/sessions/{session}/close`. Up to 1KB.
    - `reason` (string; maximum length: `256`): Optional reason recorded on the session row.
      - Example: `user signed out`

**Responses**

- `200`: Session closed successfully. Returns the session row.
  - Media type: `application/json`
    - Schema (object): A session row.
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
- `401`: Unauthorized request
- `404`: Session not found
