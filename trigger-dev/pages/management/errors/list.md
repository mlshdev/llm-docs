> Release-pinned source for Trigger.dev v4.5.16: [docs/management/errors/list.mdx](https://trigger.dev/docs/management/errors/list)

# List errors

`GET /api/v1/errors`

**List errors**

List error groups in a specific environment. Runs that fail are grouped by a fingerprint derived from the error type, message, and stack trace. Filter by task identifier, version, status, search text, and time range.

**Parameters**

- `page` (query): Paginate the results. Specify the number of errors per page, and the ID of the error to start the page after or before. For object fields like `page`, use the "form" encoding style. For example, to get the next page, use `page[after]=error_1234`.
- `filter` (query): Filter the error groups. Filter by task identifier, version, status, search text, and time range. For array fields, provide multiple values as a comma-separated list. For example, to get unresolved and ignored errors, use `filter[status]=unresolved,ignored`. For the time range, use `filter[period]` (e.g. `filter[period]=7d`) or `filter[from]` / `filter[to]` with ISO timestamps.

**Responses**

- `200`: Successful request
- `400`: Invalid query parameters
- `401`: Unauthorized request
