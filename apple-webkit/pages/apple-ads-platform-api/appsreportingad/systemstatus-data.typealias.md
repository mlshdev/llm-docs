> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingad/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingad/systemstatus-data.typealias)

# AppsReportingAd.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state of the ad at report time.

## Declaration

```
string AppsReportingAd.SystemStatus
```

## Possible Values

- `RUNNING`: The ad is active and eligible to serve.
- `NOT_RUNNING`: The system has identified a condition preventing the ad from delivering.

<a id="Discussion"></a>

## Discussion

This reflects delivery conditions evaluated at the moment the report was generated, separate from the advertiser-set [AppsReportingAd.Status](status-data.typealias.md) reported alongside it.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdSystemStatus](../adsystemstatus.md) for additional context.
