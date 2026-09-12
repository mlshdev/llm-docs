> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcampaign/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcampaign/status-data.typealias)

# BrandsReportingCampaign.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status of the campaign at report time.

## Declaration

```
string BrandsReportingCampaign.Status
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The campaign is paused by the advertiser. No ads will serve until the status is changed to `ENABLED`.

<a id="Discussion"></a>

## Discussion

This captures the advertiser-set status as of the report’s generation, separate from the system-evaluated [BrandsReportingCampaign.SystemStatus](systemstatus-data.typealias.md) alongside it.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [CampaignStatus](../campaignstatus.md) for additional context.
