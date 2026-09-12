> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/pagination](https://developer.apple.com/documentation/apple-ads-platform-api/pagination)

# Pagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination state in change history list responses.

## Declaration

```
object Pagination
```

## Properties

- `offset` — `integer`: Zero-based index of the first record on the current page.
  **Minimum:** `0`
- `pageSize` — `integer`: The number of records returned on this page.
  **Minimum:** `1`
- `totalCount` — `integer`: The total number of records matching the query across all pages. Returns `0` when `needTotals` is set to `"false"` in the request options. Read-only.
  **Minimum:** `0`

<a id="Discussion"></a>

## Discussion

The `Pagination` object is returned in the `pagination` field of [BaseAuditResponse](baseauditresponse.md) (and its subtypes [AuditSummaryResponse](auditsummaryresponse.md) and [ChangeDetailsResponse](changedetailsresponse.md)).

To page through results, increment `offset` by `pageSize` on each subsequent request until `offset >= totalCount`. When `needTotals` is `"false"` in the [AuditQuery](auditquery.md) options, page forward instead until the response `result` array is empty.

<a id="Example"></a>

### Example

```json
{
  "offset": 0,
  "pageSize": 50,
  "totalCount": 137
}
```

## See Also

- [AuditQuery](auditquery.md): Request body for the Query Change History endpoint.
- [AuditFilter](auditfilter.md): A single filter condition in an audit query request, specifying the field to filter on, the comparison operator, and one or more values to match against.
- [AuditSorting](auditsorting.md): A sort directive in an audit query request, specifying a field to sort by and the direction.
