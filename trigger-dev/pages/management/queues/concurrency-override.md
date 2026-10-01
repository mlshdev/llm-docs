> Pinned source for Trigger.dev v4.7.0: [docs/management/queues/concurrency-override.mdx](https://github.com/triggerdotdev/trigger.dev/blob/f049c346c80844a3932156f476ec516023bb7f4d/docs/management/queues/concurrency-override.mdx)
> Canonical documentation: https://trigger.dev/docs/management/queues/concurrency-override

# Override Concurrency Limit

`POST /api/v1/queues/{queueParam}/concurrency/override`

**Override queue concurrency limit**

Override the concurrency limit of a queue. This is useful for temporarily scaling up or down based on demand.

**Authentication:** `secretKey`

**Parameters**

- `queueParam` (path; required; string): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.
  - Example: `queue_1234`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `type` (string; enum: `id`, `task`, `custom`; default: `id`): How to interpret the `queueParam` path parameter: - `id`: Treat as a queue ID (default) - `task`: Treat as a task ID to get the task's default queue - `custom`: Treat as a custom queue name
    - `concurrencyLimit` (required; integer; minimum: `0`; maximum: `100000`): The new concurrency limit to set for the queue. It may not exceed your environment's maximum concurrency limit: a higher value is rejected with a 400, not capped to the maximum.

**Responses**

- `200`: Concurrency limit overridden successfully
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
- `400`: Invalid request parameters, or the requested concurrency limit exceeds the environment's maximum concurrency limit.
- `401`: Unauthorized request
- `404`: Queue not found
