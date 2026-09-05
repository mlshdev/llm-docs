> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/list.mdx](https://trigger.dev/docs/management/runs/list)

# List runs

`GET /api/v1/runs`

**List runs**

List runs in a specific environment. You can filter the runs by status, created at, task identifier, version, and more.

**Parameters**

- `page` (query): Use this parameter to paginate the results. You can specify the number of runs per page, and the ID of the run to start the page after or before. For object fields like `page`, you should use the "form" encoding style. For example, to get the next page of runs, you can use `page[after]=run_1234`.
- `filter` (query): Use this parameter to filter the runs. You can filter by created at, status, task identifier, and version. For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get QUEUED and EXECUTING runs, you can use `filter[status]=QUEUED,EXECUTING`. For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

**Responses**

- `200`: Successful request
- `400`: Invalid query parameters
- `401`: Unauthorized request
