> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationresponseerror](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationresponseerror)

# ResponseError

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Error information returned in the response body when a Recommendations or Suggestions request fails.

## Declaration

```
object RecommendationResponseError
```

## Properties

- `code` — `string`: A machine-readable error code identifying the failure type, useful for programmatic error handling. Read-only.
- `message` — `string`: A human-readable summary of what went wrong. Read-only.
- `details` — `[RecommendationResponseErrorDetail]`: An array of granular error detail objects providing field-level context, one per issue. See [ResponseErrorDetail](recommendationresponseerrordetail.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `ResponseError` object is embedded in the `error` field of the response envelope when a Recommendations or Suggestions request fails.

When the error involves multiple field-level issues (for example, validation failures on several request fields), inspect the `details` array to identify and correct each specific problem before retrying the request.

<a id="Example"></a>

### Example

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid query request",
  "details": [
    {
      "code": "MISSING_REQUIRED_FILTER",
      "message": "Filter 'promotedObjectId' is required"
    }
  ]
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
- [ResponseErrorDetail](recommendationresponseerrordetail.md): Granular error detail for a single field or condition within a failed Recommendations or Suggestions request.
- [ResponsePagination](recommendationresponsepagination.md): Pagination metadata returned in list responses from Recommendations and Suggestions endpoints.
- [Money](recommendationmoney.md): A monetary amount with currency used throughout the Recommendations and Suggestions APIs.
- [RecommendationApplyDailyBudgetResponse](recommendationapplydailybudgetresponse.md): Response envelope returned when applying or dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationApplyTargetCpaResponse](recommendationapplytargetcparesponse.md): Response envelope returned when applying or dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationBidStrategy](recommendationbidstrategy.md): Bid strategy configuration (type, goal, and amount) associated with a recommendation.
- [RecommendationDismissDailyBudgetResponse](recommendationdismissdailybudgetresponse.md): Response envelope returned when dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationDismissTargetCpaResponse](recommendationdismisstargetcparesponse.md): Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).
