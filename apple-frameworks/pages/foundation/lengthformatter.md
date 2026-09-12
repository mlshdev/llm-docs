> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/lengthformatter](https://developer.apple.com/documentation/foundation/lengthformatter)

# LengthFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of linear distances, such as length and height measurements.

## Declaration

```swift
class LengthFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [MeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [UnitLength](unitlength.md) to provide equivalent functionality to [LengthFormatter](lengthformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Length Strings

- [isForPersonHeightUse](lengthformatter/isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue(\_:for:errorDescription:)](lengthformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](lengthformatter/numberformatter.md): The number formatter used to format the numbers in length strings.
- [string(fromMeters:)](lengthformatter/string%28frommeters_%29.md): Returns a length string for the provided value.
- [string(fromValue:unit:)](lengthformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitString(fromMeters:usedUnit:)](lengthformatter/unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](lengthformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](lengthformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [LengthFormatter.Unit](lengthformatter/unit.md): The units supported by the `NSLengthFormatter` class.

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

## See Also

### Deprecated

- [MassFormatter](massformatter.md): A formatter that provides localized descriptions of mass and weight values.
- [EnergyFormatter](energyformatter.md): A formatter that provides localized descriptions of energy values.

# NSLengthFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of linear distances, such as length and height measurements.

## Declaration

```objectivec
@interface NSLengthFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [NSMeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [NSUnitLength](unitlength.md) to provide equivalent functionality to [NSLengthFormatter](lengthformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Length Strings

- [forPersonHeightUse](lengthformatter/isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue:forString:errorDescription:](lengthformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](lengthformatter/numberformatter.md): The number formatter used to format the numbers in length strings.
- [stringFromMeters:](lengthformatter/string%28frommeters_%29.md): Returns a length string for the provided value.
- [stringFromValue:unit:](lengthformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitStringFromMeters:usedUnit:](lengthformatter/unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](lengthformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](lengthformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [NSLengthFormatterUnit](lengthformatter/unit.md): The units supported by the `NSLengthFormatter` class.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Deprecated

- [NSMassFormatter](massformatter.md): A formatter that provides localized descriptions of mass and weight values.
- [NSEnergyFormatter](energyformatter.md): A formatter that provides localized descriptions of energy values.
