> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/angle2dfloat](https://developer.apple.com/documentation/spatial/angle2dfloat)

# Angle2DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision geometric angle whose value you access in either radians or degrees.

## Declaration

```swift
struct Angle2DFloat
```

## Topics

### Operators

- [+(\_:)](angle2dfloat/+%28__%29.md): Returns the given angle unchanged.
- [-(\_:)](angle2dfloat/-%28__%29.md): Returns the additive inverse of the specified angle.

### Initializers

- [init()](angle2dfloat/init%28%29.md)
- [init(\_:)](angle2dfloat/init%28__%29.md): Returns a single-precision angle from a double-precision angle.
- [init(degrees:)](angle2dfloat/init%28degrees_%29-2mulz.md): Returns a new angle from floating-point degrees.
- [init(degrees:)](angle2dfloat/init%28degrees_%29-56b20.md)
- [init(radians:)](angle2dfloat/init%28radians_%29-4uwyj.md)
- [init(radians:)](angle2dfloat/init%28radians_%29-9r8ja.md): Returns a new angle from floating-point radians.
- [init(radians:)](angle2dfloat/init%28radians_%29-9ri4z.md)

### Instance Properties

- [degrees](angle2dfloat/degrees.md)
- [normalized](angle2dfloat/normalized.md): Returns the specified angle normalized to `(-π, π]` radians (`(-180°, 180.0°]`).
- [radians](angle2dfloat/radians.md): The angle in radians.

### Type Methods

- [acos(\_:)](angle2dfloat/acos%28__%29.md)
- [acosh(\_:)](angle2dfloat/acosh%28__%29.md)
- [asin(\_:)](angle2dfloat/asin%28__%29.md)
- [asinh(\_:)](angle2dfloat/asinh%28__%29.md)
- [atan(\_:)](angle2dfloat/atan%28__%29.md)
- [atan2(y:x:)](angle2dfloat/atan2%28y_x_%29.md)
- [atanh(\_:)](angle2dfloat/atanh%28__%29.md)
- [degrees(\_:)](angle2dfloat/degrees%28__%29.md)
- [radians(\_:)](angle2dfloat/radians%28__%29.md)

### Default Implementations

- [AdditiveArithmetic Implementations](angle2dfloat/additivearithmetic-implementations.md)
- [Comparable Implementations](angle2dfloat/comparable-implementations.md)
- [CustomReflectable Implementations](angle2dfloat/customreflectable-implementations.md)
- [Decodable Implementations](angle2dfloat/decodable-implementations.md)
- [Encodable Implementations](angle2dfloat/encodable-implementations.md)
- [Equatable Implementations](angle2dfloat/equatable-implementations.md)
- [Hashable Implementations](angle2dfloat/hashable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
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

- [Angle2D](angle2d.md): A geometric angle with a value you access in either radians or degrees.

# SPAngleFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision geometric angle whose value you access in either radians or degrees.

## Declaration

```objectivec
typedef struct { ... } SPAngleFloat;
```

## Topics

### Instance Properties

- [radians](angle2dfloat/radians.md): The angle in radians.

## See Also

### 2D primitives

- [SPAngle](angle2d.md): A geometric angle with a value you access in either radians or degrees.
