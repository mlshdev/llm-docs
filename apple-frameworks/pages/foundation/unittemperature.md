> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unittemperature](https://developer.apple.com/documentation/foundation/unittemperature)

# UnitTemperature (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for temperature.

## Declaration

```swift
class UnitTemperature
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitTemperature](unittemperature.md) to represent specific quantities of temperature using the [NSMeasurement](nsmeasurement.md) class.

<a id="Temperature"></a>

### Temperature

Temperature is a comparative measure of thermal energy. The SI unit for temperature is the kelvin (K), which is defined in terms of the triple point of water. Temperature is also commonly measured by degrees of various scales, including Celsius (°C) and Fahrenheit (°F).

The [UnitTemperature](unittemperature.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) to be [kelvin](unittemperature/kelvin.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients and constants:

| Name | Method | Symbol | Coefficient | Constant |
| --- | --- | --- | --- | --- |
| Kelvin | [kelvin](unittemperature/kelvin.md) | K | `1` | `0` |
| Degree Celsius | [celsius](unittemperature/celsius.md) | °C | `1.0` | `273.15` |
| Degree Fahrenheit | [fahrenheit](unittemperature/fahrenheit.md) | °F | `0.55555555555556` | `255.37222222222427` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kelvin](unittemperature/kelvin.md): The kelvin unit of temperature.
- [celsius](unittemperature/celsius.md): The degree Celsius unit of temperature.
- [fahrenheit](unittemperature/fahrenheit.md): The degree Fahrenheit unit of temperature.

### Initializers

- [init(forLocale:usage:)](unittemperature/init%28forlocale_usage_%29.md): Creates a `UnitTemperature` which the specified `locale` prefers for the specific `usage`.

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
- [UnitPower](unitpower.md): A unit of measure for power.
- [UnitIlluminance](unitilluminance.md): A unit of measure for illuminance.

# NSUnitTemperature (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for temperature.

## Declaration

```objectivec
@interface NSUnitTemperature : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitTemperature](unittemperature.md) to represent specific quantities of temperature using the [NSMeasurement](nsmeasurement.md) class.

<a id="Temperature"></a>

### Temperature

Temperature is a comparative measure of thermal energy. The SI unit for temperature is the kelvin (K), which is defined in terms of the triple point of water. Temperature is also commonly measured by degrees of various scales, including Celsius (°C) and Fahrenheit (°F).

The [NSUnitTemperature](unittemperature.md) class defines its [baseUnit](dimension/baseunit%28%29.md) to be [kelvin](unittemperature/kelvin.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients and constants:

| Name | Method | Symbol | Coefficient | Constant |
| --- | --- | --- | --- | --- |
| Kelvin | [kelvin](unittemperature/kelvin.md) | K | `1` | `0` |
| Degree Celsius | [celsius](unittemperature/celsius.md) | °C | `1.0` | `273.15` |
| Degree Fahrenheit | [fahrenheit](unittemperature/fahrenheit.md) | °F | `0.55555555555556` | `255.37222222222427` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kelvin](unittemperature/kelvin.md): The kelvin unit of temperature.
- [celsius](unittemperature/celsius.md): The degree Celsius unit of temperature.
- [fahrenheit](unittemperature/fahrenheit.md): The degree Fahrenheit unit of temperature.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Energy, Heat, and Light

- [NSUnitEnergy](unitenergy.md): A unit of measure for energy.
- [NSUnitPower](unitpower.md): A unit of measure for power.
- [NSUnitIlluminance](unitilluminance.md): A unit of measure for illuminance.
