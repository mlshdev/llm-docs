> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/categorysuggestion](https://developer.apple.com/documentation/apple-ads-platform-api/categorysuggestion)

# CategorySuggestion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.

## Declaration

```
object CategorySuggestion
```

## Properties

- `category` — `string`: The category name. For App Store apps, an app category (for example, `Productivity`, `Games`). For Apple Maps brands, the category associated with the brand (for example, `Restaurants`, `Retail`). Read-only.
- `popularity` — `int32`: Relative popularity score for this category. Read-only.

<a id="Discussion"></a>

## Discussion

The `CategorySuggestion` object represents a single category suggestion for targeting.

To discover high-value categories to add as targeting criteria, use category suggestions. For App Store app campaigns, results reflect app categories. For Apple Maps campaigns, results reflect the categories associated with the brand. Sort results by `popularity` to prioritize the most impactful categories.

<a id="Example"></a>

### Example

```json
{
  "category": "Productivity",
  "popularity": 90
}
```

## See Also

- [KeywordSuggestion](keywordsuggestion.md): A keyword suggestion returned by the keyword suggestions endpoint.
- [PhraseSuggestion](phrasesuggestion.md): A phrase suggestion returned by the phrase suggestions endpoint.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryPhraseSuggestionResponse](recommendationqueryphrasesuggestionresponse.md): Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [TargetCpaSuggestion](targetcpasuggestion.md): A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.
- [RecommendationQueryTargetCpaSuggestionResponse](recommendationquerytargetcpasuggestionresponse.md): Response envelope returned by the Target CPA suggestions endpoint.
