> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingadgroup/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingadgroup/status-data.typealias)

# AppsReportingAdGroup.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving state of the ad group at report time.

## Declaration

```
string AppsReportingAdGroup.Status
```

## Possible Values

- `ENABLED`: The ad group is active and eligible to serve ads.
- `PAUSED`: The ad group is paused and won’t serve ads.

<a id="Discussion"></a>

## Discussion

This captures the advertiser-set status as of the report’s generation, separate from the system-evaluated [AppsReportingAdGroup.SystemStatus](systemstatus-data.typealias.md) reported alongside it.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdGroupStatus](../adgroupstatus.md) for additional context.
