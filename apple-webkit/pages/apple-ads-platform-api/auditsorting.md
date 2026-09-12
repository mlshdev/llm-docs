> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/auditsorting](https://developer.apple.com/documentation/apple-ads-platform-api/auditsorting)

# AuditSorting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A sort directive in an audit query request, specifying a field to sort by and the direction.

## Declaration

```
object AuditSorting
```

## Properties

- `field` — `string`: The name of the field to sort by. Common values: `eventTime`, `entityType`, `eventType`, `userType`.
- `order` — `AuditSortOrder`: The sort direction. See [AuditSortOrder](auditsortorder.md). Defaults to `DESC`.

<a id="Discussion"></a>

## Discussion

Include one or more `AuditSorting` entries in the `sorting` array of an [AuditQuery](auditquery.md) request to control the order of results. When you omit this array, the API returns results sorted by `eventTime` descending (most recent first).

```json
"sorting": [
  { "field": "eventTime", "order": "DESC" }
]
```

The API applies multiple sort directives in order. The first directive is the primary sort. Subsequent entries break ties.

<a id="Example"></a>

### Example

```json
{
  "field": "eventTime",
  "order": "DESC"
}
```

## See Also

- [AuditQuery](auditquery.md): Request body for the Query Change History endpoint.
- [AuditFilter](auditfilter.md): A single filter condition in an audit query request, specifying the field to filter on, the comparison operator, and one or more values to match against.
- [Pagination](pagination.md): Pagination state in change history list responses.
