> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitfuelefficiency](https://developer.apple.com/documentation/foundation/unitfuelefficiency)

# UnitFuelEfficiency (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for fuel efficiency.

## Declaration

```swift
class UnitFuelEfficiency
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitFuelEfficiency](unitfuelefficiency.md) to represent specific quantities of fuel efficiency using the [NSMeasurement](nsmeasurement.md) class.

<a id="Fuel-Efficiency"></a>

### Fuel Efficiency

Fuel efficiency corresponds to the thermal efficiency of a process that converts the chemical potential energy of a fuel into kinetic energy. Fuel efficiency can be expressed by SI derived units in terms of cubic meters per meter (m3/m), but is more commonly expressed in terms of liters per kilometer (L/km) and miles per gallon (mpg).

The [UnitFuelEfficiency](unitfuelefficiency.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md), and provides the following units:

| Name | Method | Symbol |
| --- | --- | --- |
| Liters Per 100 Kilometers | [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md) | L/100km |
| Miles Per Gallon | [milesPerGallon](unitfuelefficiency/milespergallon.md) | mpg |
| Miles Per Imperial Gallon | [milesPerImperialGallon](unitfuelefficiency/milesperimperialgallon.md) | mpg |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [milesPerImperialGallon](unitfuelefficiency/milesperimperialgallon.md): The miles per imperial gallon unit of fuel efficiency.
- [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md): The liters per 100 kilometers unit of fuel efficiency.
- [milesPerGallon](unitfuelefficiency/milespergallon.md): The miles per gallon unit of fuel efficiency.

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

# NSUnitFuelEfficiency (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for fuel efficiency.

## Declaration

```objectivec
@interface NSUnitFuelEfficiency : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitFuelEfficiency](unitfuelefficiency.md) to represent specific quantities of fuel efficiency using the [NSMeasurement](nsmeasurement.md) class.

<a id="Fuel-Efficiency"></a>

### Fuel Efficiency

Fuel efficiency corresponds to the thermal efficiency of a process that converts the chemical potential energy of a fuel into kinetic energy. Fuel efficiency can be expressed by SI derived units in terms of cubic meters per meter (m3/m), but is more commonly expressed in terms of liters per kilometer (L/km) and miles per gallon (mpg).

The [NSUnitFuelEfficiency](unitfuelefficiency.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md), and provides the following units:

| Name | Method | Symbol |
| --- | --- | --- |
| Liters Per 100 Kilometers | [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md) | L/100km |
| Miles Per Gallon | [milesPerGallon](unitfuelefficiency/milespergallon.md) | mpg |
| Miles Per Imperial Gallon | [milesPerImperialGallon](unitfuelefficiency/milesperimperialgallon.md) | mpg |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [milesPerImperialGallon](unitfuelefficiency/milesperimperialgallon.md): The miles per imperial gallon unit of fuel efficiency.
- [litersPer100Kilometers](unitfuelefficiency/litersper100kilometers.md): The liters per 100 kilometers unit of fuel efficiency.
- [milesPerGallon](unitfuelefficiency/milespergallon.md): The miles per gallon unit of fuel efficiency.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)
