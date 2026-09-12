> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/environment-swift.struct/hasexceededstatelimit](https://developer.apple.com/documentation/metrickit/metricreport/environment-swift.struct/hasexceededstatelimit)

# hasExceededStateLimit

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean indicating if the number of emitted states exceeded the aggregation limit.

## Declaration

```swift
let hasExceededStateLimit: Bool
```

## Mentioned In

- [Analyzing app performance with MetricKit](../../analyzing-app-performance-with-metrickit.md)
- [Monitoring app performance with MetricKit](../../monitoring-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

When `true`, some states may have been omitted from the report. Metrics associated with the omitted states will be included in the full day interval entry along with non-state-aggregated metrics.

## See Also

### System state

- [lowPowerModeEnabled](lowpowermodeenabled.md): Indicates whether low power mode is enabled on the device.
