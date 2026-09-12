> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetadata](https://developer.apple.com/documentation/metrickit/mxmetadata)

# MXMetaData (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object containing system-level information about the device.

> Use [MetricReport.Environment](metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```swift
class MXMetaData
```

## Topics

### Reading data about a payload

- [applicationBuildVersion](mxmetadata/applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](mxmetadata/devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](mxmetadata/istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](mxmetadata/lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](mxmetadata/osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](mxmetadata/platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](mxmetadata/regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](mxmetadata/pid.md): Deprecated. The process ID (PID) of the process.

### Generating a report

- [dictionaryRepresentation()](mxmetadata/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of the metadata as a dictionary.
- [jsonRepresentation()](mxmetadata/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metadata in JSON format.

### Initializers

- [init(coder:)](mxmetadata/init%28coder_%29.md): Deprecated.

### Instance Properties

- [bundleIdentifier](mxmetadata/bundleidentifier.md): Deprecated.

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
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXError](mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXError.Code](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXMetaData (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object containing system-level information about the device.

> Use [MetricReport.Environment](metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
@interface MXMetaData : NSObject
```

## Topics

### Reading data about a payload

- [applicationBuildVersion](mxmetadata/applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](mxmetadata/devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](mxmetadata/istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](mxmetadata/lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](mxmetadata/osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](mxmetadata/platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](mxmetadata/regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](mxmetadata/pid.md): Deprecated. The process ID (PID) of the process.

### Generating a report

- [dictionaryRepresentation](mxmetadata/dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of the metadata as a dictionary.
- [JSONRepresentation](mxmetadata/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metadata in JSON format.

### Instance Properties

- [bundleIdentifier](mxmetadata/bundleidentifier.md): Deprecated.

### Instance Methods

- [DictionaryRepresentation](mxmetadata/dictionaryrepresentation-88u6f.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXErrorCode](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
