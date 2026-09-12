> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/init(position:target:up:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/init(position:target:up:))

# init(position:target:up:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a rotation that’s the look at direction from the eye position to the target.

## Declaration

```swift
init(position: Point3DFloat = Point3DFloat(x: 0, y: 0, z: 0), target: Point3DFloat, up: Vector3DFloat = Vector3DFloat(x: 0, y: 1, z: 0))
```

## Parameters

- `position`: The eye position.
- `target`: The point that the rotation looks at.
- `up`: The up direction.

<a id="discussion"></a>

## Discussion

> **Note**

> This function creates a rotation where `+z` is forward.
