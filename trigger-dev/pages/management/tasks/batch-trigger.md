> Pinned source for Trigger.dev v4.6.3: [docs/management/tasks/batch-trigger.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/tasks/batch-trigger.mdx)
> Canonical documentation: https://trigger.dev/docs/management/tasks/batch-trigger

# Batch trigger

`POST /api/v1/tasks/batch`

**Batch trigger tasks**

Batch trigger tasks with up to 1,000 payloads with SDK 4.3.1+ (500 in prior versions).

**Authentication:** `secretKey`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `items` (required; array): An array of payloads to trigger the task with
      - `items` (object)
        - allOf:
          - `variant 1` (object)
            - `payload`: The payload can include any valid JSON
            - `context`: The context can include any valid JSON
            - `options` (object)
              - `queue` (object)
                - `name` (string): You can define a shared queue and then pass the name in to your task.
                - `concurrencyLimit` (integer; minimum: `0`; maximum: `1000`): An optional property that specifies the maximum number of concurrent run executions. If this property is omitted, the task can potentially use up the full concurrency of an environment.
              - `concurrencyKey` (string): Scope the concurrency limit to a specific key.
              - `idempotencyKey` (string): An optional property that specifies the idempotency key used to prevent creating duplicate runs. If you provide an existing idempotency key, we will return the existing run ID.
              - `ttl`: The time-to-live for this run. If the run is not executed within this time, it will be removed from the queue and never execute. You can use a string in this format: `1h`, `1m`, `1h42m` or a number of seconds (min. 1).
                - Example: `1h42m`
              - `delay` (string): The delay before the task is executed. This can be a Date object, a string like `1h` or a date-time string. \* "1h" - 1 hour \* "30d" - 30 days \* "15m" - 15 minutes \* "2w" - 2 weeks \* "60s" - 60 seconds \* new Date("2025-01-01T00:00:00Z")
              - `tags`: Tags to attach to the run. Tags can be used to filter runs in the dashboard and using the SDK. You can set up to 10 tags per run, each must be less than 128 characters. We recommend prefixing tags with a namespace using an underscore or colon, like `user_1234567` or `org:9876543`. Stripe uses underscores.
                - allOf:
                  - `variant 1`: One or more tags to attach to a run. Runs can have a maximum of 10 tags.
                    - oneOf:
                      - `variant 1` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
                        - Example: `user_123456`
                      - `variant 2` (array; maximum items: `10`; unique items)
                        - Example: `["user_123456","product_4629101"]`
                        - `items` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
                          - Example: `user_123456`
              - `machine` (string; enum: `micro`, `small-1x`, `small-2x`, `medium-1x`, `medium-2x`, `large-1x`, `large-2x`): The machine preset to use for this run. This will override the task's machine preset and any defaults.
                - Example: `small-2x`
          - `variant 2` (object)
            - `task` (required; string): The task identifier to trigger. This is the `id` set in your `task()` functions.

**Responses**

- `200`: Task batch triggered successfully
  - Media type: `application/json`
    - Schema (object)
      - `batchId` (required; string): The ID of the batch that was triggered
        - Example: `batch_1234`
      - `runs` (required; array): An array of run IDs that were triggered
        - `items` (string)
- `400`: Invalid request parameters or body
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
