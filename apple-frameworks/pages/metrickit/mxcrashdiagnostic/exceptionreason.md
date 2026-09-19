> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxcrashdiagnostic/exceptionreason

# exceptionReason (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.2) · iPadOS 17.0+ (deprecated in 27.2) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

> Use [exceptionReason](../crashdiagnostic/exceptionreason.md) instead.

## Declaration

```swift
var exceptionReason: MXCrashDiagnosticObjectiveCExceptionReason? { get }
```

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

# exceptionReason (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.2) · iPadOS 17.0+ (deprecated in 27.2) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

> Use [exceptionReason](../crashdiagnostic/exceptionreason.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXCrashDiagnosticObjectiveCExceptionReason * exceptionReason;
```

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.
