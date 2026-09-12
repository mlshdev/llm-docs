> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordsuggestion](https://developer.apple.com/documentation/apple-ads-platform-api/keywordsuggestion)

# KeywordSuggestion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A keyword suggestion returned by the keyword suggestions endpoint.

## Declaration

```
object KeywordSuggestion
```

## Properties

- `text` — `string`: The suggested keyword text. Read-only.
- `popularity` — `int32`: Relative popularity score (not an absolute volume) for this keyword across App Store countries or regions. Read-only.
  **Minimum:** `0`  
  **Maximum:** `100`

<a id="Discussion"></a>

## Discussion

A `KeywordSuggestion` represents a single keyword text suggestion for an apps campaign.

These suggestions are discovery tools. They surface keywords that may not already be in the ad group but are relevant to the app. Sort suggestions by `popularity` to add the highest-impact keywords first.

<a id="Example"></a>

### Example

```json
{
  "text": "productivity app",
  "popularity": 85
}
```

## See Also

- [PhraseSuggestion](phrasesuggestion.md): A phrase suggestion returned by the phrase suggestions endpoint.
- [CategorySuggestion](categorysuggestion.md): A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryPhraseSuggestionResponse](recommendationqueryphrasesuggestionresponse.md): Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [TargetCpaSuggestion](targetcpasuggestion.md): A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.
- [RecommendationQueryTargetCpaSuggestionResponse](recommendationquerytargetcpasuggestionresponse.md): Response envelope returned by the Target CPA suggestions endpoint.
