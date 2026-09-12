> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitdispersion](https://developer.apple.com/documentation/foundation/unitdispersion)

# UnitDispersion (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for specific quantities of dispersion.

## Declaration

```swift
class UnitDispersion
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitDispersion](unitdispersion.md) to represent specific quantities of dispersion using the [NSMeasurement](nsmeasurement.md) class.

<a id="Dispersion"></a>

### Dispersion

Dispersion describes the amount of a constituent divided by the amount of all other constituents in a mixture. Dispersion is a dimensionless quantity that is commonly expressed in “parts-per” notation, such as “parts per million” (ppm), to describe small relative quantities.

The [UnitDispersion](unitdispersion.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [partsPerMillion](unitdispersion/partspermillion.md).

| Name | Method | Abbreviation |
| --- | --- | --- |
| Parts Per Million | [partsPerMillion](unitdispersion/partspermillion.md) | ppm |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [partsPerMillion](unitdispersion/partspermillion.md): The parts per million unit.

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

### Concentration and Dispersion

- [UnitConcentrationMass](unitconcentrationmass.md): A unit of measure for concentration of mass.

# NSUnitDispersion (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for specific quantities of dispersion.

## Declaration

```objectivec
@interface NSUnitDispersion : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitDispersion](unitdispersion.md) to represent specific quantities of dispersion using the [NSMeasurement](nsmeasurement.md) class.

<a id="Dispersion"></a>

### Dispersion

Dispersion describes the amount of a constituent divided by the amount of all other constituents in a mixture. Dispersion is a dimensionless quantity that is commonly expressed in “parts-per” notation, such as “parts per million” (ppm), to describe small relative quantities.

The [NSUnitDispersion](unitdispersion.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [partsPerMillion](unitdispersion/partspermillion.md).

| Name | Method | Abbreviation |
| --- | --- | --- |
| Parts Per Million | [partsPerMillion](unitdispersion/partspermillion.md) | ppm |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [partsPerMillion](unitdispersion/partspermillion.md): The parts per million unit.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Concentration and Dispersion

- [NSUnitConcentrationMass](unitconcentrationmass.md): A unit of measure for concentration of mass.
