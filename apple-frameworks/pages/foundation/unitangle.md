> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitangle](https://developer.apple.com/documentation/foundation/unitangle)

# UnitAngle (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for planar angle and rotation.

## Declaration

```swift
class UnitAngle
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitAngle](unitangle.md) to represent specific quantities of planar angle using the [NSMeasurement](nsmeasurement.md) class.

<a id="Angle"></a>

### Angle

Angle is a quantity of rotation. The SI unit for angle is the radian (rad), which is dimensionless and defined to be the angle subtended by an arc that is equal in length to the radius of a circle. Angle is also commonly expressed in terms of degrees (°) and revolutions (rev).

The [UnitAngle](unitangle.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [degrees](unitangle/degrees.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Definition |
| --- | --- | --- | --- |
| Degrees | [degrees](unitangle/degrees.md) | ° | `1.0` |
| Arc Minutes | [arcMinutes](unitangle/arcminutes.md) | ʹ | `0.016667` |
| Arc Seconds | [arcSeconds](unitangle/arcseconds.md) | ʺ | `0.00027778` |
| Radians | [radians](unitangle/radians.md) | rad | `57.2958` |
| Gradians | [gradians](unitangle/gradians.md) | grad | `0.9` |
| Revolutions | [revolutions](unitangle/revolutions.md) | rev | `360` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [degrees](unitangle/degrees.md): The degrees unit of angle.
- [arcMinutes](unitangle/arcminutes.md): The arc minutes unit of angle.
- [arcSeconds](unitangle/arcseconds.md): The arc seconds unit of angle.
- [radians](unitangle/radians.md): The radians unit of angle.
- [gradians](unitangle/gradians.md): The gradians unit of angle.
- [revolutions](unitangle/revolutions.md): The revolutions unit of angle.

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

### Physical Dimension

- [UnitArea](unitarea.md): A unit of measure for area.
- [UnitLength](unitlength.md): A unit of measure for length.
- [UnitVolume](unitvolume.md): A unit of measure for volume.

# NSUnitAngle (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for planar angle and rotation.

## Declaration

```objectivec
@interface NSUnitAngle : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitAngle](unitangle.md) to represent specific quantities of planar angle using the [NSMeasurement](nsmeasurement.md) class.

<a id="Angle"></a>

### Angle

Angle is a quantity of rotation. The SI unit for angle is the radian (rad), which is dimensionless and defined to be the angle subtended by an arc that is equal in length to the radius of a circle. Angle is also commonly expressed in terms of degrees (°) and revolutions (rev).

The [NSUnitAngle](unitangle.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [degrees](unitangle/degrees.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Definition |
| --- | --- | --- | --- |
| Degrees | [degrees](unitangle/degrees.md) | ° | `1.0` |
| Arc Minutes | [arcMinutes](unitangle/arcminutes.md) | ʹ | `0.016667` |
| Arc Seconds | [arcSeconds](unitangle/arcseconds.md) | ʺ | `0.00027778` |
| Radians | [radians](unitangle/radians.md) | rad | `57.2958` |
| Gradians | [gradians](unitangle/gradians.md) | grad | `0.9` |
| Revolutions | [revolutions](unitangle/revolutions.md) | rev | `360` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [degrees](unitangle/degrees.md): The degrees unit of angle.
- [arcMinutes](unitangle/arcminutes.md): The arc minutes unit of angle.
- [arcSeconds](unitangle/arcseconds.md): The arc seconds unit of angle.
- [radians](unitangle/radians.md): The radians unit of angle.
- [gradians](unitangle/gradians.md): The gradians unit of angle.
- [revolutions](unitangle/revolutions.md): The revolutions unit of angle.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Physical Dimension

- [NSUnitArea](unitarea.md): A unit of measure for area.
- [NSUnitLength](unitlength.md): A unit of measure for length.
- [NSUnitVolume](unitvolume.md): A unit of measure for volume.
