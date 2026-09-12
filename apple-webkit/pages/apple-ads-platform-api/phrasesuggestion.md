> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/phrasesuggestion](https://developer.apple.com/documentation/apple-ads-platform-api/phrasesuggestion)

# PhraseSuggestion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A phrase suggestion returned by the phrase suggestions endpoint.

## Declaration

```
object PhraseSuggestion
```

## Properties

- `phrase` — `string`: The suggested phrase text. Read-only.
- `popularity` — `int32`: Relative popularity score for this phrase, indicating how frequently the phrase appears in user searches. Read-only.

<a id="Discussion"></a>

## Discussion

The `PhraseSuggestion` object represents a phrase suggestion for use as a keyword targeting input.

Phrase suggestions are similar to keyword suggestions but may reflect multi-word user queries or longer-tail search patterns. Phrase suggestions help you discover targeting opportunities beyond single-word keywords, particularly for apps with specific use cases or niche audiences.

<a id="Example"></a>

### Example

```json
{
  "phrase": "best productivity apps for teams",
  "popularity": 82
}
```

## See Also

- [KeywordSuggestion](keywordsuggestion.md): A keyword suggestion returned by the keyword suggestions endpoint.
- [CategorySuggestion](categorysuggestion.md): A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryPhraseSuggestionResponse](recommendationqueryphrasesuggestionresponse.md): Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [TargetCpaSuggestion](targetcpasuggestion.md): A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.
- [RecommendationQueryTargetCpaSuggestionResponse](recommendationquerytargetcpasuggestionresponse.md): Response envelope returned by the Target CPA suggestions endpoint.
