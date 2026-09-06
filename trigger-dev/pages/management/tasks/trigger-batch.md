> Release-pinned source for Trigger.dev v4.5.16: [docs/management/tasks/trigger-batch.mdx](https://trigger.dev/docs/management/tasks/trigger-batch)

# Trigger task batch

`POST /api/v1/tasks/{taskIdentifier}/batch`

**Batch trigger a specific task**

Batch trigger a specific task with up to 1,000 payloads. All items in the batch run the same task.

**Parameters**

- `taskIdentifier` (path, required): The id of a task

**Request body**

**Responses**

- `200`: Batch triggered successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Task not found
