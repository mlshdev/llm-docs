> Pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/create.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/bulk-actions/create.mdx)
> Canonical documentation: https://trigger.dev/docs/management/bulk-actions/create

# Create bulk action

`POST /api/v1/bulk-actions`

**Create bulk action**

Create an asynchronous bulk action to cancel or replay runs selected by run IDs or filters.

**Authentication:** `secretKey`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - oneOf:
      - `variant 1` (object)
        - `action` (required; string; enum: `cancel`)
        - `filter` (required; object): Selects runs using SDK-style run-list filter fields, excluding pagination fields. In HTTP requests these fields are sent as JSON body properties, so time fields are top-level (`from`, `to`, `period`) instead of nested under `createdAt`. Provide at least one property.
          - `status`
            - oneOf:
              - `variant 1` (string; enum: `PENDING_VERSION`, `QUEUED`, `EXECUTING`, `REATTEMPTING`, `FROZEN`, `COMPLETED`, `CANCELED`, `FAILED`, `CRASHED`, `INTERRUPTED`, `SYSTEM_FAILURE`)
              - `variant 2` (array)
                - `items` (string; enum: `PENDING_VERSION`, `QUEUED`, `EXECUTING`, `REATTEMPTING`, `FROZEN`, `COMPLETED`, `CANCELED`, `FAILED`, `CRASHED`, `INTERRUPTED`, `SYSTEM_FAILURE`)
          - `taskIdentifier`: The identifier of the task that was run.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `version`: The worker version that executed the run.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `from`: Start of the time range as an ISO date string or Unix timestamp in milliseconds.
            - oneOf:
              - `variant 1` (string; format: date-time)
              - `variant 2` (number)
          - `to`: End of the time range as an ISO date string or Unix timestamp in milliseconds.
            - oneOf:
              - `variant 1` (string; format: date-time)
              - `variant 2` (number)
          - `period` (string): Relative time period to select, such as `24h` or `30d`.
            - Example: `24h`
          - `bulkAction` (string): Select runs that were processed by another bulk action.
            - Example: `bulk_1234`
          - `tag`: Select runs with one or more tags.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `schedule` (string): Select runs created by a schedule.
            - Example: `sched_1234`
          - `isTest` (boolean): Select test or non-test runs.
          - `batch` (string): Select runs in a batch.
            - Example: `batch_1234`
          - `queue`
            - oneOf:
              - `variant 1` (object)
                - `type` (required; string; enum: `task`, `custom`)
                - `name` (required; string)
              - `variant 2` (array)
                - `items` (object)
                  - `type` (required; string; enum: `task`, `custom`)
                  - `name` (required; string)
          - `machine`: Select runs by machine preset.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `region`: Select runs by region.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
        - `name` (string; maximum length: `255`)
      - `variant 2` (object)
        - `action` (required; string; enum: `cancel`)
        - `runIds` (required; array; minimum items: `1`; maximum items: `500`)
          - `items` (string)
        - `name` (string; maximum length: `255`)
      - `variant 3` (object)
        - `action` (required; string; enum: `replay`)
        - `filter` (required; object): Selects runs using SDK-style run-list filter fields, excluding pagination fields. In HTTP requests these fields are sent as JSON body properties, so time fields are top-level (`from`, `to`, `period`) instead of nested under `createdAt`. Provide at least one property.
          - `status`
            - oneOf:
              - `variant 1` (string; enum: `PENDING_VERSION`, `QUEUED`, `EXECUTING`, `REATTEMPTING`, `FROZEN`, `COMPLETED`, `CANCELED`, `FAILED`, `CRASHED`, `INTERRUPTED`, `SYSTEM_FAILURE`)
              - `variant 2` (array)
                - `items` (string; enum: `PENDING_VERSION`, `QUEUED`, `EXECUTING`, `REATTEMPTING`, `FROZEN`, `COMPLETED`, `CANCELED`, `FAILED`, `CRASHED`, `INTERRUPTED`, `SYSTEM_FAILURE`)
          - `taskIdentifier`: The identifier of the task that was run.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `version`: The worker version that executed the run.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `from`: Start of the time range as an ISO date string or Unix timestamp in milliseconds.
            - oneOf:
              - `variant 1` (string; format: date-time)
              - `variant 2` (number)
          - `to`: End of the time range as an ISO date string or Unix timestamp in milliseconds.
            - oneOf:
              - `variant 1` (string; format: date-time)
              - `variant 2` (number)
          - `period` (string): Relative time period to select, such as `24h` or `30d`.
            - Example: `24h`
          - `bulkAction` (string): Select runs that were processed by another bulk action.
            - Example: `bulk_1234`
          - `tag`: Select runs with one or more tags.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `schedule` (string): Select runs created by a schedule.
            - Example: `sched_1234`
          - `isTest` (boolean): Select test or non-test runs.
          - `batch` (string): Select runs in a batch.
            - Example: `batch_1234`
          - `queue`
            - oneOf:
              - `variant 1` (object)
                - `type` (required; string; enum: `task`, `custom`)
                - `name` (required; string)
              - `variant 2` (array)
                - `items` (object)
                  - `type` (required; string; enum: `task`, `custom`)
                  - `name` (required; string)
          - `machine`: Select runs by machine preset.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
          - `region`: Select runs by region.
            - oneOf:
              - `variant 1` (string)
              - `variant 2` (array)
                - `items` (string)
        - `name` (string; maximum length: `255`)
        - `targetRegion` (string): Region identifier to replay runs in. When omitted, each replay keeps the original run's region.
      - `variant 4` (object)
        - `action` (required; string; enum: `replay`)
        - `runIds` (required; array; minimum items: `1`; maximum items: `500`)
          - `items` (string)
        - `name` (string; maximum length: `255`)
        - `targetRegion` (string): Region identifier to replay runs in. When omitted, each replay keeps the original run's region.

**Responses**

- `202`: Bulk action accepted
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string)
        - Example: `bulk_1234`
- `400`: Invalid request parameters or body
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
- `422`: Unprocessable entity
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `429`: Too many concurrent bulk replays
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
