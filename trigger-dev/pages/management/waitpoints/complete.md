> Pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/complete.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/waitpoints/complete.mdx)
> Canonical documentation: https://trigger.dev/docs/management/waitpoints/complete

# Complete a waitpoint token

`POST /api/v1/waitpoints/tokens/{waitpointId}/complete`

**Complete a waitpoint token**

Completes a waitpoint token, unblocking any run that is waiting for it via `wait.forToken()`. An optional `data` payload can be passed and will be returned to the waiting run. If the token is already completed, this is a no-op and returns `success: true`.

This endpoint accepts both secret API keys and short-lived JWTs (public access tokens), making it safe to call from frontend clients.

**Authentication:** `secretKey` or `publicAccessToken`

**Parameters**

- `waitpointId` (path; required; string): The ID of the waitpoint token to complete.
  - Example: `waitpoint_abc123`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `data`: Any JSON-serializable value to pass back to the run waiting on this token. The data will be returned from `wait.forToken()` as the result payload.
      - Example: `{"status":"approved","comment":"Looks good to me!"}`

**Responses**

- `200`: Waitpoint token completed successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean; enum: `true`): Always `true` when the request succeeds.
- `401`: Unauthorized
- `404`: Waitpoint token not found
- `500`: Internal Server Error
