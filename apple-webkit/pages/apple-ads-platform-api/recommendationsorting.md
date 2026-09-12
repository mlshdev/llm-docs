> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationsorting](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationsorting)

# Sorting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A sort specification used in a recommendation query request to order results.

## Declaration

```
object RecommendationSorting
```

## Properties

- `field` — `string` (required): The name of the field to sort by. Use `creationTime` to sort by when the recommendation was created, or `expirationTime` to sort by recommendation expiry and act on time-sensitive items first.
- `order` — `RecommendationSortingOrder`: The sort direction. Defaults to `ASC` when omitted. See [SortingOrder](recommendationsortingorder.md).
  **Default:** `ASC`

<a id="Discussion"></a>

## Discussion

The `Sorting` specifies one sort dimension in the `sorting` array of a QueryRequest. The `sorting` array supports multiple entries, which the system applies in order. The first entry is the primary sort, the second is the tiebreaker, and so on.

<a id="Example"></a>

### Example

```json
{
  "field": "creationTime",
  "order": "DESC"
}
```

## See Also

- [RecommendationQueryRequest](recommendationqueryrequest.md): The structured request body for all recommendation query endpoints.
- [QueryRequestPagination](recommendationqueryrequestpagination.md): Pagination parameters for a recommendation query request.
- [SortingOrder](recommendationsortingorder.md): The sort direction used in a recommendation sorting specification.
- [FilterCondition](recommendationfiltercondition.md): A single filter condition used in a recommendation query request to narrow results.
- [FilterOperator](recommendationfilteroperator.md): The comparison operator applied in a recommendation filter condition.
- [RecommendationState](recommendationstate.md): The lifecycle state of a recommendation, indicating whether it’s available to act on or has already been accepted or rejected.
- [RecommendationStatus](recommendationstatus.md): The operational status of a recommendation record, independent of its lifecycle state.
- [RecommendationCategory](recommendationcategory.md): Enumeration that categorizes a recommendation by optimization area and origin.
