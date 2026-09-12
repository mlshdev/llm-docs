> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitelectriccurrent](https://developer.apple.com/documentation/foundation/unitelectriccurrent)

# UnitElectricCurrent (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric current.

## Declaration

```swift
class UnitElectricCurrent
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitElectricCurrent](unitelectriccurrent.md) to represent specific quantities of electric current using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Current"></a>

### Electric Current

Electric current is the flow of electric charge. The SI unit for electric current is the ampere (A), which is defined in terms the production of electromagnetic force between two parallel linear conductors. It can also be expressed as the flow of one coulomb per second (1A = 1C / s).

The [UnitElectricCurrent](unitelectriccurrent.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [amperes](unitelectriccurrent/amperes.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megaamperes | [megaamperes](unitelectriccurrent/megaamperes.md) | MA | `1000000.0` |
| Kiloamperes | [kiloamperes](unitelectriccurrent/kiloamperes.md) | kA | `1000.0` |
| Amperes | [amperes](unitelectriccurrent/amperes.md) | A | `1.0` |
| Milliamperes | [milliamperes](unitelectriccurrent/milliamperes.md) | mA | `0.001` |
| Microamperes | [microamperes](unitelectriccurrent/microamperes.md) | µA | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megaamperes](unitelectriccurrent/megaamperes.md): The megaamperes unit of electric current.
- [kiloamperes](unitelectriccurrent/kiloamperes.md): The kiloamperes unit of electric current.
- [amperes](unitelectriccurrent/amperes.md): The amperes unit of electric current.
- [milliamperes](unitelectriccurrent/milliamperes.md): The milliamperes unit of electric current.
- [microamperes](unitelectriccurrent/microamperes.md): The microamperes unit of electric current.

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

- [UnitElectricCharge](unitelectriccharge.md): A unit of measure for electric charge.
- [UnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.
- [UnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.

# NSUnitElectricCurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric current.

## Declaration

```objectivec
@interface NSUnitElectricCurrent : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitElectricCurrent](unitelectriccurrent.md) to represent specific quantities of electric current using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Current"></a>

### Electric Current

Electric current is the flow of electric charge. The SI unit for electric current is the ampere (A), which is defined in terms the production of electromagnetic force between two parallel linear conductors. It can also be expressed as the flow of one coulomb per second (1A = 1C / s).

The [NSUnitElectricCurrent](unitelectriccurrent.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [amperes](unitelectriccurrent/amperes.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megaamperes | [megaamperes](unitelectriccurrent/megaamperes.md) | MA | `1000000.0` |
| Kiloamperes | [kiloamperes](unitelectriccurrent/kiloamperes.md) | kA | `1000.0` |
| Amperes | [amperes](unitelectriccurrent/amperes.md) | A | `1.0` |
| Milliamperes | [milliamperes](unitelectriccurrent/milliamperes.md) | mA | `0.001` |
| Microamperes | [microamperes](unitelectriccurrent/microamperes.md) | µA | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megaamperes](unitelectriccurrent/megaamperes.md): The megaamperes unit of electric current.
- [kiloamperes](unitelectriccurrent/kiloamperes.md): The kiloamperes unit of electric current.
- [amperes](unitelectriccurrent/amperes.md): The amperes unit of electric current.
- [milliamperes](unitelectriccurrent/milliamperes.md): The milliamperes unit of electric current.
- [microamperes](unitelectriccurrent/microamperes.md): The microamperes unit of electric current.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Electricity

- [NSUnitElectricCharge](unitelectriccharge.md): A unit of measure for electric charge.
- [NSUnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.
- [NSUnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.
