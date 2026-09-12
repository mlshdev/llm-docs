> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:))

# init(vertexCapacity:vertexAttributes:vertexLayouts:indexCapacity:indexType:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a descriptor for a low-level mesh.

## Declaration

```swift
init(vertexCapacity: Int = 0, vertexAttributes: [LowLevelMesh.Attribute] = [Attribute](), vertexLayouts: [LowLevelMesh.Layout] = [Layout](), indexCapacity: Int = 0, indexType: MTLIndexType = MTLIndexType.uint32)
```

## Parameters

- `vertexCapacity`: The maximum number of vertices the system can store in the mesh.
- `vertexAttributes`: The attributes of the vertices.
- `vertexLayouts`: The layouts for the vertex buffers.
- `indexCapacity`: The maximum number of vertices the system can store in a single buffer.
- `indexType`: The index type to use for the mesh.

<a id="discussion"></a>

## Discussion

To create a new [LowLevelMesh](../../lowlevelmesh.md), first create a `Descriptor` object and set its property values, then use that `Descriptor` with [init(descriptor:)](../init%28descriptor_%29.md).
