> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/environment-swift.property](https://developer.apple.com/documentation/metrickit/metricreport/environment-swift.property)

# environment

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Environment context for the device and app.

## Declaration

```swift
let environment: MetricReport.Environment?
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

This is `nil` when device or app metadata cannot be determined during metric aggregation.

## See Also

### Report details

- [timeRange](timerange.md): The date interval this report covers.
