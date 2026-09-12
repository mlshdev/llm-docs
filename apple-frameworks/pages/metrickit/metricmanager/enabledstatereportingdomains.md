> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/enabledstatereportingdomains](https://developer.apple.com/documentation/metrickit/metricmanager/enabledstatereportingdomains)

# enabledStateReportingDomains

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

StateReporting domains enabled for metrics aggregation

## Declaration

```swift
final var enabledStateReportingDomains: Set<StateReportingDomain> { get }
```

<a id="discussion"></a>

## Discussion

When set, metrics will be delivered with StateReporting stable state context, broken down by the application states recorded in the specified domains. This manager will receive metric entries matching the enabled domains as well as non-state-aggregated metric entries.

<a id="Example"></a>

## Example

```swift
let manager = MetricManager(enabledStateReportingDomains: [
    "com.myapp.gameplay",
    "com.myapp.experiments"
])

// Emit states using StateReporting directly
let reporter = StateReporter.reporter(for: "com.myapp.gameplay", stableState: GameState.self)

for await report in manager.metricReports {
    for entry in report.stateEntries {
        let domain = entry.state.domain
    }

    // Full day aggregate
    let fullDay = report.intervalEntries.fullDayEntry
}
```

## See Also

### Initialization

- [init()](init%28%29.md): Creates a new `MetricManager` instance without state reporting domains.
- [init(enabledStateReportingDomains:)](init%28enabledstatereportingdomains_%29.md): Creates a new `MetricManager` instance with state reporting domains enabled for metrics aggregation.
