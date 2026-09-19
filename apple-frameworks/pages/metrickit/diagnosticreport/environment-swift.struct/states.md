> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/diagnosticreport/environment-swift.struct/states

# states

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

All states that were active leading up to this diagnostic event.

## Declaration

```swift
let states: [MetricManager.ReportedState]
```

## Mentioned In

- [Analyzing app performance with MetricKit](../../analyzing-app-performance-with-metrickit.md)
- [Monitoring app performance with MetricKit](../../monitoring-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

This array contains all the StateReporting states that occurred before the diagnostic event. The array may be empty if no StateReporting context was active.
