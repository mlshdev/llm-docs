> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generateplane(width:depth:cornerradius:)](https://developer.apple.com/documentation/realitykit/meshresource/generateplane(width:depth:cornerradius:))

# generatePlane(width:depth:cornerRadius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new rectangle mesh with the specified dimensions in the entity’s xz-plane.

## Declaration

```swift
@MainActor @preconcurrency static func generatePlane(width: Float, depth: Float, cornerRadius: Float = 0) -> MeshResource
```

## Parameters

- `width`: The width, in meters, of the rectangle along the x-axis.
- `depth`: The depth, in meters, of the rectangle along the z-axis.
- `cornerRadius`: A corner radius in the form of a circular arc, with curvature that transitions abruptly from `0` to `1/r` at the boundary between the edge and the corner.

<a id="return-value"></a>

## Return Value

The rectangle mesh.

<a id="discussion"></a>

## Discussion

The rectangle is centered at the entity’s origin and aligned with its x and z axes. The surface normal points along the y-axis. The depth along the y-axis is 0.

> **Note**

> The xz-plane is a plane that aligns with the x and z axes.

## See Also

### Creating a plane

- [generatePlane(width:height:cornerRadius:)](generateplane%28width_height_cornerradius_%29.md): Creates a new rectangle mesh with the specified dimensions in the entity’s xy-plane.
