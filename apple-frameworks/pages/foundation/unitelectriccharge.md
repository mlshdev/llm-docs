> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitelectriccharge](https://developer.apple.com/documentation/foundation/unitelectriccharge)

# UnitElectricCharge (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric charge.

## Declaration

```swift
class UnitElectricCharge
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitElectricCharge](unitelectriccharge.md) to represent specific quantities of electric charge using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Charge"></a>

### Electric Charge

Electric charge is a fundamental physical property of matter that causes it to experience a force within an electromagnetic field. The SI unit for electric charge is the coulomb (C), which is defined as the amount of charge carried by a current of one ampere in one second (1C = 1A · 1s). Charge is also commonly expressed in terms of ampere hours (Ah).

The [UnitElectricCharge](unitelectriccharge.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [coulombs](unitelectriccharge/coulombs.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Coulombs | [coulombs](unitelectriccharge/coulombs.md) | C | `1.0` |
| Megaampere Hours | [megaampereHours](unitelectriccharge/megaamperehours.md) | MAh | `3.6e9` |
| Kiloampere Hours | [kiloampereHours](unitelectriccharge/kiloamperehours.md) | kAh | `3600000.0` |
| Ampere Hours | [ampereHours](unitelectriccharge/amperehours.md) | Ah | `3600.0` |
| Milliampere Hours | [milliampereHours](unitelectriccharge/milliamperehours.md) | mAh | `3.6` |
| Microampere Hours | [microampereHours](unitelectriccharge/microamperehours.md) | µAh | `0.0036` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [coulombs](unitelectriccharge/coulombs.md): The coulombs unit of electric charge.
- [megaampereHours](unitelectriccharge/megaamperehours.md): The megaampere hours unit of electric charge.
- [kiloampereHours](unitelectriccharge/kiloamperehours.md): The kiloampere hours unit of electric charge.
- [ampereHours](unitelectriccharge/amperehours.md): The ampere hours unit of electric charge.
- [milliampereHours](unitelectriccharge/milliamperehours.md): The milliampere hours unit of electric charge.
- [microampereHours](unitelectriccharge/microamperehours.md): The microampere hours unit of electric charge.

## Relationships

### Inherits From

- [Dimension](dimension.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Electricity

- [UnitElectricCurrent](unitelectriccurrent.md): A unit of measure for electric current.
- [UnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.
- [UnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.

# NSUnitElectricCharge (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric charge.

## Declaration

```objectivec
@interface NSUnitElectricCharge : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitElectricCharge](unitelectriccharge.md) to represent specific quantities of electric charge using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Charge"></a>

### Electric Charge

Electric charge is a fundamental physical property of matter that causes it to experience a force within an electromagnetic field. The SI unit for electric charge is the coulomb (C), which is defined as the amount of charge carried by a current of one ampere in one second (1C = 1A · 1s). Charge is also commonly expressed in terms of ampere hours (Ah).

The [NSUnitElectricCharge](unitelectriccharge.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [coulombs](unitelectriccharge/coulombs.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Coulombs | [coulombs](unitelectriccharge/coulombs.md) | C | `1.0` |
| Megaampere Hours | [megaampereHours](unitelectriccharge/megaamperehours.md) | MAh | `3.6e9` |
| Kiloampere Hours | [kiloampereHours](unitelectriccharge/kiloamperehours.md) | kAh | `3600000.0` |
| Ampere Hours | [ampereHours](unitelectriccharge/amperehours.md) | Ah | `3600.0` |
| Milliampere Hours | [milliampereHours](unitelectriccharge/milliamperehours.md) | mAh | `3.6` |
| Microampere Hours | [microampereHours](unitelectriccharge/microamperehours.md) | µAh | `0.0036` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [coulombs](unitelectriccharge/coulombs.md): The coulombs unit of electric charge.
- [megaampereHours](unitelectriccharge/megaamperehours.md): The megaampere hours unit of electric charge.
- [kiloampereHours](unitelectriccharge/kiloamperehours.md): The kiloampere hours unit of electric charge.
- [ampereHours](unitelectriccharge/amperehours.md): The ampere hours unit of electric charge.
- [milliampereHours](unitelectriccharge/milliamperehours.md): The milliampere hours unit of electric charge.
- [microampereHours](unitelectriccharge/microamperehours.md): The microampere hours unit of electric charge.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Electricity

- [NSUnitElectricCurrent](unitelectriccurrent.md): A unit of measure for electric current.
- [NSUnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.
- [NSUnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.
