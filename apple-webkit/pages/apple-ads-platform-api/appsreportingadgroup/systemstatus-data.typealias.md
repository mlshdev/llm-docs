> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingadgroup/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingadgroup/systemstatus-data.typealias)

# AppsReportingAdGroup.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state of the ad group at report time.

## Declaration

```
string AppsReportingAdGroup.SystemStatus
```

## Possible Values

- `RUNNING`: The ad group is active and serving ads.
- `NOT_RUNNING`: The ad group isn’t serving ads. Check `systemStatusReasons` for the specific cause.

<a id="Discussion"></a>

## Discussion

Like the other report-time status fields, this value is fixed at generation time and doesn’t reflect changes made afterward.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "RUNNING"
}
```

See [AdGroupSystemStatus](../adgroupsystemstatus.md) for additional context.
