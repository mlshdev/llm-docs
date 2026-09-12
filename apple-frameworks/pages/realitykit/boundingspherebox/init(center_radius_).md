> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox/init(center:radius:)](https://developer.apple.com/documentation/realitykit/boundingspherebox/init(center:radius:))

# init(center:radius:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a bounding sphere with the given center and radius.

## Declaration

```swift
init(center: SIMD3<Float>, radius: Float)
```

## Parameters

- `center`: The center of the bounding sphere in model space.
- `radius`: The radius of the bounding sphere.

## See Also

### Creating a bounding volume

- [init(center:halfExtents:)](init%28center_halfextents_%29.md): Creates a bounding box with the given center and half-extents, with a circumscribed sphere.
- [init(center:fullExtents:)](init%28center_fullextents_%29.md): Creates a bounding box with the given center and full extents, with a circumscribed sphere.
- [init(boxMin:boxMax:)](init%28boxmin_boxmax_%29.md): Creates a bounding box from minimum and maximum corner positions, with a circumscribed sphere.
