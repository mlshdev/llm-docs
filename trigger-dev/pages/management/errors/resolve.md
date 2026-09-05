> Release-pinned source for Trigger.dev v4.5.16: [docs/management/errors/resolve.mdx](https://trigger.dev/docs/management/errors/resolve)

# Resolve an error

`POST /api/v1/errors/{errorId}/resolve`

**Resolve an error**

Mark an error group as resolved. Optionally record the worker version that resolved it. Send a JSON body (use `{}` when you have no fields to set).

**Parameters**

- `errorId` (path, required): The ID of an error group, starts with `error_`.

**Request body**

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Error not found
