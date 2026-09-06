> Release-pinned source for Trigger.dev v4.5.16: [docs/management/sessions/create.mdx](https://trigger.dev/docs/management/sessions/create)

# Create session

`POST /api/v1/sessions`

**Create a session**

Create a Session and trigger its first run in one atomic call. A Session is the durable identity for a bi-directional stream of records (the `.in` and `.out` channels) that survives across the runs processing it.

Idempotent on `externalId` within an environment. Calling create again with an `externalId` that already maps to an open session returns the existing session with `isCached: true` and `201` becomes `200`. Reusing an `externalId` whose session is already closed or expired returns `409`.

Authorize with a secret key, or a public token carrying `write:sessions` for the session you are creating.

**Request body**

**Responses**

- `200`: An open session already existed for this `externalId`. The existing session is returned with `isCached: true`.
- `201`: Session created and its first run triggered.
- `401`: Unauthorized
- `409`: An `externalId` was reused, but its session is already closed or expired. Closed and expired sessions cannot be reopened.
- `422`: Validation failed — for example the request body exceeds 32KB, or `externalId` starts with the reserved `session_` prefix.
