> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroup/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroup/systemstatus-data.typealias)

# AdGroup.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status reflecting whether an ad group is actively serving.

## Declaration

```
string AdGroup.SystemStatus
```

## Possible Values

- `RUNNING`: The ad group is active and serving ads.
- `NOT_RUNNING`: The ad group is not serving ads. Check `systemStatusReasons` for the specific cause.

<a id="Discussion"></a>

## Discussion

This status reflects the ad group specifically, separate from the advertiser-set [AdGroup.Status](status-data.typealias.md) and the system status of ads within it.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdGroupSystemStatus](../adgroupsystemstatus.md) for additional context.
