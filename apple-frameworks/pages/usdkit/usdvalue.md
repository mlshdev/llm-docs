> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue](https://developer.apple.com/documentation/usdkit/usdvalue)

# USDValue

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type-erased container for a value stored in a Universal Scene Description file.

## Declaration

```swift
struct USDValue
```

<a id="overview"></a>

## Overview

`USDValue` wraps the various concrete value types USD recognises (numerics, strings, vectors, tokens, paths, asset paths, time codes, and so on) so they can be passed through generic APIs without exposing the underlying C++ representation.

## Topics

### Creating a value

- [init()](usdvalue/init%28%29.md): Creates an empty value.
- [init(\_:)](usdvalue/init%28__%29.md): Creates a value wrapping `value`.

### Accessing the value

- [isHolding(\_:)](usdvalue/isholding%28__%29.md): Returns whether this value holds a value of type `T`.

### Inspecting the value

- [typeName](usdvalue/typename.md): The name of the wrapped type.
- [isEmpty](usdvalue/isempty.md): Whether this value is empty.
- [USDValue.Vec3d](usdvalue/vec3d.md): A 3-component double-precision vector.

### Structures

- [USDValue.Matrix2d](usdvalue/matrix2d.md): A 2x2 matrix of double-precision floating-point values.
- [USDValue.Matrix2f](usdvalue/matrix2f.md): A 2x2 matrix of single-precision floating-point values.
- [USDValue.Matrix3d](usdvalue/matrix3d.md): A 3x3 matrix of double-precision floating-point values.
- [USDValue.Matrix3f](usdvalue/matrix3f.md): A 3x3 matrix of single-precision floating-point values.
- [USDValue.Matrix4d](usdvalue/matrix4d.md): A 4x4 matrix of double-precision floating-point values.
- [USDValue.Matrix4f](usdvalue/matrix4f.md): A 4x4 matrix of single-precision floating-point values.
- [USDValue.Quatd](usdvalue/quatd.md)
- [USDValue.Quatf](usdvalue/quatf.md)
- [USDValue.Quath](usdvalue/quath.md): A half-precision quaternion.
- [USDValue.Vec2d](usdvalue/vec2d.md): A 2-component double-precision vector.
- [USDValue.Vec2f](usdvalue/vec2f.md): A 2-component single-precision vector.
- [USDValue.Vec2h](usdvalue/vec2h.md): A 2-component half-precision vector.
- [USDValue.Vec2i](usdvalue/vec2i.md): A 2-component 32-bit integer vector.
- [USDValue.Vec3f](usdvalue/vec3f.md): A 3-component single-precision vector.
- [USDValue.Vec3h](usdvalue/vec3h.md): A 3-component half-precision vector.
- [USDValue.Vec3i](usdvalue/vec3i.md): A 3-component 32-bit integer vector.
- [USDValue.Vec4d](usdvalue/vec4d.md): A 4-component double-precision vector.
- [USDValue.Vec4f](usdvalue/vec4f.md): A 4-component single-precision vector.
- [USDValue.Vec4h](usdvalue/vec4h.md): A 4-component half-precision vector.
- [USDValue.Vec4i](usdvalue/vec4i.md): A 4-component 32-bit integer vector.

### Instance Properties

- [arrayCount](usdvalue/arraycount.md): The number of elements if this value holds an array. Returns `nil` otherwise.
- [isArray](usdvalue/isarray.md): Whether the wrapped value is an array.

### Instance Methods

- [unsafeValue(assumingType:)](usdvalue/unsafevalue%28assumingtype_%29.md): Returns the wrapped value as `T` without checking the dynamic type.
- [value(as:)](usdvalue/value%28as_%29.md): Returns the wrapped value if it is of type `T`, otherwise `nil`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Values and tokens

- [USDValueProtocol](usdvalueprotocol.md): A type that can be wrapped in a [USDValue](usdvalue.md).
- [USDToken](usdtoken.md): An interned, efficiently compared string that names prims, properties, and other scene-description identifiers.
