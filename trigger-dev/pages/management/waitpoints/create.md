> Release-pinned source for Trigger.dev v4.5.16: [docs/management/waitpoints/create.mdx](https://trigger.dev/docs/management/waitpoints/create)

# Create a waitpoint token

`POST /api/v1/waitpoints/tokens`

**Create a waitpoint token**

Creates a new waitpoint token that can be used to pause a run until an external event completes it. The token includes a `url` which can be called via HTTP POST to complete the waitpoint. Use the token ID with `wait.forToken()` inside a task to pause execution until the token is completed.

**Request body**

**Responses**

- `200`: Waitpoint token created successfully
- `401`: Unauthorized
- `422`: Unprocessable Entity
- `500`: Internal Server Error
