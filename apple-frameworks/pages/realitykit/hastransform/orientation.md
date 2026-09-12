> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/orientation](https://developer.apple.com/documentation/realitykit/hastransform/orientation)

# orientation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The rotation of the entity relative to its parent.

## Declaration

```swift
@MainActor @preconcurrency var orientation: simd_quatf { get set }
```

## Mentioned In

- [Automatically animating RealityKit entities](../automatically-animating-realitykit-entities.md)

<a id="discussion"></a>

## Discussion

This value is the entity’s rotation relative to its parent. To get the world-space orientation of the entity, use [orientation(relativeTo:)](orientation%28relativeto_%29.md), passing `nil` as the reference entity.

This is the same as the [rotation](../transform/rotation.md) value on the [transform](transform.md).

## See Also

### Rotating an entity

- [orientation(relativeTo:)](orientation%28relativeto_%29.md): Gets the orientation of an entity relative to the given entity.
- [setOrientation(\_:relativeTo:)](setorientation%28__relativeto_%29.md): Sets the orientation of the entity relative to the given reference entity.
