> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat/init(position:rotation:scale:)-1xgkl](https://developer.apple.com/documentation/spatial/scaledpose3dfloat/init(position:rotation:scale:)-1xgkl)

# init(position:rotation:scale:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a  scaled pose from Spatial primitives that describe the position, rotation, and scale.

## Declaration

```swift
init(position: Point3DFloat = .zero, rotation: Rotation3DFloat, scale: Float = 1)
```

## Parameters

- `position`: The position of the scaled pose.
- `rotation`: The rotation of the pose.
- `scale`: The uniform scale of the scaled pose.
