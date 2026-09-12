> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingad/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingad/status-data.typealias)

# BrandsReportingAd.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status of the ad at report time.

## Declaration

```
string BrandsReportingAd.Status
```

## Possible Values

- `ENABLED`: The ad is set to run and can participate in auctions.
- `PAUSED`: The ad is paused by the advertiser and doesn’t participate in auctions.

<a id="Discussion"></a>

## Discussion

This reflects whether the advertiser had the ad set to run as of the report’s generation, distinct from the system-evaluated [BrandsReportingAd.SystemStatus](systemstatus-data.typealias.md) reported alongside it.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdStatus](../adstatus.md) for additional context.
