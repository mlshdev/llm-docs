> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationresponsepagination](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationresponsepagination)

# ResponsePagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination metadata returned in list responses from Recommendations and Suggestions endpoints.

## Declaration

```
object RecommendationResponsePagination
```

## Properties

- `offset` — `int32`: The starting position of the current page. Read-only.
- `pageSize` — `int32`: The number of items returned in this page. Read-only.
- `totalCount` — `int64`: The total number of items matching the query across all pages. Read-only.

<a id="Discussion"></a>

## Discussion

The `ResponsePagination` object is the pagination state returned in Recommendations and Suggestions list responses.

To page through results, increment the `offset` in subsequent requests by the `pageSize` until `offset + pageSize >= totalCount`. Unlike cursor-based pagination, offset-based pagination allows jumping to any page directly, though new recommendations may appear or disappear between requests.

<a id="Example"></a>

### Example

```json
{
  "offset": 0,
  "pageSize": 20,
  "totalCount": 47
}
```

## See Also

- [TargetCpaRecommendation](targetcparecommendation.md): A target CPA recommendation for a campaign using a Maximize Conversions bid strategy.
- [TargetCpaRecommendationHistory](targetcparecommendationhistory.md): History record created when a target CPA recommendation is applied or dismissed.
- [DailyCapRecommendation](dailycaprecommendation.md): A daily budget recommendation for a campaign that’s frequently hitting its spending ceiling.
- [DailyCapRecommendationHistory](dailycaprecommendationhistory.md): History record created when you apply or dismiss a daily budget recommendation.
- [ApplyTargetCpaRecommendation](applytargetcparecommendation.md): Request object for applying or dismissing a target CPA recommendation.
- [ApplyDailyCapRecommendation](applydailycaprecommendation.md): Request object for applying or dismissing a daily budget recommendation.
- [ResponseEnvelope](recommendationresponsebody.md): The standard response envelope for all Recommendations and Suggestions API endpoints.
- [ResponseError](recommendationresponseerror.md): Error information returned in the response body when a Recommendations or Suggestions request fails.
- [ResponseErrorDetail](recommendationresponseerrordetail.md): Granular error detail for a single field or condition within a failed Recommendations or Suggestions request.
- [Money](recommendationmoney.md): A monetary amount with currency used throughout the Recommendations and Suggestions APIs.
- [RecommendationApplyDailyBudgetResponse](recommendationapplydailybudgetresponse.md): Response envelope returned when applying or dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationApplyTargetCpaResponse](recommendationapplytargetcparesponse.md): Response envelope returned when applying or dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationBidStrategy](recommendationbidstrategy.md): Bid strategy configuration (type, goal, and amount) associated with a recommendation.
- [RecommendationDismissDailyBudgetResponse](recommendationdismissdailybudgetresponse.md): Response envelope returned when dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationDismissTargetCpaResponse](recommendationdismisstargetcparesponse.md): Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).
