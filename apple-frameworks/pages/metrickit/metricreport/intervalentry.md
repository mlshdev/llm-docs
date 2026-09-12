> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/intervalentry](https://developer.apple.com/documentation/metrickit/metricreport/intervalentry)

# MetricReport.IntervalEntry

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric entry that covers a specific time interval.

## Declaration

```swift
struct IntervalEntry
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`IntervalEntry` contains all metric values for a given time interval. Access it through [intervalEntries](intervalentries.md).

Use the [fullDayEntry](https://developer.apple.com/documentation/swift/array/fulldayentry) convenience property on the collection to retrieve the entry with the full 24-hour aggregate:

```swift
let entry = report.intervalEntries.fullDayEntry
for result in entry.values {
    switch result {
    case .cpuTime(let metric): process(metric)
    @unknown default: break
    }
}
```

When you enable state reporting, `intervalEntries` contains shorter sub-interval entries in addition to the full-day entry.

Each `IntervalEntry` provides a `duration` but no start timestamp, so you can’t associate an entry with a specific time of day. To determine when the overall reporting period occurred, use `timeRange` on the parent [MetricReport](../metricreport.md).

## Topics

### Interval details

- [duration](intervalentry/duration.md): The duration of this collection interval.
- [states](intervalentry/states.md): All states that were active during this collection interval.

### Metric values

- [values](intervalentry/values.md): The metric values for this entry.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
