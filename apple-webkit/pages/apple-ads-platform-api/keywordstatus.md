> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordstatus](https://developer.apple.com/documentation/apple-ads-platform-api/keywordstatus)

# KeywordStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of advertiser-configurable serving states for a keyword.

## Declaration

```
string KeywordStatus
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

## See Also

- [KeywordMatchType](keywordmatchtype.md): The matching behavior used to compare a keyword against user search queries.
- [KeywordDisplayStatus](keyworddisplaystatus.md): Rolled-up delivery state for a keyword, combining advertiser settings and parent entity status.
- [NegativeKeywordStatus](negativekeywordstatus.md): Advertiser-configurable active state for a negative keyword.
