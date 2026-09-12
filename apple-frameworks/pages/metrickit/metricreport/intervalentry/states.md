> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/intervalentry/states](https://developer.apple.com/documentation/metrickit/metricreport/intervalentry/states)

# states

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

All states that were active during this collection interval.

## Declaration

```swift
let states: [MetricManager.ReportedState]
```

## Mentioned In

- [Monitoring app performance with MetricKit](../../monitoring-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

This array contains all the StateReporting states that occurred within the interval. The array may be empty if no StateReporting context was active during the interval.

## See Also

### Interval details

- [duration](duration.md): The duration of this collection interval.
