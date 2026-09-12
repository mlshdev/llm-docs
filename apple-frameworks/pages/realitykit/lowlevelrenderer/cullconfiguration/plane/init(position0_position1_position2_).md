> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/plane/init(position0:position1:position2:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/plane/init(position0:position1:position2:))

# init(position0:position1:position2:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a plane from three positions.

## Declaration

```swift
init(position0 p0: SIMD3<Float>, position1 p1: SIMD3<Float>, position2 p2: SIMD3<Float>)
```

## Parameters

- `p0`: The first position on the plane.
- `p1`: The second position on the plane.
- `p2`: The third position on the plane.

<a id="discussion"></a>

## Discussion

The plane’s outward normal is computed as `cross(p1 − p0, p2 − p1)`, so the three positions wind counterclockwise when viewed from the outward (culled) side of the plane.

## See Also

### Creating a plane

- [init(position:direction:)](init%28position_direction_%29.md): Creates a plane from a point on the plane and an outward normal direction.
