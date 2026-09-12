> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitilluminance](https://developer.apple.com/documentation/foundation/unitilluminance)

# UnitIlluminance (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for illuminance.

## Declaration

```swift
class UnitIlluminance
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitIlluminance](unitilluminance.md) to represent specific quantities of illuminance using the [NSMeasurement](nsmeasurement.md) class.

<a id="Illuminance"></a>

### Illuminance

Illuminance is the luminous flux incident on a surface. The SI unit for illuminance is the lux (lx), which is derived as one lumen per square meter (1lm / 1m2).

The [UnitIlluminance](unitilluminance.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [lux](unitilluminance/lux.md).

| Name | Method | Symbol |
| --- | --- | --- |
| Lux | [lux](unitilluminance/lux.md) | lx |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accesing Predefined Units

- [lux](unitilluminance/lux.md): The lux unit of illuminance.

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
- [UnitTemperature](unittemperature.md): A unit of measure for temperature.

# NSUnitIlluminance (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for illuminance.

## Declaration

```objectivec
@interface NSUnitIlluminance : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitIlluminance](unitilluminance.md) to represent specific quantities of illuminance using the [NSMeasurement](nsmeasurement.md) class.

<a id="Illuminance"></a>

### Illuminance

Illuminance is the luminous flux incident on a surface. The SI unit for illuminance is the lux (lx), which is derived as one lumen per square meter (1lm / 1m2).

The [NSUnitIlluminance](unitilluminance.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [lux](unitilluminance/lux.md).

| Name | Method | Symbol |
| --- | --- | --- |
| Lux | [lux](unitilluminance/lux.md) | lx |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accesing Predefined Units

- [lux](unitilluminance/lux.md): The lux unit of illuminance.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Energy, Heat, and Light

- [NSUnitEnergy](unitenergy.md): A unit of measure for energy.
- [NSUnitPower](unitpower.md): A unit of measure for power.
- [NSUnitTemperature](unittemperature.md): A unit of measure for temperature.
