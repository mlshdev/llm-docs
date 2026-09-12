> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeyword/matchtype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeyword/matchtype-data.typealias)

# NegativeKeyword.MatchType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The matching behavior used to compare this negative keyword against user search queries.

## Declaration

```
string NegativeKeyword.MatchType
```

## Possible Values

- `EXACT`: (App Store) Matches only the exact keyword term. Supported for negative keywords.
- `BROAD`: (App Store) Matches the keyword term and close variants, including plurals and misspellings. Supported for negative keywords.
- `PHRASE`: (Apple Maps) Matches the keyword and close variants within Maps search, allowing flexibility while staying focused on the search intent. Supported for negative keywords on Maps.
- `CATEGORY`: (Apple Maps keywords only) Matches user searches to a Maps business category. Use category identifiers from the Query Business Categories endpoint (for example, `dining.restaurant`, `shopping.clothing`). Does not match app categories. Not supported for negative keywords.

<a id="Discussion"></a>

## Discussion

Unlike positive keywords, negative keywords can use `EXACT`, `BROAD`, or `PHRASE`, but not `CATEGORY` matching.

<a id="Example"></a>

### Example

```json
{
  "matchType": "BROAD"
}
```

See [KeywordMatchType](../keywordmatchtype.md) for additional context.
