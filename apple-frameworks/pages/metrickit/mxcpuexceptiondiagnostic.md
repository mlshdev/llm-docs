> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcpuexceptiondiagnostic](https://developer.apple.com/documentation/metrickit/mxcpuexceptiondiagnostic)

# MXCPUExceptionDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for a fatal or nonfatal CPU exception.

> Use [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md) instead.

## Declaration

```swift
class MXCPUExceptionDiagnostic
```

<a id="overview"></a>

## Overview

A CPU exception occurs when your app uses an excessive amount of CPU time over a short period.

## Topics

### Viewing the call stack

- [callStackTree](mxcpuexceptiondiagnostic/callstacktree.md): Deprecated. The app call stack associated with the CPU exception.

### Viewing app CPU time

- [totalCPUTime](mxcpuexceptiondiagnostic/totalcputime.md): Deprecated. The total CPU time used during the exception.
- [totalSampledTime](mxcpuexceptiondiagnostic/totalsampledtime.md): Deprecated. The total time the app was sampled during the exception.

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
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

# MXCPUExceptionDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for a fatal or nonfatal CPU exception.

> Use [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md) instead.

## Declaration

```objectivec
@interface MXCPUExceptionDiagnostic : MXDiagnostic
```

<a id="overview"></a>

## Overview

A CPU exception occurs when your app uses an excessive amount of CPU time over a short period.

## Topics

### Viewing the call stack

- [callStackTree](mxcpuexceptiondiagnostic/callstacktree.md): Deprecated. The app call stack associated with the CPU exception.

### Viewing app CPU time

- [totalCPUTime](mxcpuexceptiondiagnostic/totalcputime.md): Deprecated. The total CPU time used during the exception.
- [totalSampledTime](mxcpuexceptiondiagnostic/totalsampledtime.md): Deprecated. The total time the app was sampled during the exception.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

## See Also

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.
