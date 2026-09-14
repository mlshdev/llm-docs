> Pinned source for Trigger.dev v4.5.16: [docs/management/queues/pause.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/queues/pause.mdx)
> Canonical documentation: https://trigger.dev/docs/management/queues/pause

# Pause or Resume Queue

`POST /api/v1/queues/{queueParam}/pause`

**Pause or resume a queue**

Pause a queue to prevent new runs from starting, or resume a paused queue. Runs that are currently executing will continue to completion.

**Authentication:** `secretKey`

**Parameters**

- `queueParam` (path; required; string): The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.
  - Example: `queue_1234`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `type` (string; enum: `id`, `task`, `custom`; default: `id`): How to interpret the `queueParam` path parameter: - `id`: Treat as a queue ID (default) - `task`: Treat as a task ID to get the task's default queue - `custom`: Treat as a custom queue name
    - `action` (required; string; enum: `pause`, `resume`): Whether to pause or resume the queue

**Responses**

- `200`: Queue paused or resumed successfully
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
- `400`: Invalid request parameters
- `401`: Unauthorized request
- `404`: Queue not found
