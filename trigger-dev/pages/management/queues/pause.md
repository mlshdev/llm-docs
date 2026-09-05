> Release-pinned source for Trigger.dev v4.5.16: [docs/management/queues/pause.mdx](https://trigger.dev/docs/management/queues/pause)

# Pause or Resume Queue

`POST /api/v1/queues/{queueParam}/pause`

**Pause or resume a queue**

Pause a queue to prevent new runs from starting, or resume a paused queue. Runs that are currently executing will continue to completion.

**Parameters**

- `queueParam` (path, required): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.

**Request body**

**Responses**

- `200`: Queue paused or resumed successfully
- `400`: Invalid request parameters
- `401`: Unauthorized request
- `404`: Queue not found
