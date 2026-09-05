> Release-pinned source for Trigger.dev v4.5.16: [docs/management/sessions/close.mdx](https://trigger.dev/docs/management/sessions/close)

# Close session

`POST /api/v1/sessions/{session}/close`

**Close a session**

Close a session. Closing is terminal and idempotent — closing an already-closed session returns the existing row unchanged. A closed session cannot be reopened, and reusing its `externalId` on create returns `409`.

Requires a secret key — a session public token cannot close a session.

**Parameters**

- `session` (path, required): The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.

**Request body**

**Responses**

- `200`: Session closed successfully. Returns the session row.
- `401`: Unauthorized request
- `404`: Session not found
