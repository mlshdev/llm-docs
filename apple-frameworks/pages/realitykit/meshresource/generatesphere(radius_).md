> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generatesphere(radius:)](https://developer.apple.com/documentation/realitykit/meshresource/generatesphere(radius:))

# generateSphere(radius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new sphere mesh with the specified radius.

## Declaration

```swift
@MainActor @preconcurrency static func generateSphere(radius: Float) -> MeshResource
```

## Parameters

- `radius`: The radius, in meters, of the sphere.

<a id="return-value"></a>

## Return Value

A sphere mesh.

<a id="discussion"></a>

## Discussion

The sphere is centered at the entity’s origin.

## See Also

### Creating a primitive shape

- [generateCone(height:radius:)](generatecone%28height_radius_%29.md): Creates a new cone mesh with the specified dimensions.
- [generateCylinder(height:radius:)](generatecylinder%28height_radius_%29.md): Creates a new cylinder mesh with the specified dimensions.
