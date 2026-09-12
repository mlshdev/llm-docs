> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic](https://developer.apple.com/documentation/metrickit/crashdiagnostic)

# CrashDiagnostic

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A diagnostic report that describes a crash that occurred.

## Declaration

```swift
struct CrashDiagnostic
```

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

This carries a [CallStackTree](callstacktree.md) along with crash-specific metadata including the exception type, exception code, signal, and optional Objective-C exception reason.

Use [terminationCategory](crashdiagnostic/terminationcategory-swift.property.md) to correlate this crash with the aggregate termination counts in [ForegroundTerminationMetric](foregroundterminationmetric.md) and [BackgroundTerminationMetric](backgroundterminationmetric.md):

```swift
if let category = diagnostic.terminationCategory {
    switch category {
    case .watchdog:
        flagWatchdogTermination()
    case .badAccess:
        flagBadAccessCrash()
    default:
        break
    }
}
```

## Topics

### Call stack

- [callStackTree](crashdiagnostic/callstacktree.md): The application call stack tree associated with this crash.

### Exception details

- [exceptionType](crashdiagnostic/exceptiontype.md): The name of the Mach exception that terminated the app.
- [exceptionCode](crashdiagnostic/exceptioncode.md): Processor specific information about the exception.
- [signal](crashdiagnostic/signal.md): The signal associated with this crash.
- [exceptionReason](crashdiagnostic/exceptionreason.md): The exception reason for an uncaught ObjC exception.
- [virtualMemoryRegionInfo](crashdiagnostic/virtualmemoryregioninfo.md): Details about memory that the app incorrectly accessed.

### Termination counts

- [terminationCategory](crashdiagnostic/terminationcategory-swift.property.md): The category of termination that caused this crash.
- [terminationReason](crashdiagnostic/terminationreason-swift.property.md): The reason the app was terminated as a human-readable string.

### Structures

- [CrashDiagnostic.ObjectiveCExceptionReason](crashdiagnostic/objectivecexceptionreason.md): Detailed information about an uncaught Objective-C exception that caused a crash.
- [CrashDiagnostic.TerminationCategory](crashdiagnostic/terminationcategory-swift.struct.md): A value that describes the category of termination that caused a crash.
- [CrashDiagnostic.TerminationReason](crashdiagnostic/terminationreason-swift.struct.md): A value that describes the reason the app terminated.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Crash and hang diagnostics

- [HangDiagnostic](hangdiagnostic.md): A diagnostic for an app that was too busy to handle user input responsively.
- [AppLaunchDiagnostic](applaunchdiagnostic.md): A diagnostic report for an app launch.
