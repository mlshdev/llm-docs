> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct](https://developer.apple.com/documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct)

# CrashDiagnostic.TerminationCategory

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A value that describes the category of termination that caused a crash.

## Declaration

```swift
struct TerminationCategory
```

<a id="Discussion"></a>

## Discussion

Use `TerminationCategory` to correlate individual crash diagnostics with the aggregate termination counts reported by [ForegroundTerminationMetric](../foregroundterminationmetric.md) and [BackgroundTerminationMetric](../backgroundterminationmetric.md). Each category corresponds to a specific count property on one or both of those metric types.

## Topics

### Termination categories

- [badAccess](terminationcategory-swift.struct/badaccess.md): The app was terminated for attempting an invalid memory access.
- [abnormal](terminationcategory-swift.struct/abnormal.md): The app terminated abnormally, typically due to an uncaught exception or call to `abort()`.
- [illegalInstruction](terminationcategory-swift.struct/illegalinstruction.md): The app was terminated for executing an illegal or undefined instruction.
- [watchdog](terminationcategory-swift.struct/watchdog.md): The app was terminated by the system watchdog for failing to respond in time.
- [taskTimeout](terminationcategory-swift.struct/tasktimeout.md): The app was terminated for exceeding the allocated time for a background task.
- [fileLock](terminationcategory-swift.struct/filelock.md): The app was terminated while suspended for holding file locks.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
