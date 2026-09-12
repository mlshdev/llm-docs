> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatebox(size:cornerradius:)-8em0v](https://developer.apple.com/documentation/realitykit/meshresource/generatebox(size:cornerradius:)-8em0v)

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

## See Also

### Creating a box

- [generateBox(size:cornerRadius:)](generatebox%28size_cornerradius_%29-2ovma.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and a radius for the corners.
- [generateBox(width:height:depth:cornerRadius:splitFaces:)](generatebox%28width_height_depth_cornerradius_splitfaces_%29.md): Creates a box mesh from a width, height, depth and a corner radius, with the ability to assign different materials to each face.
- [generateBox(size:majorCornerRadius:minorCornerRadius:)](generatebox%28size_majorcornerradius_minorcornerradius_%29.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and radii for the corners.
