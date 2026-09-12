> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatebox(size:majorcornerradius:minorcornerradius:)](https://developer.apple.com/documentation/realitykit/meshresource/generatebox(size:majorcornerradius:minorcornerradius:))

# generateBox(size:majorCornerRadius:minorCornerRadius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and radii for the corners.

## Declaration

```swift
@MainActor @preconcurrency static func generateBox(size: SIMD3<Float>, majorCornerRadius: Float = 0.2, minorCornerRadius: Float = 0.05) -> MeshResource
```

## Parameters

- `size`: The length of the box’s width, height, and depth, in meters, along the x-, y-, and z-axis, respectively.
- `majorCornerRadius`: The radius of each corner’s circular arc, in meters, orthogonal to the z-axis.
- `minorCornerRadius`: The radius of each corner’s circular arc, in meters, orthogonal to the x-axis.

<a id="discussion"></a>

## Discussion

The method centers the box at the entity’s origin and aligns the box’s faces with the coordinate system’s axes.

## See Also

### Creating a box

- [generateBox(size:cornerRadius:)](generatebox%28size_cornerradius_%29-8em0v.md): Creates a box mesh from a length for the box’s width, height, and depth, and a radius for the corners.
- [generateBox(size:cornerRadius:)](generatebox%28size_cornerradius_%29-2ovma.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and a radius for the corners.
- [generateBox(width:height:depth:cornerRadius:splitFaces:)](generatebox%28width_height_depth_cornerradius_splitfaces_%29.md): Creates a box mesh from a width, height, depth and a corner radius, with the ability to assign different materials to each face.
