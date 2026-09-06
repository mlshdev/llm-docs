> Release-pinned source for Trigger.dev v4.5.16: [docs/management/queues/list.mdx](https://trigger.dev/docs/management/queues/list)

# List Queues

`GET /api/v1/queues`

**List all queues**

List all queues in your environment with pagination support.

**Parameters**

- `page` (query): Page number of the queue listing (1-based)
- `perPage` (query): Number of queues per page

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
