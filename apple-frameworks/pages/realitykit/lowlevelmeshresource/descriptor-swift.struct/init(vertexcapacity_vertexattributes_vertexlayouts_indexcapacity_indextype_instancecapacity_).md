> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:instancecapacity:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/init(vertexcapacity:vertexattributes:vertexlayouts:indexcapacity:indextype:instancecapacity:))

# init(vertexCapacity:vertexAttributes:vertexLayouts:indexCapacity:indexType:instanceCapacity:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a mesh descriptor with the given vertex capacity, attributes, layouts, index capacity, index type, and instance capacity.

## Declaration

```swift
init(vertexCapacity: Int = 0, vertexAttributes: [LowLevelMeshResource.Attribute] = [Attribute](), vertexLayouts: [LowLevelMeshResource.Layout] = [Layout](), indexCapacity: Int = 0, indexType: MTLIndexType = MTLIndexType.uint32, instanceCapacity: Int = 0)
```

## Parameters

- `vertexCapacity`: The maximum number of vertices to allocate space for. Defaults to `0`.
- `vertexAttributes`: The vertex input attributes. Defaults to `[]`.
- `vertexLayouts`: The vertex buffer layouts. Defaults to `[]`.
- `indexCapacity`: The maximum number of indices to allocate space for. Defaults to `0`.
- `indexType`: The data type of the values stored in the index buffer. Defaults to `.uint32`.
- `instanceCapacity`: The maximum number of instances for per-instance vertex data. Defaults to `0`.
