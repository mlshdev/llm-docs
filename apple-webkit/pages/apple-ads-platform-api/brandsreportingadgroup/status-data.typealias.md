> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingadgroup/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingadgroup/status-data.typealias)

# BrandsReportingAdGroup.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status of the ad group at report time.

## Declaration

```
string BrandsReportingAdGroup.Status
```

## Possible Values

- `ENABLED`: The ad group is active and eligible to serve ads.
- `PAUSED`: The ad group is paused and won’t serve ads.

<a id="Discussion"></a>

## Discussion

This reflects whether the advertiser had the ad group set to run as of the report’s generation, distinct from the system-evaluated [BrandsReportingAdGroup.SystemStatus](systemstatus-data.typealias.md) reported alongside it.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdGroupStatus](../adgroupstatus.md) for additional context.
