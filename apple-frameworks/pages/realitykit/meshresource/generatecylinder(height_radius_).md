> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatecylinder(height:radius:)](https://developer.apple.com/documentation/realitykit/meshresource/generatecylinder(height:radius:))

# generateCylinder(height:radius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a new cylinder mesh with the specified dimensions.

## Declaration

```swift
@MainActor @preconcurrency static func generateCylinder(height: Float, radius: Float) -> MeshResource
```

## Parameters

- `height`: The height of the cylinder, in meters, along the y-axis.
- `radius`: The radius of the cylinder, in meters.

<a id="discussion"></a>

## Discussion

The cylinder is centered at the local origin with its axis aligned along the y-axis.

## See Also

### Creating a primitive shape

- [generateSphere(radius:)](generatesphere%28radius_%29.md): Creates a new sphere mesh with the specified radius.
- [generateCone(height:radius:)](generatecone%28height_radius_%29.md): Creates a new cone mesh with the specified dimensions.
