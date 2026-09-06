> Release-pinned source for Trigger.dev v4.5.16: [docs/management/errors/ignore.mdx](https://trigger.dev/docs/management/errors/ignore)

# Ignore an error

`POST /api/v1/errors/{errorId}/ignore`

**Ignore an error**

Mark an error group as ignored. Provide a `duration` to ignore it for a fixed window, and/or thresholds that re-surface the error when exceeded. Send a JSON body (use `{}` to ignore indefinitely).

**Parameters**

- `errorId` (path, required): The ID of an error group, starts with `error_`.

**Request body**

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Error not found
