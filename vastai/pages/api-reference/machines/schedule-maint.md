> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/dnotify](https://docs.vast.ai/api-reference/machines/schedule-maint)

# schedule maint

`PUT /api/v0/machines/{machine_id}/dnotify`

Schedules a maintenance window for a specified machine and notifies clients.

CLI Usage: `vastai schedule maint <machine_id> --sdate <sdate> --duration <duration>`

**Parameters**

- `machine_id` (path, required): ID of the machine to schedule maintenance for.

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `404`: Not Found
- `422`: Unprocessable Entity
- `429`: Too Many Requests
