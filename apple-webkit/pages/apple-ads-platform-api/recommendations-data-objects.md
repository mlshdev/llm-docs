> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendations-data-objects](https://developer.apple.com/documentation/apple-ads-platform-api/recommendations-data-objects)

# Recommendations Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Request and response objects for recommendation endpoints.

## Topics

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
- [RecommendationDismissTargetCpaResponse](recommendationdismisstargetcparesponse.md): Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationQueryDailyBudgetResponse](recommendationquerydailybudgetresponse.md): Response envelope returned by the daily budget recommendation query endpoint, containing matched recommendations.
- [RecommendationQueryTargetCpaResponse](recommendationquerytargetcparesponse.md): Response envelope returned by the target CPA recommendation query endpoint, containing matched recommendations.

## See Also

### Recommendations

- [Recommendations Endpoints](recommendations-endpoints.md): Endpoints for querying, applying, and dismissing budget and Target CPA recommendations.
- [Recommendations Query and Filter Objects](recommendations-query-filter-objects.md): Query, filter, pagination, and sorting objects for recommendation requests.
