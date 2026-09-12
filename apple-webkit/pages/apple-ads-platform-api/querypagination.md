> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/querypagination](https://developer.apple.com/documentation/apple-ads-platform-api/querypagination)

# QueryPagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Controls the page size and starting offset for query results.

## Declaration

```
object QueryPagination
```

## Properties

- `pageSize` — `int32`: The number of items per page.
- `offset` — `int32`: The starting position for pagination, zero-based.
- `fetchTotalCount` — `boolean`: Whether to include the total count in the pagination response. Set to `true` to include the total result count in the `QueryPaginationResult` response.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

The `QueryPagination` controls the page size and starting offset for query results.

<a id="Example"></a>

### Example

```json
{
  "pageSize": 25,
  "offset": 50,
  "fetchTotalCount": true
}
```

## See Also

### Query Objects

- [QueryRequest](queryrequest.md): The standard request body used across all query endpoints, supporting filters, sorting, pagination, and field selection.
- [QueryFilter](queryfilter.md): A single filter condition in a query request, specifying a field, comparison operator, and one or more values to match against.
- [QuerySort](querysort.md): A sort directive in a query request, specifying a field and direction.
- [QueryResponse](queryresponse.md): Response wrapper for paginated query results.
- [QueryPaginationResult](querypaginationresult.md): Pagination metadata returned in query responses, including page size, offset, and optional total count.
