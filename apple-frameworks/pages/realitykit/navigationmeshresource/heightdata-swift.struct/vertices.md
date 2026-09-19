> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/navigationmeshresource/heightdata-swift.struct/vertices

# vertices

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The vertices of the detailed height data mesh.

## Declaration

```swift
var vertices: [SIMD3<Float>]
```

## See Also

### Accessing mesh geometry

- [triangleIndices](triangleindices.md): The triangle indices of the detailed height data mesh.
- [polygonTriangleIndices](polygontriangleindices.md): The groups of triangles that make up a polygon in the detailed height data mesh, used to get the corresponding triangles for a given polygon in the generated Navigation Mesh.
