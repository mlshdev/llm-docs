> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordmatchtype](https://developer.apple.com/documentation/apple-ads-platform-api/keywordmatchtype)

# KeywordMatchType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The matching behavior used to compare a keyword against user search queries.

## Declaration

```
string KeywordMatchType
```

## Possible Values

- `EXACT`: (App Store) Matches only the exact keyword term. Supported for negative keywords.
- `BROAD`: (App Store) Matches the keyword term and close variants, including plurals and misspellings. Supported for negative keywords.
- `PHRASE`: (Apple Maps) Matches the keyword and close variants within Maps search, allowing flexibility while staying focused on the search intent. Supported for negative keywords on Maps.
- `CATEGORY`: (Apple Maps keywords only) Matches user searches to a Maps business category. Use category identifiers from the Query Business Categories endpoint (for example, `dining.restaurant`, `shopping.clothing`). Does not match app categories. Not supported for negative keywords.

<a id="Discussion"></a>

## Discussion

Keywords apply only to App Store campaigns using the Search results placement. Today tab, Search tab, and Product pages campaigns use audience targeting instead.

## See Also

- [KeywordStatus](keywordstatus.md): Enumeration of advertiser-configurable serving states for a keyword.
- [KeywordDisplayStatus](keyworddisplaystatus.md): Rolled-up delivery state for a keyword, combining advertiser settings and parent entity status.
- [NegativeKeywordStatus](negativekeywordstatus.md): Advertiser-configurable active state for a negative keyword.
