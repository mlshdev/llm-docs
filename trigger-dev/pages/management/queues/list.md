> Pinned source for Trigger.dev v4.6.4: [docs/management/queues/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/queues/list.mdx)
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
      - `pagination` (required; object)
        - `currentPage` (integer): The current page number
          - Example: `1`
        - `totalPages` (integer): The total number of pages
          - Example: `5`
        - `count` (integer): The total number of queues
          - Example: `50`
- `401`: Unauthorized request
