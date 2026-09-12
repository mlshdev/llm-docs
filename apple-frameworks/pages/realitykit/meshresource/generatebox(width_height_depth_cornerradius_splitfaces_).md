> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatebox(width:height:depth:cornerradius:splitfaces:)](https://developer.apple.com/documentation/realitykit/meshresource/generatebox(width:height:depth:cornerradius:splitfaces:))

# generateBox(width:height:depth:cornerRadius:splitFaces:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a box mesh from a width, height, depth and a corner radius, with the ability to assign different materials to each face.

## Declaration

```swift
@MainActor @preconcurrency static func generateBox(width: Float, height: Float, depth: Float, cornerRadius: Float = 0, splitFaces: Bool = false) -> MeshResource
```

## Parameters

- `width`: The length of the box’s width, in meters, along the x-axis.
- `height`: The length of the box’s height, in meters, along the y-axis.
- `depth`: The length of the box’s depth, in meters, along the z-axis.
- `cornerRadius`: The radius of each corner’s circular arc, in meters. Values for `cornerRadius` can be, at most, equal to the smallest value of the `width`, `height`, and `depth` parameters. For example, if the box’s dimensions are `3.0` x `4.0` x `5.0`, the corner radius needs to be in the range `[0.0, 1.5]`.
- `splitFaces`: A Boolean value that indicates whether you can assign up to six separate materials, one for each face. If `false`, you can only assign one material for all six faces.

<a id="discussion"></a>

## Discussion

The method centers the box at the entity’s origin and aligns the box’s faces with the coordinate system’s axes.

When `splitFaces` is `true`, the box contains six submeshes, one per face, allowing you to assign a different material to each face. The faces correspond to material indices in the following order:

| Material Index | Face |
| --- | --- |
| 0 | Front (+Z) |
| 1 | Top (+Y) |
| 2 | Back (-Z) |
| 3 | Bottom (-Y) |
| 4 | Right (+X) |
| 5 | Left (-X) |

> **Note**

> The method clamps `cornerRadius` so that it doesn’t exceed half the length of the box’s smallest dimension.

## See Also

### Creating a box

- [generateBox(size:cornerRadius:)](generatebox%28size_cornerradius_%29-8em0v.md): Creates a box mesh from a length for the box’s width, height, and depth, and a radius for the corners.
- [generateBox(size:cornerRadius:)](generatebox%28size_cornerradius_%29-2ovma.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and a radius for the corners.
- [generateBox(size:majorCornerRadius:minorCornerRadius:)](generatebox%28size_majorcornerradius_minorcornerradius_%29.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and radii for the corners.
