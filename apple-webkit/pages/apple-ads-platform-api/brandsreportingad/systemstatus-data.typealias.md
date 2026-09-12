> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingad/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingad/systemstatus-data.typealias)

# BrandsReportingAd.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state of the ad at report time.

## Declaration

```
string BrandsReportingAd.SystemStatus
```

## Possible Values

- `RUNNING`: The ad is active and eligible to serve.
- `NOT_RUNNING`: The system has identified a condition preventing the ad from delivering.

<a id="Discussion"></a>

## Discussion

This reflects delivery conditions evaluated at the moment the report was generated, which may differ from the ad’s current live status.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdSystemStatus](../adsystemstatus.md) for additional context.
