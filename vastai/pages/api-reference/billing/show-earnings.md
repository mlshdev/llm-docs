> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/machine-earnings](https://docs.vast.ai/api-reference/billing/show-earnings)

# show earnings

`GET /api/v0/users/{user_id}/machine-earnings`

Retrieves the earnings history for a specified time range and optionally per machine.

CLI Usage: `vastai show earnings [options]`

**Parameters**

- `user_id` (path, required): The ID of the user.
- `sday` (query): Start day for the earnings report.
- `eday` (query): End day for the earnings report.
- `machid` (query): Optional machine ID to filter earnings.
- `last_days` (query): Number of days to look back from today.

**Responses**

- `200`: Success response
- `400`: Bad Request - Invalid input syntax
- `429`: Too Many Requests
