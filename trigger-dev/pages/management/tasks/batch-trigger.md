> Release-pinned source for Trigger.dev v4.5.16: [docs/management/tasks/batch-trigger.mdx](https://trigger.dev/docs/management/tasks/batch-trigger)

# Batch trigger

`POST /api/v1/tasks/batch`

**Batch trigger tasks**

Batch trigger tasks with up to 1,000 payloads with SDK 4.3.1+ (500 in prior versions).

**Request body**

**Responses**

- `200`: Task batch triggered successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
