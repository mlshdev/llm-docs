> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcreative/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcreative/systemstatus-data.typealias)

# BrandsReportingCreative.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated validation state of the creative at report time.

## Declaration

```
string BrandsReportingCreative.SystemStatus
```

## Possible Values

- `VALID`: The creative has passed all system validation checks and is ready to serve. The creative may still be subject to additional review.
- `INVALID`: The creative has failed one or more validation checks. Check `systemStatusReasons` for the cause.
- `PENDING`: The creative is undergoing system validation, policy determination, or waiting for asset CDN availability.

<a id="Discussion"></a>

## Discussion

A `VALID` result at report time only confirms system checks had passed as of that snapshot; Apple’s additional creative review can still affect current delivery.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "VALID"
}
```

See [CreativeSystemStatus](../creativesystemstatus.md) for additional context.
