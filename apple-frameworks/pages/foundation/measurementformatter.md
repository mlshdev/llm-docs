> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter](https://developer.apple.com/documentation/foundation/measurementformatter)

# MeasurementFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A formatter that provides localized representations of units and measurements.

## Declaration

```swift
class MeasurementFormatter
```

<a id="overview"></a>

## Overview

You use the [string(from:)](measurementformatter/string%28from_%29-wt9y.md) method to create a localized representation of an [NSMeasurement](nsmeasurement.md) object, and you use the [string(from:)](measurementformatter/string%28from_%29-4hwjz.md) method to create a localized representation of an [Unit](unit.md) object. The formatter takes into account the specified [locale](measurementformatter/locale.md), [unitStyle](measurementformatter/unitstyle.md), and [unitOptions](measurementformatter/unitoptions-swift.property.md) when producing string representations of units and measurements.

> **Tip**

>  In Swift, you can use [Measurement.FormatStyle](measurement/formatstyle.md) rather than [MeasurementFormatter](measurementformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Specifying the Format

- [unitOptions](measurementformatter/unitoptions-swift.property.md): The options for how the unit is formatted.
- [MeasurementFormatter.UnitOptions](measurementformatter/unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](measurementformatter/unitstyle.md): The unit style.
- [locale](measurementformatter/locale.md): The locale of the formatter.
- [numberFormatter](measurementformatter/numberformatter.md): The number formatter used to format the quantity of a measurement.

### Converting Measurements

- [string(from:)](measurementformatter/string%28from_%29-wt9y.md): Creates and returns a localized string representation of the provided measurement.
- [string(from:)](measurementformatter/string%28from_%29-6rcb1.md): Creates and returns a localized string representation of the provided measurement.
- [string(from:)](measurementformatter/string%28from_%29-4hwjz.md): Creates and returns a localized string representation of the provided unit of measure.

## Relationships

### Inherits From

- [Formatter](formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSMeasurementFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A formatter that provides localized representations of units and measurements.

## Declaration

```objectivec
@interface NSMeasurementFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

You use the [stringFromMeasurement:](measurementformatter/string%28from_%29-wt9y.md) method to create a localized representation of an [NSMeasurement](nsmeasurement.md) object, and you use the [stringFromUnit:](measurementformatter/string%28from_%29-4hwjz.md) method to create a localized representation of an [NSUnit](unit.md) object. The formatter takes into account the specified [locale](measurementformatter/locale.md), [unitStyle](measurementformatter/unitstyle.md), and [unitOptions](measurementformatter/unitoptions-swift.property.md) when producing string representations of units and measurements.

> **Tip**

>  In Swift, you can use [Measurement.FormatStyle](measurement/formatstyle.md) rather than [NSMeasurementFormatter](measurementformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Specifying the Format

- [unitOptions](measurementformatter/unitoptions-swift.property.md): The options for how the unit is formatted.
- [NSMeasurementFormatterUnitOptions](measurementformatter/unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](measurementformatter/unitstyle.md): The unit style.
- [locale](measurementformatter/locale.md): The locale of the formatter.
- [numberFormatter](measurementformatter/numberformatter.md): The number formatter used to format the quantity of a measurement.

### Converting Measurements

- [stringFromMeasurement:](measurementformatter/string%28from_%29-wt9y.md): Creates and returns a localized string representation of the provided measurement.
- [stringFromUnit:](measurementformatter/string%28from_%29-4hwjz.md): Creates and returns a localized string representation of the provided unit of measure.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)
