> Pinned source for Trigger.dev v4.6.4: [docs/management/schedules/deactivate.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/schedules/deactivate.mdx)
> Canonical documentation: https://trigger.dev/docs/management/schedules/deactivate

# Deactivate Schedule

`POST /api/v1/schedules/{schedule_id}/deactivate`

**Deactivate Schedule.**

Deactivate a schedule by its ID. This will only work on `IMPERATIVE` schedules that were created in the dashboard or using the imperative SDK functions like `schedules.create()`.

**Authentication:** `secretKey`

**Parameters**

- `schedule_id` (path; required; string): The ID of the schedule.

**Responses**

- `200`: Schedule updated successfully
  - Media type: `application/json`
    - Schema (object)
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
- `401`: Unauthorized request
- `404`: Resource not found
