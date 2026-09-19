> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shaperesource/generateconvex(from:)

# generateConvex(from:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a convex shape from the given mesh.

## Declaration

```swift
@MainActor @preconcurrency static func generateConvex(from mesh: MeshResource) -> ShapeResource
```

## Parameters

- `mesh`: A mesh with the shape of the convex polyhedron. Use meshes with a small number of vertices to avoid hurting performance.

<a id="return-value"></a>

## Return Value

The new shape.
