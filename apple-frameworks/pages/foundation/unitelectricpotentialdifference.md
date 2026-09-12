> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitelectricpotentialdifference](https://developer.apple.com/documentation/foundation/unitelectricpotentialdifference)

# UnitElectricPotentialDifference (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric potential difference.

## Declaration

```swift
class UnitElectricPotentialDifference
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitElectricPotentialDifference](unitelectricpotentialdifference.md) to represent specific quantities of electric potential difference using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Potential-Difference"></a>

### Electric Potential Difference

Electric potential difference is the amount of electric potential energy of a point charge at a point in space. The SI unit for electric potential difference is the volt (V), which is derived as the difference in electric potential energy between two points of a linear conductor when an electric current of one ampere dissipates one watt of power between those points (1V = 1W/1A).

The [UnitElectricPotentialDifference](unitelectricpotentialdifference.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [volts](unitelectricpotentialdifference/volts.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megavolts | [megavolts](unitelectricpotentialdifference/megavolts.md) | MV | `1000000.0` |
| Kilovolts | [kilovolts](unitelectricpotentialdifference/kilovolts.md) | kV | `1000.0` |
| Volts | [volts](unitelectricpotentialdifference/volts.md) | V | `1.0` |
| Millivolts | [millivolts](unitelectricpotentialdifference/millivolts.md) | mV | `0.001` |
| Microvolts | [microvolts](unitelectricpotentialdifference/microvolts.md) | µV | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megavolts](unitelectricpotentialdifference/megavolts.md): The megavolts unit of electric potential difference.
- [kilovolts](unitelectricpotentialdifference/kilovolts.md): The kilovolts unit of electric potential difference.
- [volts](unitelectricpotentialdifference/volts.md): The volts unit of electric potential difference.
- [millivolts](unitelectricpotentialdifference/millivolts.md): The millivolts unit of electric potential difference.
- [microvolts](unitelectricpotentialdifference/microvolts.md): The microvolts unit of electric potential difference.

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
- [UnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.

# NSUnitElectricPotentialDifference (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for electric potential difference.

## Declaration

```objectivec
@interface NSUnitElectricPotentialDifference : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitElectricPotentialDifference](unitelectricpotentialdifference.md) to represent specific quantities of electric potential difference using the [NSMeasurement](nsmeasurement.md) class.

<a id="Electric-Potential-Difference"></a>

### Electric Potential Difference

Electric potential difference is the amount of electric potential energy of a point charge at a point in space. The SI unit for electric potential difference is the volt (V), which is derived as the difference in electric potential energy between two points of a linear conductor when an electric current of one ampere dissipates one watt of power between those points (1V = 1W/1A).

The [NSUnitElectricPotentialDifference](unitelectricpotentialdifference.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [volts](unitelectricpotentialdifference/volts.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Megavolts | [megavolts](unitelectricpotentialdifference/megavolts.md) | MV | `1000000.0` |
| Kilovolts | [kilovolts](unitelectricpotentialdifference/kilovolts.md) | kV | `1000.0` |
| Volts | [volts](unitelectricpotentialdifference/volts.md) | V | `1.0` |
| Millivolts | [millivolts](unitelectricpotentialdifference/millivolts.md) | mV | `0.001` |
| Microvolts | [microvolts](unitelectricpotentialdifference/microvolts.md) | µV | `0.000001` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [megavolts](unitelectricpotentialdifference/megavolts.md): The megavolts unit of electric potential difference.
- [kilovolts](unitelectricpotentialdifference/kilovolts.md): The kilovolts unit of electric potential difference.
- [volts](unitelectricpotentialdifference/volts.md): The volts unit of electric potential difference.
- [millivolts](unitelectricpotentialdifference/millivolts.md): The millivolts unit of electric potential difference.
- [microvolts](unitelectricpotentialdifference/microvolts.md): The microvolts unit of electric potential difference.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Electricity

- [NSUnitElectricCharge](unitelectriccharge.md): A unit of measure for electric charge.
- [NSUnitElectricCurrent](unitelectriccurrent.md): A unit of measure for electric current.
- [NSUnitElectricResistance](unitelectricresistance.md): A unit of measure for electric resistance.
