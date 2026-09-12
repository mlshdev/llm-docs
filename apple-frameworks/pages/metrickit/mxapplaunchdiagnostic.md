> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxapplaunchdiagnostic](https://developer.apple.com/documentation/metrickit/mxapplaunchdiagnostic)

# MXAppLaunchDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A diagnostic subclass that encapsulates app launch diagnostic reports.

> Use [AppLaunchDiagnostic](applaunchdiagnostic.md) instead.

## Declaration

```swift
class MXAppLaunchDiagnostic
```

## Topics

### Reading app launch metrics

- [callStackTree](mxapplaunchdiagnostic/callstacktree.md): Deprecated. The call stack tree associated with the app launch.
- [launchDuration](mxapplaunchdiagnostic/launchduration.md): Deprecated. The total app launch duration.

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

- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

# MXAppLaunchDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A diagnostic subclass that encapsulates app launch diagnostic reports.

> Use [AppLaunchDiagnostic](applaunchdiagnostic.md) instead.

## Declaration

```objectivec
@interface MXAppLaunchDiagnostic : MXDiagnostic
```

## Topics

### Reading app launch metrics

- [callStackTree](mxapplaunchdiagnostic/callstacktree.md): Deprecated. The call stack tree associated with the app launch.
- [launchDuration](mxapplaunchdiagnostic/launchduration.md): Deprecated. The total app launch duration.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

## See Also

### Performance diagnostics

- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.
