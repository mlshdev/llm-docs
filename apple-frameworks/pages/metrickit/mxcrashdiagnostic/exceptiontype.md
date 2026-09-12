> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcrashdiagnostic/exceptiontype](https://developer.apple.com/documentation/metrickit/mxcrashdiagnostic/exceptiontype)

# exceptionType (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The Mach exception type of the crash.

> Use [exceptionType](../crashdiagnostic/exceptiontype.md) instead.

## Declaration

```swift
var exceptionType: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

Mach exception types are in the `usr/include/mach/exception_types.h` file in the SDK.

## See Also

### Viewing exception details

- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

# exceptionType (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The Mach exception type of the crash.

> Use [exceptionType](../crashdiagnostic/exceptiontype.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSNumber * exceptionType;
```

<a id="Discussion"></a>

## Discussion

Mach exception types are in the `usr/include/mach/exception_types.h` file in the SDK.

## See Also

### Viewing exception details

- [exceptionCode](exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](exceptionreason.md): Deprecated.
- [terminationReason](terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.
