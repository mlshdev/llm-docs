> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/list.mdx](https://trigger.dev/docs/management/schedules/list)

# List Schedules

`GET /api/v1/schedules`

**List all schedules**

List all schedules. You can also paginate the results.

**Parameters**

- `page` (query): Page number of the schedule listing
- `perPage` (query): Number of schedules per page

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
