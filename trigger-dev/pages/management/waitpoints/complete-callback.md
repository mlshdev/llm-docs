> Release-pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/complete-callback.mdx](https://trigger.dev/docs/management/waitpoints/complete-callback)

# Complete a waitpoint token via HTTP callback

`POST /api/v1/waitpoints/tokens/{waitpointId}/callback/{callbackHash}`

**Complete a waitpoint token via HTTP callback**

Completes a waitpoint token using the pre-signed callback URL returned in the `url` field when the token was created. No API key is required — the `callbackHash` in the URL acts as the authentication token.

This is designed to be given directly to external services (e.g. as a webhook URL) so they can unblock a waiting run without needing access to your API key. The entire request body is passed as the output data to the waiting run.

If the token is already completed, this is a no-op and returns `success: true`.

**Parameters**

- `waitpointId` (path, required): The ID of the waitpoint token.
- `callbackHash` (path, required): The HMAC hash that authenticates the request. This is embedded in the `url` returned when creating the token — do not construct it manually.

**Request body**

**Responses**

- `200`: Waitpoint token completed successfully
- `401`: Invalid callback URL or hash mismatch
- `404`: Waitpoint token not found
- `405`: Method not allowed
- `411`: Content-Length header is required
- `413`: Request body too large
- `500`: Internal Server Error
