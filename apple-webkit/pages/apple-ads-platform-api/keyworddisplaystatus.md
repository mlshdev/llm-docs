> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keyworddisplaystatus](https://developer.apple.com/documentation/apple-ads-platform-api/keyworddisplaystatus)

# KeywordDisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Rolled-up delivery state for a keyword, combining advertiser settings and parent entity status.

## Declaration

```
string KeywordDisplayStatus
```

## Possible Values

- `RUNNING`: The keyword is actively participating in ad auctions.
- `PAUSED`: The keyword has been paused by the advertiser.
- `DELETED`: The keyword has been soft-deleted.
- `AD_GROUP_ON_HOLD`: The keyword’s parent ad group is on hold, stopping keyword delivery.
- `CAMPAIGN_ON_HOLD`: The keyword’s parent campaign is on hold, stopping keyword delivery.

<a id="Discussion"></a>

## Discussion

The `KeywordDisplayStatus` is a read-only derived field on [Keyword](keyword.md) that summarizes why a keyword is or isn’t participating in auctions. It accounts for the keyword’s own status and the status of its parent ad group and campaign. Use this field when displaying keyword health in a UI.

## See Also

- [KeywordStatus](keywordstatus.md): Enumeration of advertiser-configurable serving states for a keyword.
- [KeywordMatchType](keywordmatchtype.md): The matching behavior used to compare a keyword against user search queries.
- [NegativeKeywordStatus](negativekeywordstatus.md): Advertiser-configurable active state for a negative keyword.
