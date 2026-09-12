> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/querysort](https://developer.apple.com/documentation/apple-ads-platform-api/querysort)

# QuerySort

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A sort directive in a query request, specifying a field and direction.

## Declaration

```
object QuerySort
```

## Properties

- `field` — `string`: The name of the field to sort on (for example, id, name).
- `order` — `QuerySortOrder`: The sort direction for the specified field. Valid values: `ASC`, `DESC`.

<a id="Discussion"></a>

## Discussion

The `QuerySort` defines one sort directive in a `QueryRequest.sorting` array. The query applies multiple `QuerySort` entries in order: the first entry is the primary sort, subsequent entries are tiebreakers.

<a id="Example"></a>

### Example

```json
{
  "field": "name",
  "order": "ASC"
}
```

## See Also

### Query Objects

- [QueryRequest](queryrequest.md): The standard request body used across all query endpoints, supporting filters, sorting, pagination, and field selection.
- [QueryFilter](queryfilter.md): A single filter condition in a query request, specifying a field, comparison operator, and one or more values to match against.
- [QueryPagination](querypagination.md): Controls the page size and starting offset for query results.
- [QueryResponse](queryresponse.md): Response wrapper for paginated query results.
- [QueryPaginationResult](querypaginationresult.md): Pagination metadata returned in query responses, including page size, offset, and optional total count.
