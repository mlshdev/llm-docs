> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/plane/init(position:direction:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/plane/init(position:direction:))

# init(position:direction:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a plane from a point on the plane and an outward normal direction.

## Declaration

```swift
init(position: SIMD3<Float>, direction: SIMD3<Float>)
```

## Parameters

- `position`: A point that lies on the plane.
- `direction`: The outward normal direction of the plane.

## See Also

### Creating a plane

- [init(position0:position1:position2:)](init%28position0_position1_position2_%29.md): Creates a plane from three positions.
