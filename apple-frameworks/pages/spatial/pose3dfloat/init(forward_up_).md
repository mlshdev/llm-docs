> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3dfloat/init(forward:up:)](https://developer.apple.com/documentation/spatial/pose3dfloat/init(forward:up:))

# init(forward:up:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a pose with the specified forward and up vectors.

## Declaration

```swift
init(forward: Vector3DFloat, up: Vector3DFloat = Vector3DFloat(x: 0, y: 1, z: 0))
```

## Parameters

- `forward`: The forward direction.
- `up`: The up direction.

<a id="discussion"></a>

## Discussion

> **Note**

> This function creates a pose where `+z` is forward.
