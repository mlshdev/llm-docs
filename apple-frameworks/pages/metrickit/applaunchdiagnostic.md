> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/applaunchdiagnostic](https://developer.apple.com/documentation/metrickit/applaunchdiagnostic)

# AppLaunchDiagnostic

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A diagnostic report for an app launch.

## Declaration

```swift
struct AppLaunchDiagnostic
```

<a id="Discussion"></a>

## Discussion

This captures a [CallStackTree](callstacktree.md) and a `launchDuration` measurement for app launches that exceed the diagnostic threshold.

## Topics

### Call stack

- [callStackTree](applaunchdiagnostic/callstacktree.md): The application call stack tree associated with the launch issue.

### Launch details

- [launchDuration](applaunchdiagnostic/launchduration.md): Duration of the launch that triggered this diagnostic.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Crash and hang diagnostics

- [CrashDiagnostic](crashdiagnostic.md): A diagnostic report that describes a crash that occurred.
- [HangDiagnostic](hangdiagnostic.md): A diagnostic for an app that was too busy to handle user input responsively.
