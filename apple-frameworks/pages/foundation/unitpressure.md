> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitpressure](https://developer.apple.com/documentation/foundation/unitpressure)

# UnitPressure (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for pressure.

## Declaration

```swift
class UnitPressure
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitPressure](unitpressure.md) to represent specific quantities of pressure using the [NSMeasurement](nsmeasurement.md) class.

<a id="Pressure"></a>

### Pressure

Pressure is the normal force over a surface. The SI unit for pressure is the pascal (Pa), which is derived as one newton of force over one square meter (`1 Pa = 1 N / 1 m`2).

The [UnitPressure](unitpressure.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md) and provides the following units, which [UnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Definition |
| --- | --- | --- | --- |
| Newtons Per Meter Squared (Equivalent to Pascals) | [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md) | N/m² | `1.0` |
| Gigapascals | [gigapascals](unitpressure/gigapascals.md) | GPa | `1e9` |
| Megapascals | [megapascals](unitpressure/megapascals.md) | MPa | `1000000.0` |
| Kilopascals | [kilopascals](unitpressure/kilopascals.md) | kPa | `1000.0` |
| Hectopascals | [hectopascals](unitpressure/hectopascals.md) | hPa | `100.0` |
| Inches of Mercury | [inchesOfMercury](unitpressure/inchesofmercury.md) | inHg | `3386.39` |
| Bars | [bars](unitpressure/bars.md) | bar | `100000` |
| Millibars | [millibars](unitpressure/millibars.md) | mbar | `100` |
| Millimeters of Mercury | [millimetersOfMercury](unitpressure/millimetersofmercury.md) | mmHg | `133.322` |
| Pounds Per Square Inch | [poundsForcePerSquareInch](unitpressure/poundsforcepersquareinch.md) | psi | `6894.76` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [gigapascals](unitpressure/gigapascals.md): The gigapascals unit of pressure.
- [megapascals](unitpressure/megapascals.md): The megapascals unit of pressure.
- [kilopascals](unitpressure/kilopascals.md): The kilopascals unit of pressure.
- [hectopascals](unitpressure/hectopascals.md): The hectopascals unit of pressure.
- [inchesOfMercury](unitpressure/inchesofmercury.md): The inches of mercury unit of pressure.
- [bars](unitpressure/bars.md): The bars unit of pressure.
- [millibars](unitpressure/millibars.md): The millibars unit of pressure.
- [millimetersOfMercury](unitpressure/millimetersofmercury.md): The millimeters of mercury unit of pressure.
- [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md): The newtons per square meter unit of pressure.
- [poundsForcePerSquareInch](unitpressure/poundsforcepersquareinch.md): The pounds per square inch unit of pressure.

### Initializers

- [init(forLocale:usage:)](unitpressure/init%28forlocale_usage_%29.md): Creates a `UnitPressure` which the specified `locale` prefers for the specific `usage`.

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

- [UnitMass](unitmass.md): A unit of measure for mass.

# NSUnitPressure (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for pressure.

## Declaration

```objectivec
@interface NSUnitPressure : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitPressure](unitpressure.md) to represent specific quantities of pressure using the [NSMeasurement](nsmeasurement.md) class.

<a id="Pressure"></a>

### Pressure

Pressure is the normal force over a surface. The SI unit for pressure is the pascal (Pa), which is derived as one newton of force over one square meter (`1 Pa = 1 N / 1 m`2).

The [NSUnitPressure](unitpressure.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md) and provides the following units, which [NSUnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Definition |
| --- | --- | --- | --- |
| Newtons Per Meter Squared (Equivalent to Pascals) | [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md) | N/m² | `1.0` |
| Gigapascals | [gigapascals](unitpressure/gigapascals.md) | GPa | `1e9` |
| Megapascals | [megapascals](unitpressure/megapascals.md) | MPa | `1000000.0` |
| Kilopascals | [kilopascals](unitpressure/kilopascals.md) | kPa | `1000.0` |
| Hectopascals | [hectopascals](unitpressure/hectopascals.md) | hPa | `100.0` |
| Inches of Mercury | [inchesOfMercury](unitpressure/inchesofmercury.md) | inHg | `3386.39` |
| Bars | [bars](unitpressure/bars.md) | bar | `100000` |
| Millibars | [millibars](unitpressure/millibars.md) | mbar | `100` |
| Millimeters of Mercury | [millimetersOfMercury](unitpressure/millimetersofmercury.md) | mmHg | `133.322` |
| Pounds Per Square Inch | [poundsForcePerSquareInch](unitpressure/poundsforcepersquareinch.md) | psi | `6894.76` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [gigapascals](unitpressure/gigapascals.md): The gigapascals unit of pressure.
- [megapascals](unitpressure/megapascals.md): The megapascals unit of pressure.
- [kilopascals](unitpressure/kilopascals.md): The kilopascals unit of pressure.
- [hectopascals](unitpressure/hectopascals.md): The hectopascals unit of pressure.
- [inchesOfMercury](unitpressure/inchesofmercury.md): The inches of mercury unit of pressure.
- [bars](unitpressure/bars.md): The bars unit of pressure.
- [millibars](unitpressure/millibars.md): The millibars unit of pressure.
- [millimetersOfMercury](unitpressure/millimetersofmercury.md): The millimeters of mercury unit of pressure.
- [newtonsPerMetersSquared](unitpressure/newtonspermeterssquared.md): The newtons per square meter unit of pressure.
- [poundsForcePerSquareInch](unitpressure/poundsforcepersquareinch.md): The pounds per square inch unit of pressure.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Mass, Weight, and Force

- [NSUnitMass](unitmass.md): A unit of measure for mass.
