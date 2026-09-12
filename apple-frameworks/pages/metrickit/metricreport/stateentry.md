> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/stateentry](https://developer.apple.com/documentation/metrickit/metricreport/stateentry)

# MetricReport.StateEntry

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric entry scoped to a specific recorded app state.

## Declaration

```swift
struct StateEntry
```

<a id="Discussion"></a>

## Discussion

`StateEntry` is only present when state reporting is enabled via [init(enabledStateReportingDomains:)](../metricmanager/init%28enabledstatereportingdomains_%29.md). Access state entries through [stateEntries](stateentries.md).

Each entry corresponds to one [MetricManager.ReportedState](../metricmanager/reportedstate.md) and contains the metric values aggregated while the app was in that state. Only a subset of metrics appear in state entries, including hang time, hitch time, app termination counts, signpost intervals, location activity time, and app runtime metrics.

## Topics

### State details

- [state](stateentry/state.md): StateReporting information during which this entry was collected.

### Metric values

- [values](stateentry/values.md): The metric values for this entry.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
