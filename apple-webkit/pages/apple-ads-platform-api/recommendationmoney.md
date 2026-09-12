> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationmoney](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationmoney)

# Money

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A monetary amount with currency used throughout the Recommendations and Suggestions APIs.

## Declaration

```
object RecommendationMoney
```

## Properties

- `amount` — `string` (required): The decimal amount as a string, for example `"1.50"`. Using a string preserves precision for fractional currency values and avoids floating-point precision loss. Always parse it with a decimal or fixed-precision type rather than a float.
- `currency` — `string` (required): The ISO 4217 currency code, for example `"USD"` or `"EUR"`.

<a id="Discussion"></a>

## Discussion

The `Money` object represents a monetary value in the Recommendations and Suggestions APIs.

The `currency` code corresponds to the ad account’s billing currency. All monetary fields on a given recommendation share the same currency.

> **Note**

> Don’t set amount fields with leading zeros. Use `"5.00"` rather than `"05.00"`.

<a id="Example"></a>

### Example

```json
{
  "amount": "1.50",
  "currency": "USD"
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
- [ResponsePagination](recommendationresponsepagination.md): Pagination metadata returned in list responses from Recommendations and Suggestions endpoints.
- [RecommendationApplyDailyBudgetResponse](recommendationapplydailybudgetresponse.md): Response envelope returned when applying or dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationApplyTargetCpaResponse](recommendationapplytargetcparesponse.md): Response envelope returned when applying or dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationBidStrategy](recommendationbidstrategy.md): Bid strategy configuration (type, goal, and amount) associated with a recommendation.
- [RecommendationDismissDailyBudgetResponse](recommendationdismissdailybudgetresponse.md): Response envelope returned when dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationDismissTargetCpaResponse](recommendationdismisstargetcparesponse.md): Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).
