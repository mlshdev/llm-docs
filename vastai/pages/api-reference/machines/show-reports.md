> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/machines/{machine_id}/reports](https://docs.vast.ai/api-reference/machines/show-reports)

# show reports

`GET /api/v0/machines/{machine_id}/reports`

Retrieves a list of the most recent reports for a given machine. Each report includes details such as the problem identified, a message describing the issue, and the timestamp when the report was created.

CLI Usage: `vastai reports <machine_id>`

**Parameters**

- `machine_id` (path, required): The unique identifier of the machine.

**Responses**

- `200`: An array of reports for the specified machine.
- `404`: Machine not found.
- `500`: Internal server error.
