> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcrashdiagnosticobjectivecexceptionreason](https://developer.apple.com/documentation/metrickit/mxcrashdiagnosticobjectivecexceptionreason)

# MXCrashDiagnosticObjectiveCExceptionReason (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that represents the exception reason for an uncaught ObjC exception.

> Use [CrashDiagnostic.ObjectiveCExceptionReason](crashdiagnostic/objectivecexceptionreason.md) instead.

## Declaration

```swift
class MXCrashDiagnosticObjectiveCExceptionReason
```

<a id="overview"></a>

## Overview

The crash report for an uncaught Objective-C [NSException](../foundation/nsexception.md) can contain detailed information about the type, name and description of the exception object. Use the properties and methods on [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md) to access this information.

## Topics

### Generating a report

- [dictionaryRepresentation()](mxcrashdiagnosticobjectivecexceptionreason/dictionaryrepresentation%28%29.md): Deprecated.
- [jsonRepresentation()](mxcrashdiagnosticobjectivecexceptionreason/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the exception reason in JSON format.

### Reading the data

- [arguments](mxcrashdiagnosticobjectivecexceptionreason/arguments.md): Deprecated.
- [className](mxcrashdiagnosticobjectivecexceptionreason/classname.md): Deprecated.
- [composedMessage](mxcrashdiagnosticobjectivecexceptionreason/composedmessage.md): Deprecated.
- [exceptionName](mxcrashdiagnosticobjectivecexceptionreason/exceptionname.md): Deprecated.
- [exceptionType](mxcrashdiagnosticobjectivecexceptionreason/exceptiontype.md): Deprecated.
- [formatString](mxcrashdiagnosticobjectivecexceptionreason/formatstring.md): Deprecated.

### Initializers

- [init(coder:)](mxcrashdiagnosticobjectivecexceptionreason/init%28coder_%29.md): Deprecated.

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
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXCrashDiagnosticObjectiveCExceptionReason (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that represents the exception reason for an uncaught ObjC exception.

> Use [CrashDiagnostic.ObjectiveCExceptionReason](crashdiagnostic/objectivecexceptionreason.md) instead.

## Declaration

```objectivec
@interface MXCrashDiagnosticObjectiveCExceptionReason : NSObject
```

<a id="overview"></a>

## Overview

The crash report for an uncaught Objective-C [NSException](../foundation/nsexception.md) can contain detailed information about the type, name and description of the exception object. Use the properties and methods on [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md) to access this information.

## Topics

### Generating a report

- [dictionaryRepresentation](mxcrashdiagnosticobjectivecexceptionreason/dictionaryrepresentation%28%29.md): Deprecated.
- [JSONRepresentation](mxcrashdiagnosticobjectivecexceptionreason/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the exception reason in JSON format.

### Reading the data

- [arguments](mxcrashdiagnosticobjectivecexceptionreason/arguments.md): Deprecated.
- [className](mxcrashdiagnosticobjectivecexceptionreason/classname.md): Deprecated.
- [composedMessage](mxcrashdiagnosticobjectivecexceptionreason/composedmessage.md): Deprecated.
- [exceptionName](mxcrashdiagnosticobjectivecexceptionreason/exceptionname.md): Deprecated.
- [exceptionType](mxcrashdiagnosticobjectivecexceptionreason/exceptiontype.md): Deprecated.
- [formatString](mxcrashdiagnosticobjectivecexceptionreason/formatstring.md): Deprecated.

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
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
