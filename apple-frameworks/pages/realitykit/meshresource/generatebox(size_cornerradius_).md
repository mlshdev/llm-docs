> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatebox(size:cornerradius:)](https://developer.apple.com/documentation/realitykit/meshresource/generatebox(size:cornerradius:))

# generateBox(size:cornerRadius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a box mesh from a length for the box’s width, height, and depth, and a radius for the corners.

## Declaration

```swift
@MainActor @preconcurrency static func generateBox(size: Float, cornerRadius: Float = 0) -> MeshResource
```

## Parameters

- `size`: The length of the box’s width, height, and depth, in meters.
- `cornerRadius`: The radius of each corner’s circular arc, in meters. Values for `cornerRadius` can be, at most, equal to `size / 2.0`. For example, if the box’s dimensions are `5.0` x `5.0` x `5.0`, the corner radius needs to be in the range `[0.0, 2.5]`.

<a id="discussion"></a>

## Discussion

The method centers the box at the entity’s origin and aligns the box’s faces with the coordinate system’s axes.

> **Note**

> The method clamps `cornerRadius` so that it doesn’t exceed half the length of the box’s smallest dimension.
