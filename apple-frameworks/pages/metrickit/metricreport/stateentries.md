> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/stateentries](https://developer.apple.com/documentation/metrickit/metricreport/stateentries)

# stateEntries

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The state entries in this metric report, populated when state reporting is enabled.

## Declaration

```swift
let stateEntries: [MetricReport.StateEntry]
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)
- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`stateEntries` is only populated when the [MetricManager](../metricmanager.md) was initialized with [init(enabledStateReportingDomains:)](../metricmanager/init%28enabledstatereportingdomains_%29.md). Each [MetricReport.StateEntry](stateentry.md) contains metric values aggregated while the app was in a specific state, scoped to a specific [MetricManager.ReportedState](../metricmanager/reportedstate.md).

Only a subset of metrics appear in state entries, including hang time, hitch time, app termination counts, signpost intervals, location activity time, and app runtime metrics. CPU time, memory, network, disk I/O, GPU, app launch, and disk space metrics appear only in [intervalEntries](intervalentries.md).

Use `byStateReportingDomain` on the collection to group entries by domain:

```swift
let byDomain = report.stateEntries.byStateReportingDomain
if let sessionEntries = byDomain[StateReportingDomain(rawValue: "com.example.app.session")] {
    for entry in sessionEntries {
        print(entry.state.label, entry.values)
    }
}
```

## See Also

### Metric data

- [intervalEntries](intervalentries.md): The interval entries in this metric report, including the full-day aggregate.
- [encodingFormatKey](encodingformatkey.md): A `CodingUserInfoKey` for selecting the JSON encoding format of a metric report.
- [MetricReport.EncodingFormat](encodingformat.md): A value that controls the JSON structure used when encoding a metric report.
