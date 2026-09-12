> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitmass](https://developer.apple.com/documentation/foundation/unitmass)

# UnitMass (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for mass.

## Declaration

```swift
class UnitMass
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitMass](unitmass.md) to represent specific quantities of mass using the [NSMeasurement](nsmeasurement.md) class.

<a id="Mass"></a>

### Mass

Mass is a fundamental property of matter that causes it to resist a force accelerating it. The SI unit for mass is the kilogram (kg), which defined in terms of the mass of the international prototype kilogram.

The [UnitMass](unitmass.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [kilograms](unitmass/kilograms.md), and provides the following units, which [UnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Kilograms | [kilograms](unitmass/kilograms.md) | kg | `1.0` |
| Grams | [grams](unitmass/grams.md) | g | `0.001` |
| Decigrams | [decigrams](unitmass/decigrams.md) | dg | `0.0001` |
| Centigrams | [centigrams](unitmass/centigrams.md) | cg | `0.00001` |
| Milligrams | [milligrams](unitmass/milligrams.md) | mg | `0.000001` |
| Micrograms | [micrograms](unitmass/micrograms.md) | µg | `1e-9` |
| Nanograms | [nanograms](unitmass/nanograms.md) | ng | `1e-12` |
| Picograms | [picograms](unitmass/picograms.md) | pg | `1e-15` |
| Ounces | [ounces](unitmass/ounces.md) | oz | `0.0283495` |
| Pounds | [pounds](unitmass/pounds.md) | lb | `0.453592` |
| Stones | [stones](unitmass/stones.md) | st | `0.157473` |
| Metric Tons | [metricTons](unitmass/metrictons.md) | t | `1000` |
| Short Tons | [shortTons](unitmass/shorttons.md) | ton | `907.185` |
| Carats | [carats](unitmass/carats.md) | ct | `0.0002` |
| Ounces Troy | [ouncesTroy](unitmass/ouncestroy.md) | oz t | `0.03110348` |
| Slugs | [slugs](unitmass/slugs.md) | slug | `14.5939` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kilograms](unitmass/kilograms.md): The kilograms unit of mass.
- [grams](unitmass/grams.md): The grams unit of mass.
- [decigrams](unitmass/decigrams.md): The decigrams unit of mass.
- [centigrams](unitmass/centigrams.md): The centigrams unit of mass.
- [milligrams](unitmass/milligrams.md): The milligrams unit of mass.
- [micrograms](unitmass/micrograms.md): The micrograms unit of mass.
- [nanograms](unitmass/nanograms.md): The nanograms unit of mass.
- [picograms](unitmass/picograms.md): The picograms unit of mass.
- [ounces](unitmass/ounces.md): The ounces unit of mass.
- [pounds](1808594-pounds.md): Returns the pounds unit of mass.
- [pounds](unitmass/pounds.md): The pounds unit of mass.
- [stones](unitmass/stones.md): The stone unit of mass.
- [metricTons](unitmass/metrictons.md): The metric tons unit of mass.
- [shortTons](unitmass/shorttons.md): The short tons unit of mass.
- [carats](unitmass/carats.md): The carats unit of mass.
- [ouncesTroy](unitmass/ouncestroy.md): The ounces troy unit of mass.
- [slugs](unitmass/slugs.md): The slugs unit of mass.

### Initializers

- [init(forLocale:usage:)](unitmass/init%28forlocale_usage_%29.md): Creates a `UnitMass` which the specified `locale` prefers for the specific `usage`.

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

### Mass, Weight, and Force

- [UnitPressure](unitpressure.md): A unit of measure for pressure.

# NSUnitMass (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for mass.

## Declaration

```objectivec
@interface NSUnitMass : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitMass](unitmass.md) to represent specific quantities of mass using the [NSMeasurement](nsmeasurement.md) class.

<a id="Mass"></a>

### Mass

Mass is a fundamental property of matter that causes it to resist a force accelerating it. The SI unit for mass is the kilogram (kg), which defined in terms of the mass of the international prototype kilogram.

The [NSUnitMass](unitmass.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [kilograms](unitmass/kilograms.md), and provides the following units, which [NSUnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Kilograms | [kilograms](unitmass/kilograms.md) | kg | `1.0` |
| Grams | [grams](unitmass/grams.md) | g | `0.001` |
| Decigrams | [decigrams](unitmass/decigrams.md) | dg | `0.0001` |
| Centigrams | [centigrams](unitmass/centigrams.md) | cg | `0.00001` |
| Milligrams | [milligrams](unitmass/milligrams.md) | mg | `0.000001` |
| Micrograms | [micrograms](unitmass/micrograms.md) | µg | `1e-9` |
| Nanograms | [nanograms](unitmass/nanograms.md) | ng | `1e-12` |
| Picograms | [picograms](unitmass/picograms.md) | pg | `1e-15` |
| Ounces | [ounces](unitmass/ounces.md) | oz | `0.0283495` |
| Pounds | [poundsMass](unitmass/pounds.md) | lb | `0.453592` |
| Stones | [stones](unitmass/stones.md) | st | `0.157473` |
| Metric Tons | [metricTons](unitmass/metrictons.md) | t | `1000` |
| Short Tons | [shortTons](unitmass/shorttons.md) | ton | `907.185` |
| Carats | [carats](unitmass/carats.md) | ct | `0.0002` |
| Ounces Troy | [ouncesTroy](unitmass/ouncestroy.md) | oz t | `0.03110348` |
| Slugs | [slugs](unitmass/slugs.md) | slug | `14.5939` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [kilograms](unitmass/kilograms.md): The kilograms unit of mass.
- [grams](unitmass/grams.md): The grams unit of mass.
- [decigrams](unitmass/decigrams.md): The decigrams unit of mass.
- [centigrams](unitmass/centigrams.md): The centigrams unit of mass.
- [milligrams](unitmass/milligrams.md): The milligrams unit of mass.
- [micrograms](unitmass/micrograms.md): The micrograms unit of mass.
- [nanograms](unitmass/nanograms.md): The nanograms unit of mass.
- [picograms](unitmass/picograms.md): The picograms unit of mass.
- [ounces](unitmass/ounces.md): The ounces unit of mass.
- [pounds](1808594-pounds.md): Returns the pounds unit of mass.
- [poundsMass](unitmass/pounds.md): The pounds unit of mass.
- [stones](unitmass/stones.md): The stone unit of mass.
- [metricTons](unitmass/metrictons.md): The metric tons unit of mass.
- [shortTons](unitmass/shorttons.md): The short tons unit of mass.
- [carats](unitmass/carats.md): The carats unit of mass.
- [ouncesTroy](unitmass/ouncestroy.md): The ounces troy unit of mass.
- [slugs](unitmass/slugs.md): The slugs unit of mass.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Mass, Weight, and Force

- [NSUnitPressure](unitpressure.md): A unit of measure for pressure.
