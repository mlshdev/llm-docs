> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordcreate/matchtype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/keywordcreate/matchtype-data.typealias)

# KeywordCreate.MatchType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The matching behavior to use when creating this keyword.

## Declaration

```
string KeywordCreate.MatchType
```

## Possible Values

- `EXACT`: (App Store) Matches only the exact keyword term. Supported for negative keywords.
- `BROAD`: (App Store) Matches the keyword term and close variants, including plurals and misspellings. Supported for negative keywords.
- `PHRASE`: (Apple Maps) Matches the keyword and close variants within Maps search, allowing flexibility while staying focused on the search intent. Supported for negative keywords on Maps.
- `CATEGORY`: (Apple Maps keywords only) Matches user searches to a Maps business category. Use category identifiers from the Query Business Categories endpoint (for example, `dining.restaurant`, `shopping.clothing`). Does not match app categories. Not supported for negative keywords.

<a id="Discussion"></a>

## Discussion

Choosing `CATEGORY` restricts the keyword to Apple Maps business-category matching and rules out combining it with App Store-only options like `EXACT` or `BROAD`.

<a id="Example"></a>

### Example

```json
{
  "matchType": "EXACT"
}
```

See [KeywordMatchType](../keywordmatchtype.md) for additional context.
