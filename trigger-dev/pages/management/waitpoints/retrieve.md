> Pinned source for Trigger.dev v4.6.4: [docs/management/waitpoints/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/waitpoints/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/waitpoints/retrieve

# Retrieve a waitpoint token

`GET /api/v1/waitpoints/tokens/{waitpointId}`

**Retrieve a waitpoint token**

Retrieves a waitpoint token by its ID, including its current status and output if it has been completed.

**Authentication:** `secretKey`

**Parameters**

- `waitpointId` (path; required; string): The ID of the waitpoint token.
  - Example: `waitpoint_abc123`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The unique ID of the waitpoint token.
        - Example: `waitpoint_abc123`
      - `url` (required; string): An HTTP callback URL. A POST request to this URL (with an optional JSON body) will complete the waitpoint without needing an API key.
        - Example: `https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash`
      - `status` (required; string; enum: `WAITING`, `COMPLETED`, `TIMED_OUT`): The current status of the waitpoint token.
      - `idempotencyKey` (string; nullable): The idempotency key used when creating the token, if any.
      - `idempotencyKeyExpiresAt` (string; format: date-time; nullable): When the idempotency key expires.
      - `timeoutAt` (string; format: date-time; nullable): When the token will time out, if a timeout was set.
      - `completedAt` (string; format: date-time; nullable): When the token was completed, if it has been completed.
      - `output` (string; nullable): The serialized output data passed when completing the token. Only present when `status` is `COMPLETED`.
      - `outputType` (string; nullable): The content type of the output (e.g. `"application/json"`).
      - `outputIsError` (boolean; nullable): Whether the output represents an error (e.g. a timeout).
      - `tags` (required; array): Tags attached to the waitpoint.
        - `items` (string)
      - `createdAt` (required; string; format: date-time): When the waitpoint token was created.
- `401`: Unauthorized
- `404`: Waitpoint token not found
- `500`: Internal Server Error
