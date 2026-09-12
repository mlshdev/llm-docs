> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitspeed](https://developer.apple.com/documentation/foundation/unitspeed)

# UnitSpeed (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for speed.

## Declaration

```swift
class UnitSpeed
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitSpeed](unitspeed.md) to represent specific quantities of speed using the [NSMeasurement](nsmeasurement.md) class.

<a id="Speed"></a>

### Speed

Speed is the magnitude of velocity, or the rate of change of position. Speed can be expressed by SI derived units in terms of meters per second (m/s), and is also commonly expressed in terms of kilometers per hour (km/h) and miles per hour (mph).

The [UnitSpeed](unitspeed.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [metersPerSecond](unitspeed/meterspersecond.md), and provides the following units, which are initialized using [UnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Meters Per Second | [metersPerSecond](unitspeed/meterspersecond.md) | m/s | `1.0` |
| Kilometers Per Hour | [kilometersPerHour](unitspeed/kilometersperhour.md) | km/h | `0.277778` |
| Miles Per Hour | [milesPerHour](unitspeed/milesperhour.md) | mph | `0.44704` |
| Knots | [knots](unitspeed/knots.md) | kn | `0.514444` |

The base unit is [metersPerSecond](unitspeed/meterspersecond.md) and is accessed via [baseUnit()](dimension/baseunit%28%29.md) on the [Dimension](dimension.md) protocol.

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [metersPerSecond](unitspeed/meterspersecond.md): The meter per second unit of speed.
- [kilometersPerHour](unitspeed/kilometersperhour.md): The kilometers per hour unit of speed.
- [milesPerHour](unitspeed/milesperhour.md): The miles per hour unit of speed.
- [knots](unitspeed/knots.md): The knots unit of speed.

### Initializers

- [init(forLocale:usage:)](unitspeed/init%28forlocale_usage_%29.md): Creates a `UnitSpeed` which the specified `locale` prefers for the specific `usage`.

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

- [UnitAcceleration](unitacceleration.md): A unit of measure for acceleration.
- [UnitDuration](unitduration.md): A unit of measure for a duration of time.
- [UnitFrequency](unitfrequency.md): A unit of measure for frequency.

# NSUnitSpeed (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for speed.

## Declaration

```objectivec
@interface NSUnitSpeed : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitSpeed](unitspeed.md) to represent specific quantities of speed using the [NSMeasurement](nsmeasurement.md) class.

<a id="Speed"></a>

### Speed

Speed is the magnitude of velocity, or the rate of change of position. Speed can be expressed by SI derived units in terms of meters per second (m/s), and is also commonly expressed in terms of kilometers per hour (km/h) and miles per hour (mph).

The [NSUnitSpeed](unitspeed.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [metersPerSecond](unitspeed/meterspersecond.md), and provides the following units, which are initialized using [NSUnitConverterLinear](unitconverterlinear.md) converters with the specified coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Meters Per Second | [metersPerSecond](unitspeed/meterspersecond.md) | m/s | `1.0` |
| Kilometers Per Hour | [kilometersPerHour](unitspeed/kilometersperhour.md) | km/h | `0.277778` |
| Miles Per Hour | [milesPerHour](unitspeed/milesperhour.md) | mph | `0.44704` |
| Knots | [knots](unitspeed/knots.md) | kn | `0.514444` |

The base unit is [metersPerSecond](unitspeed/meterspersecond.md) and is accessed via [baseUnit](dimension/baseunit%28%29.md) on the [NSDimension](dimension.md) protocol.

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [metersPerSecond](unitspeed/meterspersecond.md): The meter per second unit of speed.
- [kilometersPerHour](unitspeed/kilometersperhour.md): The kilometers per hour unit of speed.
- [milesPerHour](unitspeed/milesperhour.md): The miles per hour unit of speed.
- [knots](unitspeed/knots.md): The knots unit of speed.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Time and Motion

- [NSUnitAcceleration](unitacceleration.md): A unit of measure for acceleration.
- [NSUnitDuration](unitduration.md): A unit of measure for a duration of time.
- [NSUnitFrequency](unitfrequency.md): A unit of measure for frequency.
