> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/campaignupdate/status-data.typealias

# CampaignUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable run state for a campaign.

## Declaration

```
string CampaignUpdate.Status
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The advertiser paused the campaign. No ads serve until the status changes to `ENABLED`.

<a id="Discussion"></a>

## Discussion

Send `status: PAUSED` to stop an existing campaign from competing for delivery, or `ENABLED` to resume it.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

See [CampaignStatus](../campaignstatus.md) for additional context.
