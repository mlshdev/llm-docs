> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcampaign/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcampaign/systemstatus-data.typealias)

# BrandsReportingCampaign.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state of the campaign at report time.

## Declaration

```
string BrandsReportingCampaign.SystemStatus
```

## Possible Values

- `RUNNING`: The campaign is actively delivering ads.
- `NOT_RUNNING`: The campaign isn’t currently delivering. Check `systemStatusReasons` for the cause.

<a id="Discussion"></a>

## Discussion

This reflects delivery conditions evaluated at the moment the report was generated, separate from the advertiser-set [BrandsReportingCampaign.Status](status-data.typealias.md) reported alongside it.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [CampaignSystemStatus](../campaignsystemstatus.md) for additional context.
