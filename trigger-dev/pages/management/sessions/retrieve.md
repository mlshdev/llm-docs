> Release-pinned source for Trigger.dev v4.5.16: [docs/management/sessions/retrieve.mdx](https://trigger.dev/docs/management/sessions/retrieve)

# Retrieve session

`GET /api/v1/sessions/{session}`

**Retrieve a session**

Retrieve a single session by its friendly id (`session_…`) or your `externalId`. The response includes `triggerConfig` and the friendly `currentRunId` of the live run, if any.

**Parameters**

- `session` (path, required): The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Session not found
