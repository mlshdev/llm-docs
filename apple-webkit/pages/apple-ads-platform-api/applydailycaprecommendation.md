> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/applydailycaprecommendation](https://developer.apple.com/documentation/apple-ads-platform-api/applydailycaprecommendation)

# ApplyDailyCapRecommendation

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request object for applying or dismissing a daily budget recommendation.

## Declaration

```
object ApplyDailyCapRecommendation
```

## Properties

- `id` — `string` (required): The unique identifier of the recommendation to act on.
- `promotedObjectId` — `string` (required): The ID of the promoted object. For `APPSTORE_APP`, this is the app Adam ID. For `BUSINESS_BRAND`, this is the brand ID.
- `promotedObjectType` — `string` (required): The type of the promoted object.
- `appliedDailyBudget` — `RecommendationMoney`: The daily budget amount to apply. Overrides `suggestedDailyBudgetAmount` if provided. Ignored on dismiss. See [Money](recommendationmoney.md).
- `historyId` — `string`: Optional reference to a prior history record.

<a id="Discussion"></a>

## Discussion

The `ApplyDailyCapRecommendation` object is the request body for applying or dismissing a daily budget recommendation.

<a id="Example"></a>

### Example

```json
{
  "id": "rec-budget-001",
  "promotedObjectId": "123456",
  "promotedObjectType": "APPSTORE_APP",
  "appliedDailyBudget": {
    "amount": "500.00",
    "currency": "USD"
  },
  "historyId": "hist-789012"
}
```

## See Also

- [TargetCpaRecommendation](targetcparecommendation.md): A target CPA recommendation for a campaign using a Maximize Conversions bid strategy.
- [TargetCpaRecommendationHistory](targetcparecommendationhistory.md): History record created when a target CPA recommendation is applied or dismissed.
- [DailyCapRecommendation](dailycaprecommendation.md): A daily budget recommendation for a campaign that’s frequently hitting its spending ceiling.
- [DailyCapRecommendationHistory](dailycaprecommendationhistory.md): History record created when you apply or dismiss a daily budget recommendation.
- [ApplyTargetCpaRecommendation](applytargetcparecommendation.md): Request object for applying or dismissing a target CPA recommendation.
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
