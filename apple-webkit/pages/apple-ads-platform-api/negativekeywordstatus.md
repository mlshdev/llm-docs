> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordstatus](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordstatus)

# NegativeKeywordStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable active state for a negative keyword.

## Declaration

```
string NegativeKeywordStatus
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

## See Also

- [KeywordStatus](keywordstatus.md): Enumeration of advertiser-configurable serving states for a keyword.
- [KeywordMatchType](keywordmatchtype.md): The matching behavior used to compare a keyword against user search queries.
- [KeywordDisplayStatus](keyworddisplaystatus.md): Rolled-up delivery state for a keyword, combining advertiser settings and parent entity status.
