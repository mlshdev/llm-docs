> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/valuetype](https://developer.apple.com/documentation/usdkit/usdprim/attribute/valuetype)

# USDPrim.Attribute.ValueType

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that describes the kind of value an attribute can store, such as `float3` or `token[]`.

## Declaration

```swift
struct ValueType
```

## Topics

### Instance Properties

- [array](valuetype/array.md): The array type corresponding to this type.
- [role](valuetype/role.md): The name of this type’s role, if it has one.
- [scalar](valuetype/scalar.md): The scalar (non-array) type corresponding to this type.

### Type Properties

- [asset](valuetype/asset.md)
- [bool](valuetype/bool.md)
- [color3d](valuetype/color3d.md)
- [color3f](valuetype/color3f.md)
- [color3h](valuetype/color3h.md)
- [color4d](valuetype/color4d.md)
- [color4f](valuetype/color4f.md)
- [color4h](valuetype/color4h.md)
- [double](valuetype/double.md)
- [double2](valuetype/double2.md)
- [double3](valuetype/double3.md)
- [double4](valuetype/double4.md)
- [float](valuetype/float.md)
- [float2](valuetype/float2.md)
- [float3](valuetype/float3.md)
- [float4](valuetype/float4.md)
- [frame4d](valuetype/frame4d.md)
- [group](valuetype/group.md)
- [half](valuetype/half.md)
- [half2](valuetype/half2.md)
- [half3](valuetype/half3.md)
- [half4](valuetype/half4.md)
- [int2](valuetype/int2.md)
- [int3](valuetype/int3.md)
- [int32](valuetype/int32.md)
- [int4](valuetype/int4.md)
- [int64](valuetype/int64.md)
- [invalid](valuetype/invalid.md): An invalid value type.
- [matrix2d](valuetype/matrix2d.md)
- [matrix3d](valuetype/matrix3d.md)
- [matrix4d](valuetype/matrix4d.md)
- [normal3d](valuetype/normal3d.md)
- [normal3f](valuetype/normal3f.md)
- [normal3h](valuetype/normal3h.md)
- [opaque](valuetype/opaque.md)
- [pathExpression](valuetype/pathexpression.md)
- [point3d](valuetype/point3d.md)
- [point3f](valuetype/point3f.md)
- [point3h](valuetype/point3h.md)
- [quatd](valuetype/quatd.md)
- [quatf](valuetype/quatf.md)
- [quath](valuetype/quath.md)
- [string](valuetype/string.md)
- [textureCoordinate2d](valuetype/texturecoordinate2d.md)
- [textureCoordinate2f](valuetype/texturecoordinate2f.md)
- [textureCoordinate2h](valuetype/texturecoordinate2h.md)
- [textureCoordinate3d](valuetype/texturecoordinate3d.md)
- [textureCoordinate3f](valuetype/texturecoordinate3f.md)
- [textureCoordinate3h](valuetype/texturecoordinate3h.md)
- [timeCode](valuetype/timecode.md)
- [token](valuetype/token.md)
- [uchar](valuetype/uchar.md)
- [uint32](valuetype/uint32.md)
- [uint64](valuetype/uint64.md)
- [vector3d](valuetype/vector3d.md)
- [vector3f](valuetype/vector3f.md)
- [vector3h](valuetype/vector3h.md)

### Type Methods

- [type(named:)](valuetype/type%28named_%29.md): The type corresponding to the given type name.

### Enumerations

- [USDPrim.Attribute.ValueType.TupleDimensions](valuetype/tupledimensions.md): The shape of a value type’s components.

### Default Implementations

- [CustomStringConvertible Implementations](valuetype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
