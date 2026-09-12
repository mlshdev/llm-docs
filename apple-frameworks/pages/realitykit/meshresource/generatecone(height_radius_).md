> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatecone(height:radius:)](https://developer.apple.com/documentation/realitykit/meshresource/generatecone(height:radius:))

# generateCone(height:radius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a new cone mesh with the specified dimensions.

## Declaration

```swift
@MainActor @preconcurrency static func generateCone(height: Float, radius: Float) -> MeshResource
```

## Parameters

- `height`: The height of the cone, in meters, along the y-axis.
- `radius`: The base radius of the cone, in meters.

<a id="discussion"></a>

## Discussion

The cone is centered at the local origin with its axis aligned along the y-axis.

## See Also

### Creating a primitive shape

- [generateSphere(radius:)](generatesphere%28radius_%29.md): Creates a new sphere mesh with the specified radius.
- [generateCylinder(height:radius:)](generatecylinder%28height_radius_%29.md): Creates a new cylinder mesh with the specified dimensions.
