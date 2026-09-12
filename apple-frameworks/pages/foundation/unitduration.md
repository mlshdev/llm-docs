> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitduration](https://developer.apple.com/documentation/foundation/unitduration)

# UnitDuration (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for a duration of time.

## Declaration

```swift
class UnitDuration
```

<a id="overview"></a>

## Overview

You typically use instances of [UnitDuration](unitduration.md) to represent specific quantities of planar angle using the [NSMeasurement](nsmeasurement.md) class.

<a id="Duration"></a>

### Duration

Duration is a quantity of time. The SI unit for time is the second (sec), which is defined in terms of the radioactivity of a cesium-133 atom. Duration is also commonly expressed in terms of minutes (min) and hours (hr).

> **Note**

>  Use the [NSDateComponents](nsdatecomponents.md) class to represent quantities of calendrical units, such as days, weeks, months, and years.

The [UnitDuration](unitduration.md) class defines its [baseUnit()](dimension/baseunit%28%29.md) as [seconds](unitduration/seconds.md), and provides the following units, which [UnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Seconds | [seconds](unitduration/seconds.md) | sec | `1` |
| Minutes | [minutes](unitduration/minutes.md) | min | `60` |
| Hours | [hours](unitduration/hours.md) | hr | `3600` |

## Topics

### Accessing the Base Unit

- [baseUnit()](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [hours](unitduration/hours.md): The hour unit of duration.
- [minutes](unitduration/minutes.md): The minute unit of duration.
- [seconds](unitduration/seconds.md): The second unit of duration.
- [milliseconds](unitduration/milliseconds.md): The millisecond unit of duration.
- [microseconds](unitduration/microseconds.md): The microsecond unit of duration.
- [nanoseconds](unitduration/nanoseconds.md): The nanosecond unit of duration.
- [picoseconds](unitduration/picoseconds.md): The picosecond unit of duration.

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
- [UnitFrequency](unitfrequency.md): A unit of measure for frequency.
- [UnitSpeed](unitspeed.md): A unit of measure for speed.

# NSUnitDuration (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unit of measure for a duration of time.

## Declaration

```objectivec
@interface NSUnitDuration : NSDimension
```

<a id="overview"></a>

## Overview

You typically use instances of [NSUnitDuration](unitduration.md) to represent specific quantities of planar angle using the [NSMeasurement](nsmeasurement.md) class.

<a id="Duration"></a>

### Duration

Duration is a quantity of time. The SI unit for time is the second (sec), which is defined in terms of the radioactivity of a cesium-133 atom. Duration is also commonly expressed in terms of minutes (min) and hours (hr).

> **Note**

>  Use the [NSDateComponents](nsdatecomponents.md) class to represent quantities of calendrical units, such as days, weeks, months, and years.

The [NSUnitDuration](unitduration.md) class defines its [baseUnit](dimension/baseunit%28%29.md) as [seconds](unitduration/seconds.md), and provides the following units, which [NSUnitConverterLinear](unitconverterlinear.md) converters initialize with the given coefficients:

| Name | Method | Symbol | Coefficient |
| --- | --- | --- | --- |
| Seconds | [seconds](unitduration/seconds.md) | sec | `1` |
| Minutes | [minutes](unitduration/minutes.md) | min | `60` |
| Hours | [hours](unitduration/hours.md) | hr | `3600` |

## Topics

### Accessing the Base Unit

- [baseUnit](dimension/baseunit%28%29.md): Returns the base unit.

### Accessing Predefined Units

- [hours](unitduration/hours.md): The hour unit of duration.
- [minutes](unitduration/minutes.md): The minute unit of duration.
- [seconds](unitduration/seconds.md): The second unit of duration.
- [milliseconds](unitduration/milliseconds.md): The millisecond unit of duration.
- [microseconds](unitduration/microseconds.md): The microsecond unit of duration.
- [nanoseconds](unitduration/nanoseconds.md): The nanosecond unit of duration.
- [picoseconds](unitduration/picoseconds.md): The picosecond unit of duration.

## Relationships

### Inherits From

- [NSDimension](dimension.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Time and Motion

- [NSUnitAcceleration](unitacceleration.md): A unit of measure for acceleration.
- [NSUnitFrequency](unitfrequency.md): A unit of measure for frequency.
- [NSUnitSpeed](unitspeed.md): A unit of measure for speed.
