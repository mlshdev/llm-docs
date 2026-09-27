> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/pagedetail

# PageDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The number of items that return in the page.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object PageDetail
```

## Properties

- `itemsPerPage` — `int32`: The maximum number of entries that return for this operation, which is the value of `count` in the GET operation. The actual number of entries that return can be less than the maximum `itemsPerPage`.
- `startIndex` — `int32`: The offset of the first entry that returns. Use `offset` in the request query string or [Selector](selector.md) to override the default value of `0`. For example, if the request is `offset=5`, the response `startIndex` is also `5`. A value of `0` retrieves the first `itemsPerPage` results from the full result set.
- `totalResults` — `int64`: The total number of entries that return for the operation.

<a id="Discussion"></a>

## Discussion

The `PageDetail` object contains the pagination response for returned multiple records.

```json
{
   "data":[
     { },
     ...
   ],
   "pagination"{
     "totalResults": 10,
     "startIndex": 1,
     "itemsPerPage": 10
   },
}

```

## See Also

### API Usability

- [Condition](condition.md): Deprecated. The list of condition objects that allow users to filter a list of records.
- [Pagination](pagination.md): Deprecated. The procedure to refine returned results using limit and offset parameters.
- [Selector](selector.md): Deprecated. The selector objects available to filter returned data.
- [Sorting](sorting.md): Deprecated. The order of grouped results.
