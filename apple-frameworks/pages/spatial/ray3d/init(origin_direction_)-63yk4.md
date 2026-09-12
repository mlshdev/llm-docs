> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d/init(origin:direction:)-63yk4](https://developer.apple.com/documentation/spatial/ray3d/init(origin:direction:)-63yk4)

# init(origin:direction:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a ray from Spatial primitives that describe the origin and direction.

## Declaration

```swift
init(origin: Point3D = .zero, direction: Vector3D)
```

## Parameters

- `origin`: The origin of the ray.
- `direction`: The direction of the ray.

<a id="discussion"></a>

## Discussion

> **Note**

> This function normalizes the direction vector.
