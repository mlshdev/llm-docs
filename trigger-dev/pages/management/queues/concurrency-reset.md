> Pinned source for Trigger.dev v4.6.0: [docs/management/queues/concurrency-reset.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/queues/concurrency-reset.mdx)
> Canonical documentation: https://trigger.dev/docs/management/queues/concurrency-reset

# Reset Concurrency Limit

`POST /api/v1/queues/{queueParam}/concurrency/reset`

**Reset queue concurrency limit**

Reset the concurrency limit of a queue back to its base value defined in code.

**Authentication:** `secretKey`

**Parameters**

- `queueParam` (path; required; string): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.
  - Example: `queue_1234`

**Request body**

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
      - `running` (required; integer): The number of runs currently executing
        - Example: `5`
      - `queued` (required; integer): The number of runs currently queued
        - Example: `10`
      - `paused` (required; boolean): Whether the queue is paused. When paused, no new runs will start.
        - Example: `false`
      - `concurrencyLimit` (integer; nullable): The current concurrency limit of the queue
        - Example: `10`
      - `concurrency` (object): Detailed concurrency information
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
