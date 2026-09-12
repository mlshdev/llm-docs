> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingad/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingad/status-data.typealias)

# AppsReportingAd.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving state of the ad at report time.

## Declaration

```
string AppsReportingAd.Status
```

## Possible Values

- `ENABLED`: The ad is set to run and can participate in auctions.
- `PAUSED`: The ad is paused by the advertiser and doesn’t participate in auctions.

<a id="Discussion"></a>

## Discussion

This captures the advertiser’s run-or-pause choice as of the report’s generation, separate from the system-evaluated [AppsReportingAd.SystemStatus](systemstatus-data.typealias.md) reported in the same row.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdStatus](../adstatus.md) for additional context.
