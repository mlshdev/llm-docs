> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/ad/displaystatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/ad/displaystatus-data.typealias)

# Ad.DisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Rolled-up delivery state for an ad, combining advertiser settings and system conditions into a single user-facing label.

## Declaration

```
string Ad.DisplayStatus
```

## Possible Values

- `RUNNING`: The ad is actively delivering.
- `PAUSED`: The advertiser paused the ad.
- `ON_HOLD`: A system or account condition stops delivery.
- `LIMITED`: The ad is serving but at reduced capacity.
- `PROCESSING`: The system is processing the ad after a recent creation or update.
- `DELETED`: The advertiser soft-deleted the ad.
- `AD_GROUP_ON_HOLD`: Delivery stops because the parent ad group is on hold.
- `CAMPAIGN_ON_HOLD`: Delivery stops because the parent campaign is on hold.

<a id="Discussion"></a>

## Discussion

Because delivery depends on the full hierarchy, an ad can show `AD_GROUP_ON_HOLD` or `CAMPAIGN_ON_HOLD` even when its own settings are otherwise ready to serve.

<a id="Example"></a>

### Example

```json
{
  "displayStatus": "RUNNING"
}
```

See [AdDisplayStatus](../addisplaystatus.md) for additional context.
