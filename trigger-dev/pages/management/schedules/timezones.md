> Release-pinned source for Trigger.dev v4.5.16: [docs/management/schedules/timezones.mdx](https://trigger.dev/docs/management/schedules/timezones)

# Get timezones

`GET /api/v1/timezones`

**Get all supported timezones**

Get all supported timezones that schedule tasks support.

**Parameters**

- `excludeUtc` (query): Defaults to false. Whether to include UTC in the results or not.

**Responses**

- `200`: Successful request
