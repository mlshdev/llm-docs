> Pinned source for Trigger.dev v4.8.6: [docs/management/schedules/delete.mdx](https://github.com/triggerdotdev/trigger.dev/blob/74765f97f1baafc7665d25b0f2f2af2dcf14436b/docs/management/schedules/delete.mdx)
> Canonical documentation: https://trigger.dev/docs/management/schedules/delete

# Delete Schedule

`DELETE /api/v1/schedules/{schedule_id}`

**Delete Schedule**

Delete a schedule by its ID. This will only work on `IMPERATIVE` schedules that were created in the dashboard or using the imperative SDK functions like `schedules.create()`.

**Authentication:** `secretKey`

**Parameters**

- `schedule_id` (path; required; string): The ID of the schedule.

**Responses**

- `200`: Schedule deleted successfully
- `401`: Unauthorized request
- `404`: Resource not found
