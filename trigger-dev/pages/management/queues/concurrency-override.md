> Release-pinned source for Trigger.dev v4.5.16: [docs/management/queues/concurrency-override.mdx](https://trigger.dev/docs/management/queues/concurrency-override)

# Override Concurrency Limit

`POST /api/v1/queues/{queueParam}/concurrency/override`

**Override queue concurrency limit**

Override the concurrency limit of a queue. This is useful for temporarily scaling up or down based on demand.

**Parameters**

- `queueParam` (path, required): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.

**Request body**

**Responses**

- `200`: Concurrency limit overridden successfully
- `400`: Invalid request parameters, or the requested concurrency limit exceeds the environment's maximum concurrency limit.
- `401`: Unauthorized request
- `404`: Queue not found
