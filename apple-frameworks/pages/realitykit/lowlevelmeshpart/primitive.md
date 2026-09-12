> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshpart/primitive](https://developer.apple.com/documentation/realitykit/lowlevelmeshpart/primitive)

# primitive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The geometric primitive to use when rendering this part.

## Declaration

```swift
final var primitive: MTLPrimitiveType { get }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLPrimitiveType`.

## See Also

### Configuring the geometry

- [windingOrder](windingorder.md): The winding order of front-facing polygons.
- [setIndexRange(indexOffset:indexCount:)](setindexrange%28indexoffset_indexcount_%29.md): Updates the first index and index count for this mesh part.
