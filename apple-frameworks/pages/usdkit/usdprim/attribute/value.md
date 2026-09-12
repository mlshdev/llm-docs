> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)

# USDPrim.Attribute.Value

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value that can be stored on an attribute in a Universal Scene Description file.

## Declaration

```swift
protocol Value : Sendable
```

<a id="overview"></a>

## Overview

Types that conform to this protocol can be authored as an attribute value using [USDPrim](../../usdprim.md), [USDPrim.Attribute](../attribute.md), or [USDLayer](../../usdlayer.md).

> **Important**

> Don’t declare new conformances to `USDPrim.Attribute.Value`. Only the types already supported by the USDKit framework are valid conforming types.

## Topics

### Type Properties

- [valueType](value/valuetype.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [USDArray](../../usdarray.md)
- [USDLayer.AssetPath](../../usdlayer/assetpath.md)
- [USDLayer.PathExpression](../../usdlayer/pathexpression.md)
- [USDLayer.TimeCode](../../usdlayer/timecode.md)
- [USDToken](../../usdtoken.md)
- [USDValue.Matrix2d](../../usdvalue/matrix2d.md)
- [USDValue.Matrix3d](../../usdvalue/matrix3d.md)
- [USDValue.Matrix4d](../../usdvalue/matrix4d.md)
- [USDValue.Quatd](../../usdvalue/quatd.md)
- [USDValue.Quatf](../../usdvalue/quatf.md)
- [USDValue.Quath](../../usdvalue/quath.md)
- [USDValue.Vec2d](../../usdvalue/vec2d.md)
- [USDValue.Vec2f](../../usdvalue/vec2f.md)
- [USDValue.Vec2h](../../usdvalue/vec2h.md)
- [USDValue.Vec2i](../../usdvalue/vec2i.md)
- [USDValue.Vec3d](../../usdvalue/vec3d.md)
- [USDValue.Vec3f](../../usdvalue/vec3f.md)
- [USDValue.Vec3h](../../usdvalue/vec3h.md)
- [USDValue.Vec3i](../../usdvalue/vec3i.md)
- [USDValue.Vec4d](../../usdvalue/vec4d.md)
- [USDValue.Vec4f](../../usdvalue/vec4f.md)
- [USDValue.Vec4h](../../usdvalue/vec4h.md)
- [USDValue.Vec4i](../../usdvalue/vec4i.md)
