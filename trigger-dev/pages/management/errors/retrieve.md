> Release-pinned source for Trigger.dev v4.5.16: [docs/management/errors/retrieve.mdx](https://trigger.dev/docs/management/errors/retrieve)

# Retrieve an error

`GET /api/v1/errors/{errorId}`

**Retrieve an error**

Retrieve detailed information about a single error group, including its lifecycle state and the worker versions it has affected.

**Parameters**

- `errorId` (path, required): The ID of an error group, starts with `error_`.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Error not found
