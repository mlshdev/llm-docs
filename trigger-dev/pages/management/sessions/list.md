> Release-pinned source for Trigger.dev v4.5.16: [docs/management/sessions/list.mdx](https://trigger.dev/docs/management/sessions/list)

# List sessions

`GET /api/v1/sessions`

**List sessions**

List sessions in the current environment, newest first. Filter by type, tags, task identifier, external id, status, and creation window. Use cursor-based pagination with `page[after]` and `page[before]` to navigate pages.

List rows omit `triggerConfig`; retrieve a single session to read it.

**Parameters**

- `page` (query): Paginate the results. Specify the number of sessions per page, and the ID of the session to start the page after or before. For object fields like `page`, use the "form" encoding style. For example, to get the next page, use `page[after]=session_1234`.
- `filter` (query): Use this parameter to filter the sessions. You can filter by type, tags, task identifier, external id, status, and created at. For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get ACTIVE and CLOSED sessions, you can use `filter[status]=ACTIVE,CLOSED`. For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

**Responses**

- `200`: Successful request
- `400`: Invalid query parameters
- `401`: Unauthorized request
