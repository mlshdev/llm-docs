> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigncreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/campaigncreate/status-data.typealias)

# CampaignCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable run state for a campaign.

## Declaration

```
string CampaignCreate.Status
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The advertiser paused the campaign. No ads serve until the status changes to `ENABLED`.

<a id="Discussion"></a>

## Discussion

Include `status` in the create request to determine whether the new campaign begins competing for delivery immediately or starts paused.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [CampaignStatus](../campaignstatus.md) for additional context.
