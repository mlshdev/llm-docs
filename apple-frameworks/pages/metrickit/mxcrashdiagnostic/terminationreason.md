> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxcrashdiagnostic/terminationreason

# terminationReason (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The reason the app was terminated as a human-readable string.

> Use [terminationReason](../crashdiagnostic/terminationreason-swift.property.md) instead.

## Declaration

```swift
var terminationReason: String? { get }
```

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

# terminationReason (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The reason the app was terminated as a human-readable string.

> Use [terminationReason](../crashdiagnostic/terminationreason-swift.property.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSString * terminationReason;
```

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.
