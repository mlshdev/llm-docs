> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcrashdiagnostic](https://developer.apple.com/documentation/metrickit/mxcrashdiagnostic)

# MXCrashDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for an app crash.

> Use [CrashDiagnostic](crashdiagnostic.md) instead.

## Declaration

```swift
class MXCrashDiagnostic
```

## Topics

### Viewing exception details

- [exceptionType](mxcrashdiagnostic/exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](mxcrashdiagnostic/exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](mxcrashdiagnostic/signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](mxcrashdiagnostic/exceptionreason.md): Deprecated.
- [terminationReason](mxcrashdiagnostic/terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](mxcrashdiagnostic/virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

### Viewing the call stack

- [callStackTree](mxcrashdiagnostic/callstacktree.md): Deprecated. The call stack for the crash.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

# MXCrashDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for an app crash.

> Use [CrashDiagnostic](crashdiagnostic.md) instead.

## Declaration

```objectivec
@interface MXCrashDiagnostic : MXDiagnostic
```

## Topics

### Viewing exception details

- [exceptionType](mxcrashdiagnostic/exceptiontype.md): Deprecated. The Mach exception type of the crash.
- [exceptionCode](mxcrashdiagnostic/exceptioncode.md): Deprecated. The encoded processor-specific information for the crash.
- [signal](mxcrashdiagnostic/signal.md): Deprecated. The signal associated with the crash.
- [exceptionReason](mxcrashdiagnostic/exceptionreason.md): Deprecated.
- [terminationReason](mxcrashdiagnostic/terminationreason.md): Deprecated. The reason the app was terminated as a human-readable string.
- [virtualMemoryRegionInfo](mxcrashdiagnostic/virtualmemoryregioninfo.md): Deprecated. Information about the region of memory an app accessed incorrectly, resulting in a bad-access crash.

### Viewing the call stack

- [callStackTree](mxcrashdiagnostic/callstacktree.md): Deprecated. The call stack for the crash.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

## See Also

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.
