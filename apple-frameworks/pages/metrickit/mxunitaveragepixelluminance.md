> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxunitaveragepixelluminance](https://developer.apple.com/documentation/metrickit/mxunitaveragepixelluminance)

# MXUnitAveragePixelLuminance (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A unit of measure of pixel luminosity on an OLED display.

> Use [AveragePixelLuminance](averagepixelluminance.md) instead.

## Declaration

```swift
class MXUnitAveragePixelLuminance
```

<a id="overview"></a>

## Overview

Luminosity represents the brightness of each red, green, and blue component pixel. Unlike LCD displays, each pixel requires power to display a color, and white draws the most power per pixel.

`MXUnitAveragePixelLuminance` defines the base unit as the average luminance of all the pixels on the screen for some period of time. Reducing the average luminance of the display reduces the amount of power consumed by the app.

## Topics

### Measuring Average Pixel Luminance

- [apl](mxunitaveragepixelluminance/apl.md): Deprecated. The average number of powered pixels on a OLED display.

## Relationships

### Inherits From

- [Dimension](../foundation/dimension.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXUnitAveragePixelLuminance (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A unit of measure of pixel luminosity on an OLED display.

> Use [AveragePixelLuminance](averagepixelluminance.md) instead.

## Declaration

```objectivec
@interface MXUnitAveragePixelLuminance : NSDimension
```

<a id="overview"></a>

## Overview

Luminosity represents the brightness of each red, green, and blue component pixel. Unlike LCD displays, each pixel requires power to display a color, and white draws the most power per pixel.

`MXUnitAveragePixelLuminance` defines the base unit as the average luminance of all the pixels on the screen for some period of time. Reducing the average luminance of the display reduces the amount of power consumed by the app.

## Topics

### Measuring Average Pixel Luminance

- [apl](mxunitaveragepixelluminance/apl.md): Deprecated. The average number of powered pixels on a OLED display.

## Relationships

### Inherits From

- [NSDimension](../foundation/dimension.md)

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
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
