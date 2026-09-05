> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/update.mdx](https://trigger.dev/docs/management/schedules/update)

# Update Schedule

`PUT /api/v1/schedules/{schedule_id}`

**Update Schedule**

Update a schedule by its ID. This will only work on `IMPERATIVE` schedules that were created in the dashboard or using the imperative SDK functions like `schedules.create()`.

**Parameters**

- `schedule_id` (path, required): The ID of the schedule.

**Request body**

**Responses**

- `200`: Schedule updated successfully
- `400`: Invalid request parameters
- `401`: Unauthorized
- `404`: Resource not found
- `422`: Unprocessable Entity
