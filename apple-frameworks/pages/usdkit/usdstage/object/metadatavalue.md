> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/metadatavalue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)

# USDStage.Object.MetadataValue

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value that can be stored as metadata in a Universal Scene Description file.

## Declaration

```swift
protocol MetadataValue : Sendable
```

<a id="overview"></a>

## Overview

Types that conform to this protocol can be authored as metadata using [USDStage.Object.MetadataCollection](metadatacollection.md).

> **Important**

> Don’t declare new conformances to `MetadataValue`. Only the types already supported by the USDKit framework are valid conforming types.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

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
