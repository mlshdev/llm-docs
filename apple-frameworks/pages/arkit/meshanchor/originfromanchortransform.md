> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/meshanchor/originfromanchortransform

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The location and orientation of a mesh in world space.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Getting mesh information

- [geometry](geometry-swift.property.md): The shape of a mesh anchor.
- [MeshAnchor.Geometry](geometry-swift.struct.md): The shapes that make up a mesh anchor.
- [MeshAnchor.MeshClassification](meshclassification.md): Deprecated. The kinds of classification a face of a mesh can have.
