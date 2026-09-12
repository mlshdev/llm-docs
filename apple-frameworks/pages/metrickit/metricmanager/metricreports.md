> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/metricreports](https://developer.apple.com/documentation/metrickit/metricmanager/metricreports)

# metricReports

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

An asynchronous sequence that delivers daily metric reports.

## Declaration

```swift
final var metricReports: some AsyncSequence<MetricReport, Never> { get }
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Iterate `metricReports` in a long-lived `Task` to receive [MetricReport](../metricreport.md) values as they become available. The sequence never throws.

```swift
Task {
    for await report in manager.metricReports {
        process(report)
    }
}
```

## See Also

### Reports

- [diagnosticReports](diagnosticreports.md): An asynchronous sequence that delivers diagnostic reports as individual events.
