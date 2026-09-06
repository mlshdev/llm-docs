> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/retrieve.mdx](https://trigger.dev/docs/management/schedules/retrieve)

# Retrieve Schedule

`GET /api/v1/schedules/{schedule_id}`

**Retrieve Schedule**

Get a schedule by its ID.

**Parameters**

- `schedule_id` (path, required): The ID of the schedule.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Resource not found
