> Release-pinned source for Trigger.dev v4.5.16: [docs/management/sessions/update.mdx](https://trigger.dev/docs/management/sessions/update)

# Update session

`PATCH /api/v1/sessions/{session}`

**Update a session**

Update a session's `tags` or `metadata`. Pass `metadata: null` to clear it.

Requires a secret key — a session public token cannot update a session. `externalId` is read-only after create: it cannot be changed or cleared. Sending a value different from the current one (including `null` when one is set) returns `422`; sending the same value is accepted as a no-op.

**Parameters**

- `session` (path, required): The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.

**Request body**

**Responses**

- `200`: Session updated successfully
- `401`: Unauthorized request
- `404`: Session not found
- `422`: Validation failed — for example an attempt to change `externalId` to a different value, or a body exceeding 32KB.
