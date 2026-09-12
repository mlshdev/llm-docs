> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaign/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/campaign/systemstatus-data.typealias)

# Campaign.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state indicating whether a campaign is currently running.

## Declaration

```
string Campaign.SystemStatus
```

## Possible Values

- `RUNNING`: The campaign is actively delivering ads.
- `NOT_RUNNING`: The campaign is not currently delivering. Check `systemStatusReasons` for the cause.

<a id="Discussion"></a>

## Discussion

This status reflects the campaign specifically, separate from the advertiser-set [Campaign.Status](status-data.typealias.md) and the system status of ad groups within it.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [CampaignSystemStatus](../campaignsystemstatus.md) for additional context.
