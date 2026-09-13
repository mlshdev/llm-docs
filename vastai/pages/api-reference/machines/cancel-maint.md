> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/cancel_maint](https://docs.vast.ai/api-reference/machines/cancel-maint)

# cancel maint

`PUT /api/v0/machines/{machine_id}/cancel_maint`

Cancel a scheduled maintenance window for a specified machine.

CLI Usage: `vastai cancel maint <machine_id>`

**Parameters**

- `machine_id` (path, required): ID of the machine to cancel maintenance for.

**Responses**

- `200`: Maintenance window successfully canceled.
- `404`: Machine not found or does not belong to the user.
