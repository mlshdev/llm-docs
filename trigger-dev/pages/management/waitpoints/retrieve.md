> Release-pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/retrieve.mdx](https://trigger.dev/docs/management/waitpoints/retrieve)

# Retrieve a waitpoint token

`GET /api/v1/waitpoints/tokens/{waitpointId}`

**Retrieve a waitpoint token**

Retrieves a waitpoint token by its ID, including its current status and output if it has been completed.

**Parameters**

- `waitpointId` (path, required): The ID of the waitpoint token.

**Responses**

- `200`: Successful request
- `401`: Unauthorized
- `404`: Waitpoint token not found
- `500`: Internal Server Error
