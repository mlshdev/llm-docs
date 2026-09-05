> Release-pinned source for Trigger.dev v4.5.16: [docs/management/errors/unresolve.mdx](https://trigger.dev/docs/management/errors/unresolve)

# Unresolve an error

`POST /api/v1/errors/{errorId}/unresolve`

**Unresolve an error**

Move a resolved or ignored error group back to unresolved.

**Parameters**

- `errorId` (path, required): The ID of an error group, starts with `error_`.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Error not found
