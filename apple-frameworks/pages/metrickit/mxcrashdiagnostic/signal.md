> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcrashdiagnostic/signal](https://developer.apple.com/documentation/metrickit/mxcrashdiagnostic/signal)

# signal (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The signal associated with the crash.

> Use [signal](../crashdiagnostic/signal.md) instead.

## Declaration

```swift
var signal: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

Processor-specific information is in the `usr/include/sys/signal.h` file in the SDK.

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

# signal (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The signal associated with the crash.

> Use [signal](../crashdiagnostic/signal.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSNumber * signal;
```

<a id="Discussion"></a>

## Discussion

Processor-specific information is in the `usr/include/sys/signal.h` file in the SDK.

## See Also

### Viewing exception details

- [exceptionType](exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.
