> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/angle2d](https://developer.apple.com/documentation/spatial/angle2d)

# Angle2D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A geometric angle with a value you access in either radians or degrees.

## Declaration

```swift
struct Angle2D
```

## Topics

### Creating an angle structure

- [init()](angle2d/init%28%29.md): Creates an angle.
- [init(radians:)](angle2d/init%28radians_%29-3zcwo.md): Creates an angle with the specified double-precision radians.
- [init(radians:)](angle2d/init%28radians_%29-6s7o6.md): Creates an angle with the specified double-precision radians.
- [init(radians:)](angle2d/init%28radians_%29-74ym2.md): Creates an angle with the specified floating-point radians.
- [init(degrees:)](angle2d/init%28degrees_%29-2obd.md): Creates an angle with the specified floating-point degrees.
- [init(degrees:)](angle2d/init%28degrees_%29-7y9lb.md): Creates an angle with the specified double-precision degrees.
- [degrees(\_:)](angle2d/degrees%28__%29.md): Returns a new angle structure with the specified double-precision degrees.
- [radians(\_:)](angle2d/radians%28__%29.md): Returns a new angle structure with the specified double-precision radians.

### Inspecting an angle’s properties

- [degrees](angle2d/degrees.md): The angle in degrees.
- [radians](angle2d/radians.md): The angle in radians.

### Geometry functions

- [acos(\_:)](angle2d/acos%28__%29.md): Returns the inverse cosine of the specified value.
- [acosh(\_:)](angle2d/acosh%28__%29.md): Returns the inverse hyperbolic cosine of the specified value.
- [asin(\_:)](angle2d/asin%28__%29.md): Returns the inverse sine of the specified value.
- [asinh(\_:)](angle2d/asinh%28__%29.md): Returns the inverse hyperbolic sine of the specified value.
- [atan(\_:)](angle2d/atan%28__%29.md): Returns the inverse hyperbolic tangent of the specified value.
- [atan2(y:x:)](angle2d/atan2%28y_x_%29.md): Returns the two-argument arctangent of the specified values.
- [atanh(\_:)](angle2d/atanh%28__%29.md): Returns the inverse hyperbolic tangent of the specified value.
- [normalized](angle2d/normalized.md): Returns the specified angle normalized between –180° and 180.0°.

### Comparing values

- [==(\_:\_:)](angle2d/==%28____%29.md): Returns a Boolean value that indicates whether two angles are equal.

### Encoding and decoding an angle structure

- [init(from:)](angle2d/init%28from_%29.md): Creates a new instance by decoding from the given decoder.
- [encode(to:)](angle2d/encode%28to_%29.md): Encodes this value into the given encoder.

### Applying arithmetic operations

- [+(\_:)](angle2d/+%28__%29.md): Returns the given angle unchanged.
- [+(\_:\_:)](angle2d/+%28____%29.md): Adds two angles and produces their sum.
- [+=(\_:\_:)](angle2d/+=%28____%29.md): Adds two angles and stores the result in the left-hand-side variable.
- [-(\_:)](angle2d/-%28__%29.md): Returns the additive inverse of the given angle.
- [-(\_:\_:)](angle2d/-%28____%29.md): Subtracts one angle from another and produces their difference.
- [-=(\_:\_:)](angle2d/-=%28____%29.md): Subtracts the second angle from the first and stores the difference in the left-hand-side variable.

### Initializers

- [init(\_:)](angle2d/init%28__%29-44cs8.md)
- [init(\_:)](angle2d/init%28__%29-7nf6j.md): Returns a double-precision angle from a single-precision angle.

### Default Implementations

- [AdditiveArithmetic Implementations](angle2d/additivearithmetic-implementations.md)
- [Comparable Implementations](angle2d/comparable-implementations.md)
- [CustomReflectable Implementations](angle2d/customreflectable-implementations.md)
- [Decodable Implementations](angle2d/decodable-implementations.md)
- [Encodable Implementations](angle2d/encodable-implementations.md)
- [Equatable Implementations](angle2d/equatable-implementations.md)
- [Hashable Implementations](angle2d/hashable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 2D primitives

- [Angle2DFloat](angle2dfloat.md): A single-precision geometric angle whose value you access in either radians or degrees.

# SPAngle (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A geometric angle with a value you access in either radians or degrees.

## Declaration

```objectivec
typedef struct { ... } SPAngle;
```

## Topics

### Creating an angle structure

- [SPAngleMakeWithRadians](angle2d/init%28radians_%29-3zcwo.md): Creates an angle with the specified double-precision radians.
- [SPAngleMakeWithDegrees](angle2d/init%28degrees_%29-7y9lb.md): Creates an angle with the specified double-precision degrees.

### Constants

- [SPAngleZero](spanglezero.md): The angle with the zero value.

### Inspecting an angle’s properties

- [SPAngleGetDegrees](angle2d/degrees.md): The angle in degrees.
- [radians](angle2d/radians.md): The angle in radians.

### Geometry functions

- [SPAngleAcos](spangleacos.md): Returns the inverse cosine of the specified value.
- [SPAngleAcosh](spangleacosh.md): Returns the inverse hyperbolic cosine of the specified value.
- [SPAngleAsin](spangleasin.md): Returns the inverse sine of the specified value.
- [SPAngleAsinh](spangleasinh.md): Returns the inverse hyperbolic sine of the specified value.
- [SPAngleAtan](spangleatan.md): Returns the inverse hyperbolic tangent of the specified value.
- [SPAngleAtan2](spangleatan2.md): Returns the two-argument arctangent of the specified values.
- [SPAngleAtanh](spangleatanh.md): Returns the hyperbolic tangent of the specified angle.
- [SPAngleCos](spanglecos.md): Returns the cosine of the specified angle.
- [SPAngleCosh](spanglecosh.md): Returns the hyperbolic cosine of the specified angle.
- [SPAngleNormalize](spanglenormalize.md): Returns the specified angle normalized between –180° and 180.0°.
- [SPAngleSin](spanglesin.md): Returns the sine of the specified angle.
- [SPAngleSinh](spanglesinh.md): Returns the hyperbolic sine of the specified angle.
- [SPAngleTan](spangletan.md): Returns the tangent of the specified angle.
- [SPAngleTanh](spangletanh.md): Returns the hyperbolic tangent of the specified angle.

### Comparing values

- [SPAngleEqualToAngle](spangleequaltoangle.md): Returns a Boolean value that indicates whether two angles are equal.

### Applying arithmetic operations

- [SPAngleNegate](spanglenegate.md): Returns the additive inverse of the given angle.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### 2D primitives

- [SPAngleFloat](angle2dfloat.md): A single-precision geometric angle whose value you access in either radians or degrees.
