> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationqueryphrasesuggestionresponse](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationqueryphrasesuggestionresponse)

# RecommendationQueryPhraseSuggestionResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.

## Declaration

```
object RecommendationQueryPhraseSuggestionResponse
```

## Properties

- `result` — `[PhraseSuggestion]`: The suggested phrases matching the query. Array of [PhraseSuggestion](phrasesuggestion.md). Read-only.
- `pagination` — `RecommendationResponsePagination`: Pagination metadata for the result set. See [ResponsePagination](recommendationresponsepagination.md). Read-only.
- `error` — `RecommendationResponseError`: Error details when the request fails. Absent on success. See [ResponseError](recommendationresponseerror.md). Read-only.

## See Also

- [KeywordSuggestion](keywordsuggestion.md): A keyword suggestion returned by the keyword suggestions endpoint.
- [PhraseSuggestion](phrasesuggestion.md): A phrase suggestion returned by the phrase suggestions endpoint.
- [CategorySuggestion](categorysuggestion.md): A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [TargetCpaSuggestion](targetcpasuggestion.md): A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.
- [RecommendationQueryTargetCpaSuggestionResponse](recommendationquerytargetcpasuggestionresponse.md): Response envelope returned by the Target CPA suggestions endpoint.
