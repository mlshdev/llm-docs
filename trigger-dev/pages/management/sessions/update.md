> Pinned source for Trigger.dev v4.6.0: [docs/management/sessions/update.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/sessions/update.mdx)
> Canonical documentation: https://trigger.dev/docs/management/sessions/update

# Update session

`PATCH /api/v1/sessions/{session}`

**Update a session**

Update a session's `tags` or `metadata`. Pass `metadata: null` to clear it.

Requires a secret key — a session public token cannot update a session. `externalId` is read-only after create: it cannot be changed or cleared. Sending a value different from the current one (including `null` when one is set) returns `422`; sending the same value is accepted as a no-op.

**Authentication:** `secretKey`

**Parameters**

- `session` (path; required; string): The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.
  - Example: `session_abc123`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): Body for `PATCH /api/v1/sessions/{session}`. The whole body must be 32KB or smaller. Every field is optional; omitted fields are left unchanged.
    - `tags` (array; maximum items: `10`): Replaces the tags on the session row.
      - `items` (string; maximum length: `128`)
    - `metadata` (object; nullable): Replaces the metadata. Pass `null` to clear it.
    - `externalId` (string; nullable; minimum length: `1`; maximum length: `256`): Read-only after create: cannot be changed or cleared. Sending a value different from the current one (including `null` when one is set) returns `422`; sending the same value is idempotent.

**Responses**

- `200`: Session updated successfully
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
- `422`: Validation failed — for example an attempt to change `externalId` to a different value, or a body exceeding 32KB.
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
