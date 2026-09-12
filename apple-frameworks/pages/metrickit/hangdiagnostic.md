> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/hangdiagnostic](https://developer.apple.com/documentation/metrickit/hangdiagnostic)

# HangDiagnostic

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A diagnostic for an app that was too busy to handle user input responsively.

## Declaration

```swift
struct HangDiagnostic
```

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

This carries a [CallStackTree](callstacktree.md) captured at the time of the hang, and a `hangDuration` measurement that reports how long the main thread was blocked.

## Topics

### Call stack

- [callStackTree](hangdiagnostic/callstacktree.md): The application call stack tree associated with the hang.

### Hang details

- [hangDuration](hangdiagnostic/hangduration.md): Total hang duration for this diagnostic.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Crash and hang diagnostics

- [CrashDiagnostic](crashdiagnostic.md): A diagnostic report that describes a crash that occurred.
- [AppLaunchDiagnostic](applaunchdiagnostic.md): A diagnostic report for an app launch.
