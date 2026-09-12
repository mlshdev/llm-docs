> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makemeshpart(resource:indexoffset:indexcount:primitive:windingorder:bounds:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makemeshpart(resource:indexoffset:indexcount:primitive:windingorder:bounds:))

# makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a mesh part that selects a contiguous range of indices from a mesh resource.

## Declaration

```swift
final func makeMeshPart(resource: LowLevelMeshResource, indexOffset: Int, indexCount: Int, primitive: MTLPrimitiveType, windingOrder: MTLWinding, bounds: BoundingSphereBox) throws -> LowLevelMeshPart
```

## Parameters

- `resource`: The mesh resource whose index and vertex buffers this part draws from.
- `indexOffset`: The byte offset of the first index within the index buffer.
- `indexCount`: The number of indices to use for this part.
- `primitive`: The geometric primitive type to use when rendering.
- `windingOrder`: The winding order that identifies front-facing polygons.
- `bounds`: The model-space bounding volume for this part.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshPart](../lowlevelmeshpart.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the index range falls outside the resource’s index buffer.
