> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/init()](https://developer.apple.com/documentation/metrickit/metricmanager/init())

# init()

**Framework:** MetricKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a new `MetricManager` instance without state reporting domains.

## Declaration

```swift
convenience init()
```

<a id="Discussion"></a>

## Discussion

Use this initializer when you only need interval-based metric data and diagnostic reports, without per-state metrics. Hold the returned instance in a property for as long as you need reports:

```swift
let manager = MetricManager()
```

To receive metrics segmented by app state, use [init(enabledStateReportingDomains:)](init%28enabledstatereportingdomains_%29.md) instead.

## See Also

### Initialization

- [init(enabledStateReportingDomains:)](init%28enabledstatereportingdomains_%29.md): Creates a new `MetricManager` instance with state reporting domains enabled for metrics aggregation.
- [enabledStateReportingDomains](enabledstatereportingdomains.md): StateReporting domains enabled for metrics aggregation
