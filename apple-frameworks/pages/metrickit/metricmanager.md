> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager](https://developer.apple.com/documentation/metrickit/metricmanager)

# MetricManager

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An object that delivers metric and diagnostic reports to your app.

## Declaration

```swift
final class MetricManager
```

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`MetricManager` is an instantiable class rather than a shared singleton. Create an instance and hold it for as long as you need reports. Share that instance across your app rather than creating multiple instances with the same domains. If you create more than one `MetricManager`, two tasks concurrently iterating the same sequence both receive a non-deterministic subset of reports rather than a full copy.

Metric reports arrive through [metricReports](metricmanager/metricreports.md), and diagnostic reports through [diagnosticReports](metricmanager/diagnosticreports.md). Both are typed `AsyncSequence` properties that never throw, so you iterate them with `for await` in long-lived tasks:

```swift
let manager = MetricManager()

Task {
    for await report in manager.metricReports {
        process(report)
    }
}
Task {
    for await report in manager.diagnosticReports {
        process(report)
    }
}
```

To receive metrics segmented by app state, pass a set of [StateReportingDomain](statereportingdomain.md) values to [init(enabledStateReportingDomains:)](metricmanager/init%28enabledstatereportingdomains_%29.md). When state reporting is enabled, [stateEntries](metricreport/stateentries.md) carries metrics grouped by each recorded state in addition to the standard [intervalEntries](metricreport/intervalentries.md).

## Topics

### Initialization

- [init()](metricmanager/init%28%29.md): Creates a new `MetricManager` instance without state reporting domains.
- [init(enabledStateReportingDomains:)](metricmanager/init%28enabledstatereportingdomains_%29.md): Creates a new `MetricManager` instance with state reporting domains enabled for metrics aggregation.
- [enabledStateReportingDomains](metricmanager/enabledstatereportingdomains.md): StateReporting domains enabled for metrics aggregation

### Reports

- [metricReports](metricmanager/metricreports.md): An asynchronous sequence that delivers daily metric reports.
- [diagnosticReports](metricmanager/diagnosticreports.md): An asynchronous sequence that delivers diagnostic reports as individual events.

### Custom metric logs

- [logHandle(category:)](metricmanager/loghandle%28category_%29.md): Returns an `OSLog` handle for creating custom signpost metrics that MetricKit aggregates.

### Extended launch

- [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-48k2s.md): Measures the duration of an asynchronous extended launch task.
- [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-jnu1.md): Measures the duration of a synchronous extended launch task.
- [MetricManager.LaunchTaskError](metricmanager/launchtaskerror.md): An error that describes a problem that occurred while tracking an extended launch task.
- [LaunchTaskID](launchtaskid.md): An identifier for a task measured as part of an extended app launch.

### State-contextualized metrics

- [MetricManager.ReportedState](metricmanager/reportedstate.md): A recorded app state associated with a metric or diagnostic report entry.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metric and diagnostic reports

- [MetricReport](metricreport.md): A daily performance report that contains metric values for your app.
- [DiagnosticReport](diagnosticreport.md): A report describing a single diagnostic event.
