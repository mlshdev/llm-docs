> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothmeshshape/bias

# bias

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The distance by which the vertices are extended outwards along the direction of their normals.

## Declaration

```swift
var bias: Float
```

<a id="discussion"></a>

## Discussion

This can be used to make a mesh collider slightly larger than its visual counterpart in order to avoid z-fighting.

## See Also

### Configuring the mesh shape

- [mesh](mesh.md): The mesh resource that this shape is based off.
