> Release-pinned source for Trigger.dev v4.5.16: [docs/management/queues/retrieve.mdx](https://trigger.dev/docs/management/queues/retrieve)

# Retrieve Queue

`GET /api/v1/queues/{queueParam}`

**Retrieve a queue**

Get a queue by its ID, or by type and name.

**Parameters**

- `queueParam` (path, required): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` query parameter.
- `type` (query): How to interpret the `queueParam` path parameter: - `id`: Treat as a queue ID (default) - `task`: Treat as a task ID to get the task's default queue - `custom`: Treat as a custom queue name

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Queue not found
