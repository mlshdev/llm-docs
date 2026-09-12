> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/part/bounds](https://developer.apple.com/documentation/realitykit/lowlevelmesh/part/bounds)

# bounds

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The model-space bounding box of this part.

## Declaration

```swift
var bounds: BoundingBox
```

<a id="discussion"></a>

## Discussion

RealityKit uses this bounding box for culling the mesh against the active camera.

Take care to maintain the bounds of each mesh part so that it completely contains the part’s geometry. Otherwise, RealityKit may not render your meshes correctly.

> **Note**

> On visionOS, if these bounds don’t completely contain the part’s geometry, you might see pixelated passthrough artifacts on the mesh due to inaccurate depth reprojection. Provide a correct bounding box for your virtual content, or if the mesh is animated by a shader, make the bounding box more conservative.

## See Also

### Describing a low-level mesh part

- [indexOffset](indexoffset.md): The offset, in bytes, of the first index.
- [indexCount](indexcount.md): The number of indices to use for this part.
- [topology](topology.md): The geometric primitive to use when rendering this part.
- [materialIndex](materialindex.md): The material index this part associates with.
