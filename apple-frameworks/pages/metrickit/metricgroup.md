> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricgroup](https://developer.apple.com/documentation/metrickit/metricgroup)

# MetricGroup

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A value that identifies the category a metric belongs to.

## Declaration

```swift
struct MetricGroup
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Use `MetricGroup` with [metricGroup](metricresult/metricgroup.md) to filter or group results without exhaustive switching. For example, to process only CPU-related metrics:

```swift
for result in entry.values where result.metricGroup == .cpu {
    // handle CPU metrics
}
```

## Topics

### Metric Groups

- [cpu](metricgroup/cpu.md)
- [memory](metricgroup/memory.md)
- [diskIO](metricgroup/diskio.md)
- [networkTransfer](metricgroup/networktransfer.md)
- [display](metricgroup/display.md)
- [animation](metricgroup/animation.md)
- [applicationResponsiveness](metricgroup/applicationresponsiveness.md)
- [cellularCondition](metricgroup/cellularcondition.md)
- [locationActivity](metricgroup/locationactivity.md)
- [gpu](metricgroup/gpu.md)
- [signpost](metricgroup/signpost.md)
- [appLaunch](metricgroup/applaunch.md)
- [appRuntime](metricgroup/appruntime.md)
- [appTermination](metricgroup/apptermination.md)
- [diskSpaceUsage](metricgroup/diskspaceusage.md)
- [frameStatistics](metricgroup/framestatistics.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Result types

- [MetricResult](metricresult.md): An enumeration that represents a single metric value from a metric report entry.
- [DiagnosticResult](diagnosticresult.md): An enumeration that represents a single diagnostic event from a diagnostic report.
