> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/paginginformation/paging-data.dictionary](https://developer.apple.com/documentation/appleschoolmanagerapi/paginginformation/paging-data.dictionary)

# PagingInformation.Paging

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.6+

Paging details, such as the total number of resources and the per-page limit.

## Declaration

```
object PagingInformation.Paging
```

## Properties

- `limit` — `integer` (required): The maximum number of resources to return per page.
- `nextCursor` — `string`: The cursor to use for the next request, in case of pagination.
- `total` — `integer`: **(Optional)** The total number of resources to return.
