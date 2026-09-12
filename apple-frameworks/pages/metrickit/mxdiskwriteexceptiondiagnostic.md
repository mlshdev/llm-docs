> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskwriteexceptiondiagnostic](https://developer.apple.com/documentation/metrickit/mxdiskwriteexceptiondiagnostic)

# MXDiskWriteExceptionDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for a disk write exception.

> Use [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md) instead.

## Declaration

```swift
class MXDiskWriteExceptionDiagnostic
```

<a id="overview"></a>

## Overview

A disk write exception occurs when the app writes an excessive amount of data to the disk.

## Topics

### Reading total disk writes

- [totalWritesCaused](mxdiskwriteexceptiondiagnostic/totalwritescaused.md): Deprecated. The total amount of data written to disk or other long-term storage during the disk write exception.

### Viewing the call stack

- [callStackTree](mxdiskwriteexceptiondiagnostic/callstacktree.md): Deprecated. The call stack for the disk write exception.

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
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.

# MXDiskWriteExceptionDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a diagnostic report for a disk write exception.

> Use [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md) instead.

## Declaration

```objectivec
@interface MXDiskWriteExceptionDiagnostic : MXDiagnostic
```

<a id="overview"></a>

## Overview

A disk write exception occurs when the app writes an excessive amount of data to the disk.

## Topics

### Reading total disk writes

- [totalWritesCaused](mxdiskwriteexceptiondiagnostic/totalwritescaused.md): Deprecated. The total amount of data written to disk or other long-term storage during the disk write exception.

### Viewing the call stack

- [callStackTree](mxdiskwriteexceptiondiagnostic/callstacktree.md): Deprecated. The call stack for the disk write exception.

## Relationships

### Inherits From

- [MXDiagnostic](mxdiagnostic.md)

## See Also

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
