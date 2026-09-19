> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/part/topology

# topology

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The geometric primitive to use when rendering this part.

## Declaration

```swift
var topology: MTLPrimitiveType
```

## See Also

### Describing a low-level mesh part

- [indexOffset](indexoffset.md): The offset, in bytes, of the first index.
- [indexCount](indexcount.md): The number of indices to use for this part.
- [materialIndex](materialindex.md): The material index this part associates with.
- [bounds](bounds.md): The model-space bounding box of this part.
