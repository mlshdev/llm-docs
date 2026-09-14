> Pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/waitpoints/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/waitpoints/list

# List waitpoint tokens

`GET /api/v1/waitpoints/tokens`

**List waitpoint tokens**

Returns a paginated list of waitpoint tokens for the current environment. Results are ordered by creation date, newest first. Use cursor-based pagination with `page[after]` and `page[before]` to navigate pages.

**Authentication:** `secretKey`

**Parameters**

- `page[size]` (query; integer; minimum: `1`; maximum: `100`): Number of tokens to return per page (1–100).
- `page[after]` (query; string): Return tokens after this cursor (from `pagination.next` in a previous response).
- `page[before]` (query; string): Return tokens before this cursor (from `pagination.previous` in a previous response).
- `filter[status]` (query; string): Comma-separated list of statuses to filter by. Allowed values: `WAITING`, `COMPLETED`, `TIMED_OUT`.
  - Example: `WAITING,COMPLETED`
- `filter[idempotencyKey]` (query; string): Filter by idempotency key.
- `filter[tags]` (query; string): Comma-separated list of tags to filter by.
  - Example: `user:1234567,org:9876543`
- `filter[createdAt][period]` (query; string): Shorthand time period to filter by creation date (e.g. `1h`, `24h`, `7d`). Cannot be combined with `filter[createdAt][from]` or `filter[createdAt][to]`.
  - Example: `24h`
- `filter[createdAt][from]` (query; string; format: date-time): Filter tokens created at or after this ISO 8601 timestamp.
- `filter[createdAt][to]` (query; string; format: date-time): Filter tokens created at or before this ISO 8601 timestamp.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array): An array of waitpoint token objects.
        - `items` (object)
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
      - `pagination` (required; object)
        - `next` (string; nullable): Cursor for the next page. Pass as `page[after]` in the next request.
          - Example: `waitpoint_abc123`
        - `previous` (string; nullable): Cursor for the previous page. Pass as `page[before]` in the next request.
          - Example: `waitpoint_xyz789`
- `401`: Unauthorized
- `422`: Invalid query parameters (e.g. unrecognised status value)
- `500`: Internal Server Error
