> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/diagnosticreports](https://developer.apple.com/documentation/metrickit/metricmanager/diagnosticreports)

# diagnosticReports

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An asynchronous sequence that delivers diagnostic reports as individual events.

## Declaration

```swift
final var diagnosticReports: some AsyncSequence<DiagnosticReport, Never> { get }
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Iterate `diagnosticReports` in a long-lived `Task` to receive [DiagnosticReport](../diagnosticreport.md) values. Each iteration yields a single diagnostic event, such as a crash, hang, or CPU exception. The sequence never throws.

```swift
Task {
    for await report in manager.diagnosticReports {
        switch report.result {
        case .crash(let diagnostic): handleCrash(diagnostic)
        case .hang(let diagnostic): handleHang(diagnostic)
        @unknown default: break
        }
    }
}
```

## See Also

### Reports

- [metricReports](metricreports.md): An asynchronous sequence that delivers daily metric reports.
