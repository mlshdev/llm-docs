> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaign/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/campaign/status-data.typealias)

# Campaign.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable run state for a campaign.

## Declaration

```
string Campaign.Status
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The advertiser paused the campaign. No ads serve until the status changes to `ENABLED`.

<a id="Discussion"></a>

## Discussion

This field directly controls auction eligibility for the campaign, independent of the system-computed [Campaign.SystemStatus](systemstatus-data.typealias.md).

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [CampaignStatus](../campaignstatus.md) for additional context.
