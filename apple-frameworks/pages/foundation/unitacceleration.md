> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitacceleration](https://developer.apple.com/documentation/foundation/unitacceleration)

# UnitAcceleration (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for acceleration.

## Declaration

```swift
class UnitAcceleration
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitAcceleration](unitacceleration.md) to represent specific quantities of acceleration using the [NSMeasurement](nsmeasurement.md) class.

<a id="Acceleration"></a>

### Acceleration

Acceleration is the rate of change of velocity. Acceleration can be expressed by SI derived units in terms of meters per second squared (m/s2).

The [UnitAcceleration](unitacceleration.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Meters Per Second Squared | [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md) | m/s² | `1.0` |
| Gravity | [gravity](unitacceleration/gravity.md) | g | `9.81` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md): Returns the meter per second squared unit of acceleration.
- [gravity](unitacceleration/gravity.md): Returns the gravity unit of acceleration.

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

### Time and Motion

- [UnitDuration](unitduration.md): A unit of measure for a duration of time.
- [UnitFrequency](unitfrequency.md): A unit of measure for frequency.
- [UnitSpeed](unitspeed.md): A unit of measure for speed.

# NSUnitAcceleration (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for acceleration.

## Declaration

```objectivec
@interface NSUnitAcceleration : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitAcceleration](unitacceleration.md) to represent specific quantities of acceleration using the [NSMeasurement](nsmeasurement.md) class.

<a id="Acceleration"></a>

### Acceleration

Acceleration is the rate of change of velocity. Acceleration can be expressed by SI derived units in terms of meters per second squared (m/s2).

The [NSUnitAcceleration](unitacceleration.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Meters Per Second Squared | [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md) | m/s² | `1.0` |
| Gravity | [gravity](unitacceleration/gravity.md) | g | `9.81` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [metersPerSecondSquared](unitacceleration/meterspersecondsquared.md): Returns the meter per second squared unit of acceleration.
- [gravity](unitacceleration/gravity.md): Returns the gravity unit of acceleration.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Time and Motion

- [NSUnitDuration](unitduration.md): A unit of measure for a duration of time.
- [NSUnitFrequency](unitfrequency.md): A unit of measure for frequency.
- [NSUnitSpeed](unitspeed.md): A unit of measure for speed.
