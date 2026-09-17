> Pinned source for Trigger.dev v4.6.3: [docs/management/runs/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/runs/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/list

# List runs

`GET /api/v1/runs`

**List runs**

List runs in a specific environment. You can filter the runs by status, created at, task identifier, version, and more.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; object): Use this parameter to paginate the results. You can specify the number of runs per page, and the ID of the run to start the page after or before. For object fields like `page`, you should use the "form" encoding style. For example, to get the next page of runs, you can use `page[after]=run_1234`.
- `filter` (query; object): Use this parameter to filter the runs. You can filter by created at, status, task identifier, and version. For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get QUEUED and EXECUTING runs, you can use `filter[status]=QUEUED,EXECUTING`. For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
          - `id` (required; string): The unique ID of the run, prefixed with `run_`
            - Example: `run_1234`
          - `status` (required; string; enum: `PENDING_VERSION`, `QUEUED`, `EXECUTING`, `REATTEMPTING`, `FROZEN`, `COMPLETED`, `CANCELED`, `FAILED`, `CRASHED`, `INTERRUPTED`, `SYSTEM_FAILURE`): The status of the run
          - `taskIdentifier` (required; string): The identifier of the task that was run
            - Example: `my-task`
          - `version` (string): The version of the worker that executed the run
            - Example: `20240523.1`
          - `env` (required; object): The environment of the run
            - `id` (required; string): The unique ID of the environment
              - Example: `cl1234`
            - `name` (required; string): The name of the environment
              - Example: `dev`
            - `user` (string): If this is a dev environment, the username of the user represented by this environment
              - Example: `Anna`
          - `idempotencyKey` (string): The idempotency key used to prevent creating duplicate runs, if provided
            - Example: `idempotency_key_1234`
          - `isTest` (required; boolean): Whether the run is a test run or not
            - Example: `false`
          - `createdAt` (required; string; format: date-time)
          - `updatedAt` (required; string; format: date-time)
          - `startedAt` (string; format: date-time): The time the run started
          - `finishedAt` (string; format: date-time): The time the run finished
          - `delayedUntil` (string; format: date-time): If the run was triggered with a delay, this will be the time the run will be enqueued to execute
          - `ttl`: The time-to-live for this run. If the run is not executed within this time, it will be removed from the queue and never execute. You can use a string in this format: `1h`, `1m`, `1h42m` or a number of seconds (min. 1).
            - Example: `1h42m`
          - `expiredAt` (string; format: date-time): If the run had a TTL and that time has passed, when the run "expired".
          - `tags` (array): Tags can be attached to a run to make it easy to find runs (in the dashboard or using SDK functions like `runs.list`)
            - Example: `["user_5df987al13","org_c6b7dycmxw"]`
            - `items` (string): A tag must be between 1 and 128 characters, a run can have up to 10 tags attached to it.
          - `costInCents` (number): The compute cost of the run (so far) in cents. This cost does not apply to DEV runs.
            - Example: `0.00292`
          - `baseCostInCents` (number): The invocation cost of the run in cents. This cost does not apply to DEV runs.
            - Example: `0.0025`
          - `durationMs` (number): The duration of compute (so far) in milliseconds. This does not include waits.
            - Example: `491`
      - `pagination` (object)
        - `next` (string): The run ID to start the next page after. This should be used as the `page[after]` parameter in the next request.
          - Example: `run_1234`
        - `previous` (string): The run ID to start the previous page before. This should be used as the `page[before]` parameter in the next request.
          - Example: `run_5678`
- `400`: Invalid query parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Query Error`
      - `details` (array)
        - `items` (object)
          - `code` (required; string): The error code
            - Example: `custom`
          - `message` (required; string): The error message
            - Example: `Invalid status values: FOOBAR`
          - `path` (array): The relevant path in the request
            - Example: `["filter[status]"]`
            - `items` (string)
- `401`: Unauthorized request
