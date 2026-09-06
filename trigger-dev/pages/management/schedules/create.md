> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/create.mdx](https://trigger.dev/docs/management/schedules/create)

# Create Schedule

`POST /api/v1/schedules`

**Create a schedule**

Create a new `IMPERATIVE` schedule based on the specified options.

**Request body**

**Responses**

- `200`: Schedule created successfully
- `400`: Invalid request parameters
- `401`: Unauthorized
- `422`: Unprocessable Entity
