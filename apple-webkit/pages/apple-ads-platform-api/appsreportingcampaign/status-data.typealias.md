> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcampaign/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcampaign/status-data.typealias)

# AppsReportingCampaign.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable run state of the campaign at report time.

## Declaration

```
string AppsReportingCampaign.Status
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The advertiser has paused the campaign. No ads serve until the status changes to `ENABLED`.

<a id="Discussion"></a>

## Discussion

This captures the advertiser-set run state as of the report’s generation, separate from the system-evaluated [AppsReportingCampaign.SystemStatus](systemstatus-data.typealias.md) alongside it.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [CampaignStatus](../campaignstatus.md) for additional context.
