> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostrecord](https://developer.apple.com/documentation/metrickit/mxsignpostrecord)

# MXSignpostRecord (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing the record for a signpost interval or event.

> Use [SignpostRecord](signpostrecord.md) instead.

## Declaration

```swift
class MXSignpostRecord
```

## Topics

### Generating a report

- [dictionaryRepresentation()](mxsignpostrecord/dictionaryrepresentation%28%29.md): Deprecated.
- [jsonRepresentation()](mxsignpostrecord/jsonrepresentation%28%29.md): Deprecated.

### Reading the data

- [beginTimeStamp](mxsignpostrecord/begintimestamp.md): Deprecated.
- [category](mxsignpostrecord/category.md): Deprecated.
- [duration](mxsignpostrecord/duration.md): Deprecated.
- [endTimeStamp](mxsignpostrecord/endtimestamp.md): Deprecated.
- [isInterval](mxsignpostrecord/isinterval.md): Deprecated.
- [name](mxsignpostrecord/name.md): Deprecated.
- [subsystem](mxsignpostrecord/subsystem.md): Deprecated.

### Initializers

- [init(coder:)](mxsignpostrecord/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXError](mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXError.Code](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXSignpostRecord (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing the record for a signpost interval or event.

> Use [SignpostRecord](signpostrecord.md) instead.

## Declaration

```objectivec
@interface MXSignpostRecord : NSObject
```

## Topics

### Generating a report

- [dictionaryRepresentation](mxsignpostrecord/dictionaryrepresentation%28%29.md): Deprecated.
- [JSONRepresentation](mxsignpostrecord/jsonrepresentation%28%29.md): Deprecated.

### Reading the data

- [beginTimeStamp](mxsignpostrecord/begintimestamp.md): Deprecated.
- [category](mxsignpostrecord/category.md): Deprecated.
- [duration](mxsignpostrecord/duration.md): Deprecated.
- [endTimeStamp](mxsignpostrecord/endtimestamp.md): Deprecated.
- [isInterval](mxsignpostrecord/isinterval.md): Deprecated.
- [name](mxsignpostrecord/name.md): Deprecated.
- [subsystem](mxsignpostrecord/subsystem.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXErrorCode](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
