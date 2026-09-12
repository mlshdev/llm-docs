> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox/init(boxmin:boxmax:)](https://developer.apple.com/documentation/realitykit/boundingspherebox/init(boxmin:boxmax:))

# init(boxMin:boxMax:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a bounding box from minimum and maximum corner positions, with a circumscribed sphere.

## Declaration

```swift
init(boxMin: SIMD3<Float>, boxMax: SIMD3<Float>)
```

## Parameters

- `boxMin`: The minimum corner of the bounding box in model space.
- `boxMax`: The maximum corner of the bounding box in model space.

## See Also

### Creating a bounding volume

- [init(center:radius:)](init%28center_radius_%29.md): Creates a bounding sphere with the given center and radius.
- [init(center:halfExtents:)](init%28center_halfextents_%29.md): Creates a bounding box with the given center and half-extents, with a circumscribed sphere.
- [init(center:fullExtents:)](init%28center_fullextents_%29.md): Creates a bounding box with the given center and full extents, with a circumscribed sphere.
