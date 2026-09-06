> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/activate.mdx](https://trigger.dev/docs/management/schedules/activate)

# Activate Schedule

`POST /api/v1/schedules/{schedule_id}/activate`

**Activate Schedule**

Activate a schedule by its ID. This will only work on `IMPERATIVE` schedules that were created in the dashboard or using the imperative SDK functions like `schedules.create()`.

**Parameters**

- `schedule_id` (path, required): The ID of the schedule.

**Responses**

- `200`: Schedule updated successfully
- `401`: Unauthorized request
- `404`: Resource not found
