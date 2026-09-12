> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationquerytargetcpasuggestionresponse](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationquerytargetcpasuggestionresponse)

# RecommendationQueryTargetCpaSuggestionResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response envelope returned by the Target CPA suggestions endpoint.

## Declaration

```
object RecommendationQueryTargetCpaSuggestionResponse
```

## Properties

- `result` — `TargetCpaSuggestion`: The suggested Target CPA. See [TargetCpaSuggestion](targetcpasuggestion.md). Read-only.
- `pagination` — `RecommendationResponsePagination`: Pagination metadata. `null` for this endpoint, since it always returns a single result rather than a list. See [ResponsePagination](recommendationresponsepagination.md). Read-only.
- `error` — `RecommendationResponseError`: Error details when the request fails, in which case `result` is absent. Absent on success. See [ResponseError](recommendationresponseerror.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `RecommendationQueryTargetCpaSuggestionResponse` object is the top-level response body for `POST /suggestions/target-cpas/query`.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "promotedObjectId": "123456789",
    "countryOrRegion": [
      "US",
      "GB"
    ],
    "suggestedTargetCPA": {
      "amount": "1.50",
      "currency": "USD"
    },
    "appCategory": "Games"
  },
  "pagination": null
}
```

## See Also

- [KeywordSuggestion](keywordsuggestion.md): A keyword suggestion returned by the keyword suggestions endpoint.
- [PhraseSuggestion](phrasesuggestion.md): A phrase suggestion returned by the phrase suggestions endpoint.
- [CategorySuggestion](categorysuggestion.md): A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryPhraseSuggestionResponse](recommendationqueryphrasesuggestionresponse.md): Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [TargetCpaSuggestion](targetcpasuggestion.md): A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.
