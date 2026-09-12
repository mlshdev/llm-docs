> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/diagnosticresult](https://developer.apple.com/documentation/metrickit/diagnosticresult)

# DiagnosticResult

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An enumeration that represents a single diagnostic event from a diagnostic report.

## Declaration

```swift
enum DiagnosticResult
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)
- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`DiagnosticResult` unifies all diagnostic event types into a single enum. Each associated value is a typed diagnostic struct that carries a [CallStackTree](callstacktree.md) and additional event-specific properties such as hang duration, total CPU time, or launch duration.

Access the result through [result](diagnosticreport/result.md) after iterating over [diagnosticReports](metricmanager/diagnosticreports.md). Switch over the result to handle each diagnostic type:

```swift
for await report in manager.diagnosticReports {
    switch report.result {
    case .crash(let diagnostic):
        handleCrash(diagnostic)
    case .hang(let diagnostic):
        handleHang(diagnostic)
    case .cpuException(let diagnostic):
        handleCPUException(diagnostic)
    case .diskWriteException(let diagnostic):
        handleDiskWriteException(diagnostic)
    case .appLaunch(let diagnostic):
        handleAppLaunchDiagnostic(diagnostic)
    @unknown default:
        break
    }
}
```

## Topics

### Call stack

- [CallStackTree](callstacktree.md): A tree structure representing a collection of call stacks captured during a diagnostic event.

### Diagnostic results

- [CrashDiagnostic](crashdiagnostic.md): A diagnostic report that describes a crash that occurred.
- [HangDiagnostic](hangdiagnostic.md): A diagnostic for an app that was too busy to handle user input responsively.
- [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md): A diagnostic for a fatal or nonfatal CPU exception.
- [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md): A diagnostic for a disk write exception.
- [AppLaunchDiagnostic](applaunchdiagnostic.md): A diagnostic report for an app launch.
- [MemoryExceptionDiagnostic](memoryexceptiondiagnostic.md): A diagnostic MetricKit generates when your app or extension terminates because it exceeds the memory limit.

### Enumeration Cases

- [DiagnosticResult.appLaunch(\_:)](diagnosticresult/applaunch%28__%29.md)
- [DiagnosticResult.cpuException(\_:)](diagnosticresult/cpuexception%28__%29.md)
- [DiagnosticResult.crash(\_:)](diagnosticresult/crash%28__%29.md)
- [DiagnosticResult.diskWriteException(\_:)](diagnosticresult/diskwriteexception%28__%29.md)
- [DiagnosticResult.hang(\_:)](diagnosticresult/hang%28__%29.md)
- [DiagnosticResult.memoryException(\_:)](diagnosticresult/memoryexception%28__%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Result types

- [MetricResult](metricresult.md): An enumeration that represents a single metric value from a metric report entry.
- [MetricGroup](metricgroup.md): A value that identifies the category a metric belongs to.
