> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/ad/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/ad/systemstatus-data.typealias)

# Ad.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-computed delivery status of an ad.

## Declaration

```
string Ad.SystemStatus
```

## Possible Values

- `RUNNING`: The ad is active and eligible to serve.
- `NOT_RUNNING`: The system has identified a condition preventing the ad from delivering.

<a id="Discussion"></a>

## Discussion

The `SystemStatus` reports whether the platform currently allows the ad to serve, distinct from the advertiser-set [Ad.Status](status-data.typealias.md).

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdSystemStatus](../adsystemstatus.md) for additional context.
