> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/scale](https://developer.apple.com/documentation/realitykit/hastransform/scale)

# scale

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The scale of the entity relative to its parent.

## Declaration

```swift
@MainActor @preconcurrency var scale: SIMD3<Float> { get set }
```

## Mentioned In

- [Automatically animating RealityKit entities](../automatically-animating-realitykit-entities.md)

<a id="discussion"></a>

## Discussion

This value is the entity’s scale relative to its parent. To get the actual scale of the entity in the scene, use [scale(relativeTo:)](scale%28relativeto_%29.md), passing `nil` as the reference entity.

This is the same as the [scale](../transform/scale.md) value on the [transform](transform.md).

## See Also

### Scaling an entity

- [scale(relativeTo:)](scale%28relativeto_%29.md): Gets the scale of an entity relative to the given entity.
- [setScale(\_:relativeTo:)](setscale%28__relativeto_%29.md): Sets the scale factor of the entity relative to the given reference entity.
