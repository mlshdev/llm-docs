> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/position](https://developer.apple.com/documentation/realitykit/hastransform/position)

# position

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The position of the entity relative to its parent.

## Declaration

```swift
@MainActor @preconcurrency var position: SIMD3<Float> { get set }
```

## Mentioned In

- [Automatically animating RealityKit entities](../automatically-animating-realitykit-entities.md)

<a id="discussion"></a>

## Discussion

This value is the entity’s position relative to its parent. To get the world-space position of the entity in the scene, use [position(relativeTo:)](position%28relativeto_%29.md), passing `nil` as the reference entity.

This is the same as the [translation](../transform/translation.md) value on the [transform](transform.md).

## See Also

### Positioning an entity

- [position(relativeTo:)](position%28relativeto_%29.md): Gets the position of an entity relative to the given entity.
- [setPosition(\_:relativeTo:)](setposition%28__relativeto_%29.md): Sets the position of the entity relative to the given reference entity.
