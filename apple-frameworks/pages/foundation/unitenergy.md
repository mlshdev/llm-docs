> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitenergy](https://developer.apple.com/documentation/foundation/unitenergy)

# UnitEnergy (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for energy.

## Declaration

```swift
class UnitEnergy
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitEnergy](unitenergy.md) to represent specific quantities of energy using the [NSMeasurement](nsmeasurement.md) class.

<a id="Energy"></a>

### Energy

Energy is a fundamental property of matter than can be transferred and converted into different forms, such as kinetic, electric, and thermal. The SI unit for energy is the joule (J), which is derived as the work of one meter of displacement in the direction of a force of one newton (1J = 1N ∙ 1m). It can also be derived as the work required to displace an electric charge of one coulomb through an electrical potential difference of one volt (1J = 1C ∙ 1V), or the work required to produce one watt of power for one second (1J = 1W ∙ 1s). Energy is also commonly expressed in terms of the calorie (cal), or the energy needed to raise the temperature of one gram of water by one degree Celsius at a pressure of one atmosphere (1cal ≡ 4.184J).

The [UnitEnergy](unitenergy.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [joules](unitenergy/joules.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Kilojoules | [kilojoules](unitenergy/kilojoules.md) | kJ | `1000.0` |
| Joules | [joules](unitenergy/joules.md) | J | `1.0` |
| Kilocalories | [kilocalories](unitenergy/kilocalories.md) | kCal | `4184.0` |
| Calories | [calories](unitenergy/calories.md) | cal | `4.184` |
| Kilowatt Hours | [kilowattHours](unitenergy/kilowatthours.md) | kWh | `3600000.0` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kilojoules](unitenergy/kilojoules.md): The kilojoules unit of energy.
- [joules](unitenergy/joules.md): The joules unit of energy.
- [kilocalories](unitenergy/kilocalories.md): The kilocalories unit of energy.
- [calories](unitenergy/calories.md): The calories unit of energy.
- [kilowattHours](unitenergy/kilowatthours.md): The kilowatt hours unit of energy.

### Classes

- [UnitEnergy.EnergyKit](unitenergy/energykit.md)

### Initializers

- [init(forLocale:usage:)](unitenergy/init%28forlocale_usage_%29.md): Creates a `UnitEnergy` which the specified `locale` prefers for the specific `usage`.

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

- [UnitPower](unitpower.md): A unit of measure for power.
- [UnitTemperature](unittemperature.md): A unit of measure for temperature.
- [UnitIlluminance](unitilluminance.md): A unit of measure for illuminance.

# NSUnitEnergy (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for energy.

## Declaration

```objectivec
@interface NSUnitEnergy : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitEnergy](unitenergy.md) to represent specific quantities of energy using the [NSMeasurement](nsmeasurement.md) class.

<a id="Energy"></a>

### Energy

Energy is a fundamental property of matter than can be transferred and converted into different forms, such as kinetic, electric, and thermal. The SI unit for energy is the joule (J), which is derived as the work of one meter of displacement in the direction of a force of one newton (1J = 1N ∙ 1m). It can also be derived as the work required to displace an electric charge of one coulomb through an electrical potential difference of one volt (1J = 1C ∙ 1V), or the work required to produce one watt of power for one second (1J = 1W ∙ 1s). Energy is also commonly expressed in terms of the calorie (cal), or the energy needed to raise the temperature of one gram of water by one degree Celsius at a pressure of one atmosphere (1cal ≡ 4.184J).

The [NSUnitEnergy](unitenergy.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [joules](unitenergy/joules.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Kilojoules | [kilojoules](unitenergy/kilojoules.md) | kJ | `1000.0` |
| Joules | [joules](unitenergy/joules.md) | J | `1.0` |
| Kilocalories | [kilocalories](unitenergy/kilocalories.md) | kCal | `4184.0` |
| Calories | [calories](unitenergy/calories.md) | cal | `4.184` |
| Kilowatt Hours | [kilowattHours](unitenergy/kilowatthours.md) | kWh | `3600000.0` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kilojoules](unitenergy/kilojoules.md): The kilojoules unit of energy.
- [joules](unitenergy/joules.md): The joules unit of energy.
- [kilocalories](unitenergy/kilocalories.md): The kilocalories unit of energy.
- [calories](unitenergy/calories.md): The calories unit of energy.
- [kilowattHours](unitenergy/kilowatthours.md): The kilowatt hours unit of energy.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Energy, Heat, and Light

- [NSUnitPower](unitpower.md): A unit of measure for power.
- [NSUnitTemperature](unittemperature.md): A unit of measure for temperature.
- [NSUnitIlluminance](unitilluminance.md): A unit of measure for illuminance.
