> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct)

# LowLevelMeshResource.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes the data format and layout of the buffers in a low-level mesh.

## Declaration

```swift
struct Descriptor
```

<a id="overview"></a>

## Overview

The descriptor is analogous to `MTLVertexDescriptor`, with additional semantics that make vertex data available in shaders.

## Topics

### Creating a descriptor

- [init(vertexCapacity:vertexAttributes:vertexLayouts:indexCapacity:indexType:instanceCapacity:)](descriptor-swift.struct/init%28vertexcapacity_vertexattributes_vertexlayouts_indexcapacity_indextype_instancecapacity_%29.md): Creates a mesh descriptor with the given vertex capacity, attributes, layouts, index capacity, index type, and instance capacity.

### Configuring instancing

- [instanceCapacity](descriptor-swift.struct/instancecapacity.md): The maximum number of instances the mesh supports when using per-instance vertex data.

### Instance Properties

- [indexCapacity](descriptor-swift.struct/indexcapacity.md): The maximum number of indices to allocate space for.
- [indexType](descriptor-swift.struct/indextype.md): The data type of the values stored in the index buffer.
- [vertexAttributes](descriptor-swift.struct/vertexattributes.md): The vertex input attributes.
- [vertexBufferCount](descriptor-swift.struct/vertexbuffercount.md): The number of buffers this descriptor uses.
- [vertexCapacity](descriptor-swift.struct/vertexcapacity.md): The maximum number of vertices to allocate space for.
- [vertexLayouts](descriptor-swift.struct/vertexlayouts.md): The vertex buffer layouts.

### Type Properties

- [maxVertexBufferCount](descriptor-swift.struct/maxvertexbuffercount.md): The maximum number of separate vertex buffers the renderer supports.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the mesh layout

- [descriptor](descriptor-swift.property.md): The descriptor used to create this mesh resource.
- [LowLevelMeshResource.Layout](layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMeshResource.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit custom shader attributes.
- [LowLevelMeshResource.VertexSemantic](vertexsemantic.md): The intended usage of a vertex attribute.
