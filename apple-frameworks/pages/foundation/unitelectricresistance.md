> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitelectricresistance](https://developer.apple.com/documentation/foundation/unitelectricresistance)

# UnitElectricResistance (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric resistance.

## Declaration

```swift
class UnitElectricResistance
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitElectricResistance](unitelectricresistance.md) to represent specific quantities of electric resistance using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Resistance"></a>

### Electric Resistance

Electric resistance is the difficulty of passing an electric current through a conductor. The SI unit for electric resistance is the ohm (Ω), which is derived as the electric resistance that produces one ampere of current between two points in conductor with one volt of electric potential difference (1Ω = 1V/1A).

The [UnitElectricResistance](unitelectricresistance.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [ohms](unitelectricresistance/ohms.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megaohms | [megaohms](unitelectricresistance/megaohms.md) | MΩ | `1000000.0` |
| Kiloohms | [kiloohms](unitelectricresistance/kiloohms.md) | kΩ | `1000.0` |
| Ohms | [ohms](unitelectricresistance/ohms.md) | Ω | `1.0` |
| Milliohms | [milliohms](unitelectricresistance/milliohms.md) | mΩ | `0.001` |
| Microohms | [microohms](unitelectricresistance/microohms.md) | µΩ | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megaohms](unitelectricresistance/megaohms.md): The megaohms unit of electric resistance.
- [kiloohms](unitelectricresistance/kiloohms.md): The kiloohms unit of electric resistance.
- [ohms](unitelectricresistance/ohms.md): The ohms unit of electric resistance.
- [milliohms](unitelectricresistance/milliohms.md): The milliohms unit of electric resistance.
- [microohms](unitelectricresistance/microohms.md): The microohms unit of electric resistance.

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
- [UnitElectricCurrent](unitelectriccurrent.md): A unit of measure for electric current.
- [UnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.

# NSUnitElectricResistance (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric resistance.

## Declaration

```objectivec
@interface NSUnitElectricResistance : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitElectricResistance](unitelectricresistance.md) to represent specific quantities of electric resistance using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Resistance"></a>

### Electric Resistance

Electric resistance is the difficulty of passing an electric current through a conductor. The SI unit for electric resistance is the ohm (Ω), which is derived as the electric resistance that produces one ampere of current between two points in conductor with one volt of electric potential difference (1Ω = 1V/1A).

The [NSUnitElectricResistance](unitelectricresistance.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [ohms](unitelectricresistance/ohms.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megaohms | [megaohms](unitelectricresistance/megaohms.md) | MΩ | `1000000.0` |
| Kiloohms | [kiloohms](unitelectricresistance/kiloohms.md) | kΩ | `1000.0` |
| Ohms | [ohms](unitelectricresistance/ohms.md) | Ω | `1.0` |
| Milliohms | [milliohms](unitelectricresistance/milliohms.md) | mΩ | `0.001` |
| Microohms | [microohms](unitelectricresistance/microohms.md) | µΩ | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megaohms](unitelectricresistance/megaohms.md): The megaohms unit of electric resistance.
- [kiloohms](unitelectricresistance/kiloohms.md): The kiloohms unit of electric resistance.
- [ohms](unitelectricresistance/ohms.md): The ohms unit of electric resistance.
- [milliohms](unitelectricresistance/milliohms.md): The milliohms unit of electric resistance.
- [microohms](unitelectricresistance/microohms.md): The microohms unit of electric resistance.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Electricity

- [NSUnitElectricCharge](unitelectriccharge.md): A unit of measure for electric charge.
- [NSUnitElectricCurrent](unitelectriccurrent.md): A unit of measure for electric current.
- [NSUnitElectricPotentialDifference](unitelectricpotentialdifference.md): A unit of measure for electric potential difference.
