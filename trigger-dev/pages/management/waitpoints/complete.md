> Release-pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/complete.mdx](https://trigger.dev/docs/management/waitpoints/complete)

# Complete a waitpoint token

`POST /api/v1/waitpoints/tokens/{waitpointId}/complete`

**Complete a waitpoint token**

Completes a waitpoint token, unblocking any run that is waiting for it via `wait.forToken()`. An optional `data` payload can be passed and will be returned to the waiting run. If the token is already completed, this is a no-op and returns `success: true`.

This endpoint accepts both secret API keys and short-lived JWTs (public access tokens), making it safe to call from frontend clients.

**Parameters**

- `waitpointId` (path, required): The ID of the waitpoint token to complete.

**Request body**

**Responses**

- `200`: Waitpoint token completed successfully
- `401`: Unauthorized
- `404`: Waitpoint token not found
- `500`: Internal Server Error
