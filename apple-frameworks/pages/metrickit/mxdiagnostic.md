> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnostic](https://developer.apple.com/documentation/metrickit/mxdiagnostic)

# MXDiagnostic (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An abstract data class for a diagnostic.

> Use [DiagnosticResult](diagnosticresult.md) instead.

## Declaration

```swift
class MXDiagnostic
```

## Topics

### Reading data About a diagnostic

- [applicationVersion](mxdiagnostic/applicationversion.md): Deprecated. The value of the bundle version key, short form, in the app’s property list.
- [metaData](mxdiagnostic/metadata.md): Deprecated. A set of system-level information for the device.
- [signpostData](mxdiagnostic/signpostdata.md): Deprecated.

### Generating a report

- [jsonRepresentation()](mxdiagnostic/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the diagnostic in JSON format.
- [dictionaryRepresentation()](mxdiagnostic/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a diagnostic as a dictionary.

### Initializers

- [init(coder:)](mxdiagnostic/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md)
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md)
- [MXCrashDiagnostic](mxcrashdiagnostic.md)
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md)
- [MXHangDiagnostic](mxhangdiagnostic.md)

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

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXError](mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXError.Code](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXDiagnostic (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An abstract data class for a diagnostic.

> Use [DiagnosticResult](diagnosticresult.md) instead.

## Declaration

```objectivec
@interface MXDiagnostic : NSObject
```

## Topics

### Reading data About a diagnostic

- [applicationVersion](mxdiagnostic/applicationversion.md): Deprecated. The value of the bundle version key, short form, in the app’s property list.
- [metaData](mxdiagnostic/metadata.md): Deprecated. A set of system-level information for the device.
- [signpostData](mxdiagnostic/signpostdata.md): Deprecated.

### Generating a report

- [JSONRepresentation](mxdiagnostic/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the diagnostic in JSON format.
- [dictionaryRepresentation](mxdiagnostic/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a diagnostic as a dictionary.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md)
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md)
- [MXCrashDiagnostic](mxcrashdiagnostic.md)
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md)
- [MXHangDiagnostic](mxhangdiagnostic.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXErrorCode](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
