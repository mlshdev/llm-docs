> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshpart/windingorder](https://developer.apple.com/documentation/realitykit/lowlevelmeshpart/windingorder)

# windingOrder

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The winding order of front-facing polygons.

## Declaration

```swift
final var windingOrder: MTLWinding { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLWinding`.

## See Also

### Configuring the geometry

- [primitive](primitive.md): The geometric primitive to use when rendering this part.
- [setIndexRange(indexOffset:indexCount:)](setindexrange%28indexoffset_indexcount_%29.md): Updates the first index and index count for this mesh part.
