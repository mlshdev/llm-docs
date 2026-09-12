> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetric](https://developer.apple.com/documentation/metrickit/mxmetric)

# MXMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An abstract data class for a metric.

> Use [MetricResult](metricresult.md) instead.

## Declaration

```swift
class MXMetric
```

## Topics

### Generate a report

- [dictionaryRepresentation()](mxmetric/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a metric as a dictionary.
- [jsonRepresentation()](mxmetric/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metric in JSON format.

### Initializers

- [init(coder:)](mxmetric/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MXAnimationMetric](mxanimationmetric.md)
- [MXAppExitMetric](mxappexitmetric.md)
- [MXAppLaunchMetric](mxapplaunchmetric.md)
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md)
- [MXAppRunTimeMetric](mxappruntimemetric.md)
- [MXCPUMetric](mxcpumetric.md)
- [MXCellularConditionMetric](mxcellularconditionmetric.md)
- [MXDiskIOMetric](mxdiskiometric.md)
- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md)
- [MXDisplayMetric](mxdisplaymetric.md)
- [MXGPUMetric](mxgpumetric.md)
- [MXLocationActivityMetric](mxlocationactivitymetric.md)
- [MXMemoryMetric](mxmemorymetric.md)
- [MXNetworkTransferMetric](mxnetworktransfermetric.md)
- [MXSignpostMetric](mxsignpostmetric.md)

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
- [MXError](mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXError.Code](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An abstract data class for a metric.

> Use [MetricResult](metricresult.md) instead.

## Declaration

```objectivec
@interface MXMetric : NSObject
```

## Topics

### Generate a report

- [dictionaryRepresentation](mxmetric/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a metric as a dictionary.
- [JSONRepresentation](mxmetric/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metric in JSON format.

### Instance Methods

- [DictionaryRepresentation](mxmetric/dictionaryrepresentation-4728j.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MXAnimationMetric](mxanimationmetric.md)
- [MXAppExitMetric](mxappexitmetric.md)
- [MXAppLaunchMetric](mxapplaunchmetric.md)
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md)
- [MXAppRunTimeMetric](mxappruntimemetric.md)
- [MXCPUMetric](mxcpumetric.md)
- [MXCellularConditionMetric](mxcellularconditionmetric.md)
- [MXDiskIOMetric](mxdiskiometric.md)
- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md)
- [MXDisplayMetric](mxdisplaymetric.md)
- [MXGPUMetric](mxgpumetric.md)
- [MXLocationActivityMetric](mxlocationactivitymetric.md)
- [MXMemoryMetric](mxmemorymetric.md)
- [MXNetworkTransferMetric](mxnetworktransfermetric.md)
- [MXSignpostMetric](mxsignpostmetric.md)

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
- [MXErrorCode](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
