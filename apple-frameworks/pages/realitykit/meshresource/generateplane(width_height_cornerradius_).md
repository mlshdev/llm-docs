> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generateplane(width:height:cornerradius:)](https://developer.apple.com/documentation/realitykit/meshresource/generateplane(width:height:cornerradius:))

# generatePlane(width:height:cornerRadius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new rectangle mesh with the specified dimensions in the entity’s xy-plane.

## Declaration

```swift
@MainActor @preconcurrency static func generatePlane(width: Float, height: Float, cornerRadius: Float = 0) -> MeshResource
```

## Parameters

- `width`: The width, in meters, of the rectangle along the x-axis.
- `height`: The height, in meters, of the rectangle along the y-axis.
- `cornerRadius`: A corner radius in the form of a circular arc, with curvature that transitions abruptly from `0` to `1/r` at the boundary between the edge and the corner.

<a id="return-value"></a>

## Return Value

The rectangle mesh.

<a id="discussion"></a>

## Discussion

The rectangle is centered at the entity’s origin and aligned with its x and y axes. The surface normal points along the z-axis. The depth along the z-axis is 0.

> **Note**

> The xy-plane is a plane that aligns with the x and y axes.

## See Also

### Creating a plane

- [generatePlane(width:depth:cornerRadius:)](generateplane%28width_depth_cornerradius_%29.md): Creates a new rectangle mesh with the specified dimensions in the entity’s xz-plane.
