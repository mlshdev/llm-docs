> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingadgroup/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingadgroup/systemstatus-data.typealias)

# BrandsReportingAdGroup.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status of the ad group at report time.

## Declaration

```
string BrandsReportingAdGroup.SystemStatus
```

## Possible Values

- `RUNNING`: The ad group is active and serving ads.
- `NOT_RUNNING`: The ad group isn’t serving ads. Check `systemStatusReasons` for the specific cause.

<a id="Discussion"></a>

## Discussion

This is a point-in-time snapshot; an ad group that later changes to `NOT_RUNNING` won’t retroactively update in an already-generated report.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdGroupSystemStatus](../adgroupsystemstatus.md) for additional context.
