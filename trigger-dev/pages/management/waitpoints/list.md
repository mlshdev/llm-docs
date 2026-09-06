> Release-pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/list.mdx](https://trigger.dev/docs/management/waitpoints/list)

# List waitpoint tokens

`GET /api/v1/waitpoints/tokens`

**List waitpoint tokens**

Returns a paginated list of waitpoint tokens for the current environment. Results are ordered by creation date, newest first. Use cursor-based pagination with `page[after]` and `page[before]` to navigate pages.

**Parameters**

- `page[size]` (query): Number of tokens to return per page (1–100).
- `page[after]` (query): Return tokens after this cursor (from `pagination.next` in a previous response).
- `page[before]` (query): Return tokens before this cursor (from `pagination.previous` in a previous response).
- `filter[status]` (query): Comma-separated list of statuses to filter by. Allowed values: `WAITING`, `COMPLETED`, `TIMED_OUT`.
- `filter[idempotencyKey]` (query): Filter by idempotency key.
- `filter[tags]` (query): Comma-separated list of tags to filter by.
- `filter[createdAt][period]` (query): Shorthand time period to filter by creation date (e.g. `1h`, `24h`, `7d`). Cannot be combined with `filter[createdAt][from]` or `filter[createdAt][to]`.
- `filter[createdAt][from]` (query): Filter tokens created at or after this ISO 8601 timestamp.
- `filter[createdAt][to]` (query): Filter tokens created at or before this ISO 8601 timestamp.

**Responses**

- `200`: Successful request
- `401`: Unauthorized
- `422`: Invalid query parameters (e.g. unrecognised status value)
- `500`: Internal Server Error
