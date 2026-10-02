> Pinned source for Trigger.dev v4.7.2: [docs/management/queues/concurrency-reset.mdx](https://github.com/triggerdotdev/trigger.dev/blob/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/management/queues/concurrency-reset.mdx)
> Canonical documentation: https://trigger.dev/docs/management/queues/concurrency-reset

# Reset Concurrency Limit

`POST /api/v1/queues/{queueParam}/concurrency/reset`

**Reset queue concurrency limit**

Reset the concurrency limit of a queue back to its base value defined in code.

**Authentication:** `secretKey`

**Parameters**

- `queueParam` (path; required; string): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.
  - Example: `queue_1234`

**Request body** (required): At least an empty JSON object `{}` must be sent; a zero-length body is rejected with a 400.

- Media type: `application/json`
  - Schema (object)
    - `type` (string; enum: `id`, `task`, `custom`; default: `id`): How to interpret the `queueParam` path parameter: - `id`: Treat as a queue ID (default) - `task`: Treat as a task ID to get the task's default queue - `custom`: Treat as a custom queue name

**Responses**

- `200`: Concurrency limit reset successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The queue ID, e.g., `queue_1234`
        - Example: `queue_1234`
      - `name` (required; string): The queue name. For task queues, this is the task ID. For custom queues, this is the name you specified.
        - Example: `my-task-id`
      - `type` (required; string; enum: `task`, `custom`): The type of queue: - `task`: Created automatically for each task - `custom`: Created explicitly in your code using `queue()`
        - Example: `task`
      - `version` (required; string; enum: `V1`, `V2`): Discriminates the shape: - `V1`: the queue carries its own `concurrencyLimit` (applied per key when runs pass a `concurrencyKey`, to the whole queue when they don't) and its `concurrency` override state - `V2`: the queue is only the line runs wait in; concurrency is declared with the task `concurrency` option and managed through the concurrency-limits endpoints. `concurrencyLimit` is always null and `concurrency` is absent.
        - Example: `V1`
      - `running` (required; integer): The number of runs currently executing
        - Example: `5`
      - `queued` (required; integer): The number of runs currently queued
        - Example: `10`
      - `paused` (required; boolean): Whether the queue is paused. When paused, no new runs will start.
        - Example: `false`
      - `concurrencyLimit` (integer; nullable): The queue's own concurrency limit. Meaningful on V1 queues; always null on V2 queues.
        - Example: `10`
      - `concurrency` (object): Detailed concurrency information. V1 queues only.
        - `current` (integer; nullable): The effective/current concurrency limit
          - Example: `10`
        - `base` (integer; nullable): The base concurrency limit defined in code
          - Example: `10`
        - `override` (integer; nullable): The override concurrency limit (if set)
          - Example: `null`
        - `overriddenAt` (string; format: date-time; nullable): When the concurrency limit was overridden
          - Example: `null`
        - `overriddenBy` (string; nullable): Who overrode the concurrency limit (null if via API)
          - Example: `null`
- `400`: Queue is not overridden or invalid request parameters
- `401`: Unauthorized request
- `404`: Queue not found
