> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/targetcpasuggestion](https://developer.apple.com/documentation/apple-ads-platform-api/targetcpasuggestion)

# TargetCpaSuggestion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A suggested Target CPA for a new Maximize Conversions campaign, based on historical performance and market conditions.

## Declaration

```
object TargetCpaSuggestion
```

## Properties

- `suggestedTargetCPA` — `RecommendationMoney`: The suggested Target CPA. Calculated as the maximum tap-install CPI across the evaluated countries or regions that have at least 10 installs in the last 28 days, scoped to the app’s category. See [Money](recommendationmoney.md). Read-only.
- `countryOrRegion` — `[string]`: The country or region codes that this suggestion applies to. Read-only.
- `promotedObjectId` — `string`: The ID of the promoted object (app or brand) this suggestion was calculated for. Read-only.
- `appCategory` — `string`: The App Store category used to scope the suggestion’s performance data. Read-only.

<a id="Discussion"></a>

## Discussion

The `TargetCpaSuggestion` object represents the recommended cost-per-acquisition goal returned by the Target CPA suggestions endpoint. Use this value as the starting Target CPA when creating a new [Campaigns Endpoints](campaigns-endpoints.md) campaign.

<a id="Example"></a>

### Example

```json
{
  "suggestedTargetCPA": {
    "amount": "3.75",
    "currency": "USD"
  },
  "countryOrRegion": [
    "US",
    "GB"
  ],
  "promotedObjectId": "555666777",
  "appCategory": "Games"
}
```

## See Also

- [KeywordSuggestion](keywordsuggestion.md): A keyword suggestion returned by the keyword suggestions endpoint.
- [PhraseSuggestion](phrasesuggestion.md): A phrase suggestion returned by the phrase suggestions endpoint.
- [CategorySuggestion](categorysuggestion.md): A category suggestion returned by the category suggestions endpoint, for either an App Store app or an Apple Maps brand.
- [RecommendationQueryKeywordSuggestionResponse](recommendationquerykeywordsuggestionresponse.md): Response envelope returned by the keyword suggestions query endpoint, containing suggested keywords.
- [RecommendationQueryPhraseSuggestionResponse](recommendationqueryphrasesuggestionresponse.md): Response envelope returned by the phrase suggestions query endpoint, containing suggested phrases.
- [RecommendationQueryCategorySuggestionResponse](recommendationquerycategorysuggestionresponse.md): Response envelope returned by the category suggestions query endpoint, containing matched category suggestions.
- [RecommendationQueryTargetCpaSuggestionResponse](recommendationquerytargetcpasuggestionresponse.md): Response envelope returned by the Target CPA suggestions endpoint.
