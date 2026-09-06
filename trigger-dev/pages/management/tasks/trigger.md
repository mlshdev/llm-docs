> Release-pinned source for Trigger.dev v4.5.16: [docs/management/tasks/trigger.mdx](https://trigger.dev/docs/management/tasks/trigger)

# Trigger

`POST /api/v1/tasks/{taskIdentifier}/trigger`

**Trigger a task**

Trigger a task by its identifier.

**Parameters**

- `taskIdentifier` (path, required): The id of a task

**Request body**

**Responses**

- `200`: Task triggered successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
