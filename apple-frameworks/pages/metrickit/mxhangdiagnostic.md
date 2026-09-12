> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxhangdiagnostic](https://developer.apple.com/documentation/metrickit/mxhangdiagnostic)

# MXHangDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for an app that is too busy to handle user input responsively.

> Use [HangDiagnostic](hangdiagnostic.md) instead.

## Declaration

```swift
class MXHangDiagnostic
```

## Topics

### Reading total app hang time

- [hangDuration](mxhangdiagnostic/hangduration.md): Deprecated. The amount of time the app is busy and unable to respond to user interaction.

### Viewing the call stack

- [callStackTree](mxhangdiagnostic/callstacktree.md): Deprecated. The call stack for the app hang report.

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
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

# MXHangDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for an app that is too busy to handle user input responsively.

> Use [HangDiagnostic](hangdiagnostic.md) instead.

## Declaration

```objectivec
@interface MXHangDiagnostic : MXDiagnostic
```

## Topics

### Reading total app hang time

- [hangDuration](mxhangdiagnostic/hangduration.md): Deprecated. The amount of time the app is busy and unable to respond to user interaction.

### Viewing the call stack

- [callStackTree](mxhangdiagnostic/callstacktree.md): Deprecated. The call stack for the app hang report.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

## See Also

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.
