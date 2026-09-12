> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitconcentrationmass](https://developer.apple.com/documentation/foundation/unitconcentrationmass)

# UnitConcentrationMass (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for concentration of mass.

## Declaration

```swift
class UnitConcentrationMass
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitConcentrationMass](unitconcentrationmass.md) to represent specific quantities of concentration using the [NSMeasurement](nsmeasurement.md) class.

<a id="Concentration-of-Mass"></a>

### Concentration of Mass

Concentration is the abundance of a constituent within a volume. Concentration can be expressed by SI derived units in terms of kilograms per cubic meter (kg/m3).

The [UnitConcentrationMass](unitconcentrationmass.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [gramsPerLiter](unitconcentrationmass/gramsperliter.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Grams Per Liter | [gramsPerLiter](unitconcentrationmass/gramsperliter.md) | g/L | `1` |
| Milligrams Per Deciliter | [milligramsPerDeciliter](unitconcentrationmass/milligramsperdeciliter.md) | mg/dL | `0.01` |
| Millimoles Per Liter | [millimolesPerLiter(withGramsPerMole:)](unitconcentrationmass/millimolesperliter%28withgramspermole_%29.md) | mmol/L | `18 * gramsPerMole` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [gramsPerLiter](unitconcentrationmass/gramsperliter.md): The grams per liter unit of concentration.
- [milligramsPerDeciliter](unitconcentrationmass/milligramsperdeciliter.md): The milligrams per deciliter unit of concentration.
- [millimolesPerLiter(withGramsPerMole:)](unitconcentrationmass/millimolesperliter%28withgramspermole_%29.md): Returns the millimoles per liter unit with the specified number of grams per mole.

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

- [UnitDispersion](unitdispersion.md): A unit of measure for specific quantities of dispersion.

# NSUnitConcentrationMass (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for concentration of mass.

## Declaration

```objectivec
@interface NSUnitConcentrationMass : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitConcentrationMass](unitconcentrationmass.md) to represent specific quantities of concentration using the [NSMeasurement](nsmeasurement.md) class.

<a id="Concentration-of-Mass"></a>

### Concentration of Mass

Concentration is the abundance of a constituent within a volume. Concentration can be expressed by SI derived units in terms of kilograms per cubic meter (kg/m3).

The [NSUnitConcentrationMass](unitconcentrationmass.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [gramsPerLiter](unitconcentrationmass/gramsperliter.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Grams Per Liter | [gramsPerLiter](unitconcentrationmass/gramsperliter.md) | g/L | `1` |
| Milligrams Per Deciliter | [milligramsPerDeciliter](unitconcentrationmass/milligramsperdeciliter.md) | mg/dL | `0.01` |
| Millimoles Per Liter | [millimolesPerLiterWithGramsPerMole:](unitconcentrationmass/millimolesperliter%28withgramspermole_%29.md) | mmol/L | `18 * gramsPerMole` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [gramsPerLiter](unitconcentrationmass/gramsperliter.md): The grams per liter unit of concentration.
- [milligramsPerDeciliter](unitconcentrationmass/milligramsperdeciliter.md): The milligrams per deciliter unit of concentration.
- [millimolesPerLiterWithGramsPerMole:](unitconcentrationmass/millimolesperliter%28withgramspermole_%29.md): Returns the millimoles per liter unit with the specified number of grams per mole.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Concentration and Dispersion

- [NSUnitDispersion](unitdispersion.md): A unit of measure for specific quantities of dispersion.
