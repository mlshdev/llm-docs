> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationdismisstargetcparesponse](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationdismisstargetcparesponse)

# RecommendationDismissTargetCpaResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).

## Declaration

```
object RecommendationDismissTargetCpaResponse
```

## Properties

- `result` — `[TargetCpaRecommendationHistory]`: The target CPA recommendation history record(s) created by dismissing the recommendation. Array of [TargetCpaRecommendationHistory](targetcparecommendationhistory.md). Read-only.
- `pagination` — `RecommendationResponsePagination`: Pagination metadata. `null` for apply and dismiss responses. See [ResponsePagination](recommendationresponsepagination.md). Read-only.
- `error` — `RecommendationResponseError`: Error details when the request fails. Absent on success. See [ResponseError](recommendationresponseerror.md). Read-only.

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
- [ResponsePagination](recommendationresponsepagination.md): Pagination metadata returned in list responses from Recommendations and Suggestions endpoints.
- [Money](recommendationmoney.md): A monetary amount with currency used throughout the Recommendations and Suggestions APIs.
- [RecommendationApplyDailyBudgetResponse](recommendationapplydailybudgetresponse.md): Response envelope returned when applying or dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationApplyTargetCpaResponse](recommendationapplytargetcparesponse.md): Response envelope returned when applying or dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationBidStrategy](recommendationbidstrategy.md): Bid strategy configuration (type, goal, and amount) associated with a recommendation.
- [RecommendationDismissDailyBudgetResponse](recommendationdismissdailybudgetresponse.md): Response envelope returned when dismissing a daily budget recommendation, containing the resulting history record(s).
