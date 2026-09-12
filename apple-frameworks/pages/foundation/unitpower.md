> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitpower](https://developer.apple.com/documentation/foundation/unitpower)

# UnitPower (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for power.

## Declaration

```swift
class UnitPower
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitPower](unitpower.md) to represent specific quantities of power using the [NSMeasurement](nsmeasurement.md) class.

<a id="Power"></a>

### Power

Power is the amount of energy used over time. The SI unit for power is the watt (W), which is derived as one joule per second (1W = 1J / 1s).

The [UnitPower](unitpower.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [watts](unitpower/watts.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Terawatts | [terawatts](unitpower/terawatts.md) | TW | `1e12` |
| Gigawatts | [gigawatts](unitpower/gigawatts.md) | GW | `1e9` |
| Megawatts | [megawatts](unitpower/megawatts.md) | MW | `1000000.0` |
| Kilowatts | [kilowatts](unitpower/kilowatts.md) | kW | `1000.0` |
| Watts | [watts](unitpower/watts.md) | W | `1` |
| Milliwatts | [milliwatts](unitpower/milliwatts.md) | mW | `0.001` |
| Microwatts | [microwatts](unitpower/microwatts.md) | µW | `0.000001` |
| Nanowatts | [nanowatts](unitpower/nanowatts.md) | nW | `1e-9` |
| Picowatts | [picowatts](unitpower/picowatts.md) | pW | `1e-12` |
| Femtowatts | [femtowatts](unitpower/femtowatts.md) | fW | `1e-15` |
| Horsepower | [horsepower](unitpower/horsepower.md) | hp | `745.7` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [terawatts](unitpower/terawatts.md): The terawatts unit of power.
- [gigawatts](unitpower/gigawatts.md): The gigawatts unit of power.
- [megawatts](unitpower/megawatts.md): The megawatts unit of power.
- [kilowatts](unitpower/kilowatts.md): The kilowatts unit of power.
- [watts](unitpower/watts.md): The watts unit of power.
- [milliwatts](unitpower/milliwatts.md): The milliwatts unit of power.
- [microwatts](unitpower/microwatts.md): The microwatts unit of power.
- [nanowatts](unitpower/nanowatts.md): The nanowatts unit of power.
- [picowatts](unitpower/picowatts.md): The picowatts unit of power.
- [femtowatts](unitpower/femtowatts.md): The femtowatts unit of power.
- [horsepower](unitpower/horsepower.md): The horsepower unit of power.

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

### Energy, Heat, and Light

- [UnitEnergy](unitenergy.md): A unit of measure for energy.
- [UnitTemperature](unittemperature.md): A unit of measure for temperature.
- [UnitIlluminance](unitilluminance.md): A unit of measure for illuminance.

# NSUnitPower (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for power.

## Declaration

```objectivec
@interface NSUnitPower : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitPower](unitpower.md) to represent specific quantities of power using the [NSMeasurement](nsmeasurement.md) class.

<a id="Power"></a>

### Power

Power is the amount of energy used over time. The SI unit for power is the watt (W), which is derived as one joule per second (1W = 1J / 1s).

The [NSUnitPower](unitpower.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [watts](unitpower/watts.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Terawatts | [terawatts](unitpower/terawatts.md) | TW | `1e12` |
| Gigawatts | [gigawatts](unitpower/gigawatts.md) | GW | `1e9` |
| Megawatts | [megawatts](unitpower/megawatts.md) | MW | `1000000.0` |
| Kilowatts | [kilowatts](unitpower/kilowatts.md) | kW | `1000.0` |
| Watts | [watts](unitpower/watts.md) | W | `1` |
| Milliwatts | [milliwatts](unitpower/milliwatts.md) | mW | `0.001` |
| Microwatts | [microwatts](unitpower/microwatts.md) | µW | `0.000001` |
| Nanowatts | [nanowatts](unitpower/nanowatts.md) | nW | `1e-9` |
| Picowatts | [picowatts](unitpower/picowatts.md) | pW | `1e-12` |
| Femtowatts | [femtowatts](unitpower/femtowatts.md) | fW | `1e-15` |
| Horsepower | [horsepower](unitpower/horsepower.md) | hp | `745.7` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [terawatts](unitpower/terawatts.md): The terawatts unit of power.
- [gigawatts](unitpower/gigawatts.md): The gigawatts unit of power.
- [megawatts](unitpower/megawatts.md): The megawatts unit of power.
- [kilowatts](unitpower/kilowatts.md): The kilowatts unit of power.
- [watts](unitpower/watts.md): The watts unit of power.
- [milliwatts](unitpower/milliwatts.md): The milliwatts unit of power.
- [microwatts](unitpower/microwatts.md): The microwatts unit of power.
- [nanowatts](unitpower/nanowatts.md): The nanowatts unit of power.
- [picowatts](unitpower/picowatts.md): The picowatts unit of power.
- [femtowatts](unitpower/femtowatts.md): The femtowatts unit of power.
- [horsepower](unitpower/horsepower.md): The horsepower unit of power.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Energy, Heat, and Light

- [NSUnitEnergy](unitenergy.md): A unit of measure for energy.
- [NSUnitTemperature](unittemperature.md): A unit of measure for temperature.
- [NSUnitIlluminance](unitilluminance.md): A unit of measure for illuminance.
