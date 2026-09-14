> Pinned source for Trigger.dev v4.6.0: [docs/management/schedules/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/schedules/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/schedules/list

# List Schedules

`GET /api/v1/schedules`

**List all schedules**

List all schedules. You can also paginate the results.

**Authentication:** `secretKey`

**Parameters**

- `page` (query; integer): Page number of the schedule listing
- `perPage` (query; integer): Number of schedules per page

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
          - `id` (string): The unique ID of the schedule, prefixed with 'sched\_'
            - Example: `sched_1234`
          - `task` (string): The id of the scheduled task that will be triggered by this schedule
            - Example: `my-scheduled-task`
          - `type` (string): The type of schedule, `DECLARATIVE` or `IMPERATIVE`. Declarative schedules are declared in your code by setting the `cron` property on a `schedules.task`. Imperative schedules are created in the dashboard or by using the imperative SDK functions like `schedules.create()`.
            - Example: `IMPERATIVE`
          - `active` (boolean): Whether the schedule is active or not
            - Example: `true`
          - `deduplicationKey` (string): The deduplication key used to prevent creating duplicate schedules
            - Example: `dedup_key_1234`
          - `externalId` (string): The external ID of the schedule. Can be anything that is useful to you (e.g., user ID, org ID, etc.)
            - Example: `user_1234`
          - `generator` (object)
            - `type` (string; enum: `CRON`)
            - `expression` (string): The cron expression used to generate the schedule
              - Example: `0 0 * * *`
            - `description` (string): The description of the generator in plain english
              - Example: `Every day at midnight`
          - `timezone` (string): Defaults to UTC. In IANA format, if set then it will trigger at the CRON frequency in that timezone and respect daylight savings time.
            - Example: `America/New_York`
          - `nextRun` (string; format: date-time): The next time the schedule will run
            - Example: `2024-04-01T00:00:00Z`
          - `appliedSchedulePolicy` (object): Present only when a non-overridable plan policy applies a minimum window to this schedule (for example, a free-plan schedule's minimum run interval). The configured `window` is returned separately and unchanged.
            - `minimumWindowSeconds` (number): The minimum window, in seconds, applied on top of the configured window.
              - Example: `3600`
            - `reason` (string; enum: `free_schedule`): Why the minimum window is applied.
          - `environments` (array)
            - `items` (object)
              - `id` (string)
              - `type` (string)
              - `userName` (string)
      - `pagination` (object)
        - `currentPage` (integer)
        - `totalPages` (integer)
        - `count` (integer)
- `401`: Unauthorized request
