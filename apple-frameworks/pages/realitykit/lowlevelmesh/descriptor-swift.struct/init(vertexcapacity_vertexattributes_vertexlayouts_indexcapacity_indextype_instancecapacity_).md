> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:instancecapacity:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:instancecapacity:))

# init(vertexCapacity:vertexAttributes:vertexLayouts:indexCapacity:indexType:instanceCapacity:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor for a low-level mesh.

## Declaration

```swift
init(vertexCapacity: Int = 0, vertexAttributes: [LowLevelMesh.Attribute] = [Attribute](), vertexLayouts: [LowLevelMesh.Layout] = [Layout](), indexCapacity: Int = 0, indexType: MTLIndexType = MTLIndexType.uint32, instanceCapacity: Int = 0)
```

## Parameters

- `vertexCapacity`: The maximum number of vertices the system can store in the mesh.
- `vertexAttributes`: The attributes of the vertices.
- `vertexLayouts`: The layouts for the vertex buffers.
- `indexCapacity`: The maximum number of vertices the system can store in a single buffer.
- `indexType`: The index type to use for the mesh.
- `instanceCapacity`: The maximum number of instances the mesh supports.

<a id="discussion"></a>

## Discussion

To create a new [LowLevelMesh](../../lowlevelmesh.md), first create a `Descriptor` object and set its property values, then use that `Descriptor` with [init(descriptor:)](../init%28descriptor_%29.md).
