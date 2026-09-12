> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationstatus](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationstatus)

# RecommendationStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The operational status of a recommendation record, independent of its lifecycle state.

## Declaration

```
string RecommendationStatus
```

## Possible Values

- `ENABLED`: The recommendation record is active and operational. Default for new recommendations.
- `DISABLED`: The recommendation record has been administratively disabled but not removed.
- `DELETED`: The recommendation record has been permanently deleted from the system and can no longer be retrieved.

<a id="Discussion"></a>

## Discussion

The `RecommendationStatus` reflects the system-level status of the recommendation record itself, in contrast to [RecommendationState](recommendationstate.md) which tracks the advertiser’s response. In most workflows `state` is the relevant field. The `status` field primarily serves internal record management.

A recommendation can be `ENABLED` while in `APPLIED` or `DISMISSED` state. The status reflects the record’s persistence in the system, not its actionability.

## See Also

- [RecommendationQueryRequest](recommendationqueryrequest.md): The structured request body for all recommendation query endpoints.
- [QueryRequestPagination](recommendationqueryrequestpagination.md): Pagination parameters for a recommendation query request.
- [Sorting](recommendationsorting.md): A sort specification used in a recommendation query request to order results.
- [SortingOrder](recommendationsortingorder.md): The sort direction used in a recommendation sorting specification.
- [FilterCondition](recommendationfiltercondition.md): A single filter condition used in a recommendation query request to narrow results.
- [FilterOperator](recommendationfilteroperator.md): The comparison operator applied in a recommendation filter condition.
- [RecommendationState](recommendationstate.md): The lifecycle state of a recommendation, indicating whether it’s available to act on or has already been accepted or rejected.
- [RecommendationCategory](recommendationcategory.md): Enumeration that categorizes a recommendation by optimization area and origin.
