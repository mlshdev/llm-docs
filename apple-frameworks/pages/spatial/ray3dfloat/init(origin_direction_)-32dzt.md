> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/init(origin:direction:)-32dzt](https://developer.apple.com/documentation/spatial/ray3dfloat/init(origin:direction:)-32dzt)

# init(origin:direction:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a ray from Spatial primitives that describe the origin and direction.

## Declaration

```swift
init(origin: Point3DFloat, direction: Vector3DFloat)
```

## Parameters

- `origin`: The origin of the ray.
- `direction`: The direction of the ray.

<a id="discussion"></a>

## Discussion

> **Note**

> This function normalizes the direction vector.
