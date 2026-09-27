> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/querypaginationresult

# QueryPaginationResult

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination metadata returned in query responses, including page size, offset, and optional total count.

## Declaration

```
object QueryPaginationResult
```

## Properties

- `pageSize` — `int32`: The number of rows actually returned in this response. May be smaller than the requested `pageSize`, for example on the last page of a result set.
- `offset` — `int32`: The offset position for this response page. Echoes the `offset` from the request.
- `totalCount` — `int64`: The total number of results matching the query. Only populated when `fetchTotalCount` is `true` in the request.

<a id="Discussion"></a>

## Discussion

The `QueryPaginationResult` object is returned in the `pagination` field of query responses. It echoes `offset` from the request and provides `totalCount` when requested, but `pageSize` reports the number of rows actually returned in this response, not the requested page size. On the last page of a result set, this is often smaller than the `pageSize` you requested. Don’t rely on `result.length == pagination.pageSize` to detect the last page; instead, compare `offset + pagination.pageSize` against `totalCount`.

<a id="Example"></a>

### Example

A request with `pagination: { "offset": 150, "pageSize": 50 }` against a result set with 180 total matches returns only the remaining 30 rows on this page:

```json
{
  "pageSize": 30,
  "offset": 150,
  "totalCount": 180
}
```

## See Also

### Query Objects

- [QueryRequest](queryrequest.md): The standard request body used across all query endpoints, supporting filters, sorting, pagination, and field selection.
- [QueryFilter](queryfilter.md): A single filter condition in a query request, specifying a field, comparison operator, and one or more values to match against.
- [QuerySort](querysort.md): A sort directive in a query request, specifying a field and direction.
- [QueryPagination](querypagination.md): Controls the page size and starting offset for query results.
- [QueryResponse](queryresponse.md): Response wrapper for paginated query results.
