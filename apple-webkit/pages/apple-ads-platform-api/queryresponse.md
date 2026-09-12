> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/queryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/queryresponse)

# QueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response wrapper for paginated query results.

## Declaration

```
object QueryResponse
```

## Properties

- `result` — `[QueryResponse.Result]`: The matching entity records for this query. Read-only.
- `pagination` — `QueryPaginationResult`: Offset metadata for the result set. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `QueryResponse` object is the generic paginated response envelope returned by query endpoints.

This wrapper is the base type for all query responses. Specific entity query responses extend this pattern with a typed `result` array.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": "123456789",
      "name": "AwayFinder Campaign"
    }
  ],
  "pagination": {
    "totalCount": 1,
    "offset": 0,
    "pageSize": 20
  }
}
```

## Topics

### Dictionaries

- [QueryResponse.Result](queryresponse/result-data.dictionary.md): The untyped placeholder item shape for the base `QueryResponse` envelope’s `result` array.

## See Also

### Query Objects

- [QueryRequest](queryrequest.md): The standard request body used across all query endpoints, supporting filters, sorting, pagination, and field selection.
- [QueryFilter](queryfilter.md): A single filter condition in a query request, specifying a field, comparison operator, and one or more values to match against.
- [QuerySort](querysort.md): A sort directive in a query request, specifying a field and direction.
- [QueryPagination](querypagination.md): Controls the page size and starting offset for query results.
- [QueryPaginationResult](querypaginationresult.md): Pagination metadata returned in query responses, including page size, offset, and optional total count.
