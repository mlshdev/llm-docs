> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter](https://developer.apple.com/documentation/foundation/massformatter)

# MassFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of mass and weight values.

## Declaration

```swift
class MassFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [MeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [UnitMass](unitmass.md) to provide equivalent functionality to [MassFormatter](massformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Mass Strings

- [isForPersonMassUse](massformatter/isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue(\_:for:errorDescription:)](massformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](massformatter/numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [string(fromKilograms:)](massformatter/string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [string(fromValue:unit:)](massformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitString(fromKilograms:usedUnit:)](massformatter/unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](massformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](massformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [MassFormatter.Unit](massformatter/unit.md): The units supported by the `NSMassFormatter` class.

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

- [LengthFormatter](lengthformatter.md): A formatter that provides localized descriptions of linear distances, such as length and height measurements.
- [EnergyFormatter](energyformatter.md): A formatter that provides localized descriptions of energy values.

# NSMassFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of mass and weight values.

## Declaration

```objectivec
@interface NSMassFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [NSMeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [NSUnitMass](unitmass.md) to provide equivalent functionality to [NSMassFormatter](massformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Mass Strings

- [forPersonMassUse](massformatter/isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue:forString:errorDescription:](massformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](massformatter/numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [stringFromKilograms:](massformatter/string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [stringFromValue:unit:](massformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitStringFromKilograms:usedUnit:](massformatter/unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](massformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](massformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [NSMassFormatterUnit](massformatter/unit.md): The units supported by the `NSMassFormatter` class.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Deprecated

- [NSLengthFormatter](lengthformatter.md): A formatter that provides localized descriptions of linear distances, such as length and height measurements.
- [NSEnergyFormatter](energyformatter.md): A formatter that provides localized descriptions of energy values.
