> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationsortingorder](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationsortingorder)

# SortingOrder

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The sort direction used in a recommendation sorting specification.

## Declaration

```
string RecommendationSortingOrder
```

## Possible Values

- `ASC`: Ascending order. Lowest values appear first. Default when `order` is omitted.
- `DESC`: Descending order. Highest values appear first.

<a id="Discussion"></a>

## Discussion

To control sort direction, specify `order` on a [Sorting](recommendationsorting.md) entry.

## See Also

- [RecommendationQueryRequest](recommendationqueryrequest.md): The structured request body for all recommendation query endpoints.
- [QueryRequestPagination](recommendationqueryrequestpagination.md): Pagination parameters for a recommendation query request.
- [Sorting](recommendationsorting.md): A sort specification used in a recommendation query request to order results.
- [FilterCondition](recommendationfiltercondition.md): A single filter condition used in a recommendation query request to narrow results.
- [FilterOperator](recommendationfilteroperator.md): The comparison operator applied in a recommendation filter condition.
- [RecommendationState](recommendationstate.md): The lifecycle state of a recommendation, indicating whether it’s available to act on or has already been accepted or rejected.
- [RecommendationStatus](recommendationstatus.md): The operational status of a recommendation record, independent of its lifecycle state.
- [RecommendationCategory](recommendationcategory.md): Enumeration that categorizes a recommendation by optimization area and origin.
