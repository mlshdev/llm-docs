> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationqueryrequestpagination](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationqueryrequestpagination)

# QueryRequestPagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination parameters for a recommendation query request.

## Declaration

```
object RecommendationQueryRequestPagination
```

## Properties

- `offset` — `int32`: The zero-based index of the first result to return. Use with `pageSize` to page through large result sets. Defaults to `0`.
  **Default:** `0`  
  **Minimum:** `0`
- `pageSize` — `int32`: The maximum number of results to return per page. Minimum `1`, maximum `1000`. Defaults to `20`.
  **Default:** `20`  
  **Minimum:** `1`  
  **Maximum:** `1000`

<a id="Discussion"></a>

## Discussion

The `QueryRequestPagination` controls pagination in recommendation query requests. The response includes a `pagination` envelope with `offset`, `pageSize`, and `totalCount` indicating how many records matched the filters in total.

To retrieve the next page, increment `offset` by `pageSize`:

```json
{
  "offset": 20,
  "pageSize": 20
}
```

Continue until `offset + pageSize >= totalCount`. New recommendations may appear or disappear between pages because the result set isn’t snapshotted.

## See Also

- [RecommendationQueryRequest](recommendationqueryrequest.md): The structured request body for all recommendation query endpoints.
- [Sorting](recommendationsorting.md): A sort specification used in a recommendation query request to order results.
- [SortingOrder](recommendationsortingorder.md): The sort direction used in a recommendation sorting specification.
- [FilterCondition](recommendationfiltercondition.md): A single filter condition used in a recommendation query request to narrow results.
- [FilterOperator](recommendationfilteroperator.md): The comparison operator applied in a recommendation filter condition.
- [RecommendationState](recommendationstate.md): The lifecycle state of a recommendation, indicating whether it’s available to act on or has already been accepted or rejected.
- [RecommendationStatus](recommendationstatus.md): The operational status of a recommendation record, independent of its lifecycle state.
- [RecommendationCategory](recommendationcategory.md): Enumeration that categorizes a recommendation by optimization area and origin.
