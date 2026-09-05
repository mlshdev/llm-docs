> Release-pinned source for Trigger.dev v4.5.16: [docs/management/queues/concurrency-reset.mdx](https://trigger.dev/docs/management/queues/concurrency-reset)

# Reset Concurrency Limit

`POST /api/v1/queues/{queueParam}/concurrency/reset`

**Reset queue concurrency limit**

Reset the concurrency limit of a queue back to its base value defined in code.

**Parameters**

- `queueParam` (path, required): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.

**Request body**

**Responses**

- `200`: Concurrency limit reset successfully
- `400`: Queue is not overridden or invalid request parameters
- `401`: Unauthorized request
- `404`: Queue not found
