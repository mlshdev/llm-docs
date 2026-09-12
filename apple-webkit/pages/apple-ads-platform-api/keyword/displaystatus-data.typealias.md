> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keyword/displaystatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/keyword/displaystatus-data.typealias)

# Keyword.DisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Rolled-up delivery state for a keyword, combining advertiser settings and parent entity status.

## Declaration

```
string Keyword.DisplayStatus
```

## Possible Values

- `RUNNING`: The keyword is actively participating in ad auctions.
- `PAUSED`: The keyword has been paused by the advertiser.
- `DELETED`: The keyword has been soft-deleted.
- `AD_GROUP_ON_HOLD`: The keyword’s parent ad group is on hold, stopping keyword delivery.
- `CAMPAIGN_ON_HOLD`: The keyword’s parent campaign is on hold, stopping keyword delivery.

<a id="Discussion"></a>

## Discussion

Because it rolls up the full hierarchy, a keyword can show `AD_GROUP_ON_HOLD` or `CAMPAIGN_ON_HOLD` even when its own status is otherwise fine.

<a id="Example"></a>

### Example

```json
{
  "displayStatus": "RUNNING"
}
```

See [KeywordDisplayStatus](../keyworddisplaystatus.md) for additional context.
