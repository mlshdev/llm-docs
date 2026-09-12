> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationresponseerrordetail](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationresponseerrordetail)

# ResponseErrorDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Granular error detail for a single field or condition within a failed Recommendations or Suggestions request.

## Declaration

```
object RecommendationResponseErrorDetail
```

## Properties

- `code` — `string`: A machine-readable code identifying the specific error condition. Read-only.
- `message` — `string`: A human-readable description of the specific error. Read-only.
- `info` — `RecommendationResponseErrorDetail.Info`: Additional context that supplements the message, such as the field name, the invalid value, or acceptable alternatives. Content varies by endpoint and error type. Read-only.

<a id="Discussion"></a>

## Discussion

The `ResponseErrorDetail` provides field-level granularity for errors returned in a `ResponseError`. Each detail entry identifies one specific condition that caused the request to fail. For example, this occurs for a missing required field, an invalid value, or a constraint violation.

The `code` and `message` fields identify the nature of the issue. When `details` contains multiple entries, correct all issues before retrying. The API rejects the request atomically on the first validation pass.

<a id="Example"></a>

### Example

```json
{
  "code": "MISSING_REQUIRED_FILTER",
  "message": "Filter 'promotedObjectId' is required",
  "info": {
    "field": "promotedObjectId",
    "location": "filters"
  }
}
```

## Topics

### Dictionaries

- [RecommendationResponseErrorDetail.Info](recommendationresponseerrordetail/info-data.dictionary.md): Additional context that supplements the error message, varying by endpoint and error type.

## See Also

- [TargetCpaRecommendation](targetcparecommendation.md): A target CPA recommendation for a campaign using a Maximize Conversions bid strategy.
- [TargetCpaRecommendationHistory](targetcparecommendationhistory.md): History record created when a target CPA recommendation is applied or dismissed.
- [DailyCapRecommendation](dailycaprecommendation.md): A daily budget recommendation for a campaign that’s frequently hitting its spending ceiling.
- [DailyCapRecommendationHistory](dailycaprecommendationhistory.md): History record created when you apply or dismiss a daily budget recommendation.
- [ApplyTargetCpaRecommendation](applytargetcparecommendation.md): Request object for applying or dismissing a target CPA recommendation.
- [ApplyDailyCapRecommendation](applydailycaprecommendation.md): Request object for applying or dismissing a daily budget recommendation.
- [ResponseEnvelope](recommendationresponsebody.md): The standard response envelope for all Recommendations and Suggestions API endpoints.
- [ResponseError](recommendationresponseerror.md): Error information returned in the response body when a Recommendations or Suggestions request fails.
- [ResponsePagination](recommendationresponsepagination.md): Pagination metadata returned in list responses from Recommendations and Suggestions endpoints.
- [Money](recommendationmoney.md): A monetary amount with currency used throughout the Recommendations and Suggestions APIs.
- [RecommendationApplyDailyBudgetResponse](recommendationapplydailybudgetresponse.md): Response envelope returned when applying or dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationApplyTargetCpaResponse](recommendationapplytargetcparesponse.md): Response envelope returned when applying or dismissing a target CPA recommendation, containing the resulting history record(s).
- [RecommendationBidStrategy](recommendationbidstrategy.md): Bid strategy configuration (type, goal, and amount) associated with a recommendation.
- [RecommendationDismissDailyBudgetResponse](recommendationdismissdailybudgetresponse.md): Response envelope returned when dismissing a daily budget recommendation, containing the resulting history record(s).
- [RecommendationDismissTargetCpaResponse](recommendationdismisstargetcparesponse.md): Response envelope returned when dismissing a target CPA recommendation, containing the resulting history record(s).
