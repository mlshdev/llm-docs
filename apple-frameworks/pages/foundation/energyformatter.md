> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter](https://developer.apple.com/documentation/foundation/energyformatter)

# EnergyFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of energy values.

## Declaration

```swift
class EnergyFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [MeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [UnitEnergy](unitenergy.md) to provide equivalent functionality to [EnergyFormatter](energyformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Energy Strings

- [isForFoodEnergyUse](energyformatter/isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](energyformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](energyformatter/numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromJoules:)](energyformatter/string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](energyformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](energyformatter/unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](energyformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](energyformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [EnergyFormatter.Unit](energyformatter/unit.md): The units supported by the `NSEnergyFormatter` class.

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
- [MassFormatter](massformatter.md): A formatter that provides localized descriptions of mass and weight values.

# NSEnergyFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that provides localized descriptions of energy values.

## Declaration

```objectivec
@interface NSEnergyFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

> **Note**

>  As of iOS 10, macOS 10.12, tvOS 10, and watchOS 3, Foundation provides the [NSMeasurementFormatter](measurementformatter.md) class, which can be used to represent quantities of [NSUnitEnergy](unitenergy.md) to provide equivalent functionality to [NSEnergyFormatter](energyformatter.md). You are encouraged to transition to these new Foundation Units and Measurements APIs whenever possible.

## Topics

### Formatting Energy Strings

- [forFoodEnergyUse](energyformatter/isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](energyformatter/getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](energyformatter/numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromJoules:](energyformatter/string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](energyformatter/string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](energyformatter/unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](energyformatter/unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](energyformatter/unitstyle.md): The unit style used by this formatter.

### Constants

- [NSEnergyFormatterUnit](energyformatter/unit.md): The units supported by the `NSEnergyFormatter` class.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Deprecated

- [NSLengthFormatter](lengthformatter.md): A formatter that provides localized descriptions of linear distances, such as length and height measurements.
- [NSMassFormatter](massformatter.md): A formatter that provides localized descriptions of mass and weight values.
