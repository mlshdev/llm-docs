> Pinned source for Trigger.dev v4.7.0: [docs/management/queues/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/f049c346c80844a3932156f476ec516023bb7f4d/docs/management/queues/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/queues/list

# List Queues

`GET /api/v1/queues`

**List all queues**

List all queues in your environment with pagination support.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; integer): Page number of the queue listing (1-based)
- `perPage` (query; integer): Number of queues per page

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array): An array of queue objects
        - `items` (object)
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
      - `pagination` (required; object)
        - `currentPage` (integer): The current page number
          - Example: `1`
        - `totalPages` (integer): The total number of pages
          - Example: `5`
        - `count` (integer): The total number of queues
          - Example: `50`
- `401`: Unauthorized request
