> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/layout](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/layout)

# LowLevelMeshResource.Layout

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes a set of attributes that share a buffer index, offset, and stride.

## Declaration

```swift
struct Layout
```

<a id="overview"></a>

## Overview

If you interleave your data (that is, represent it with a structure), use one `Layout` object where `bufferStride` equals `MemoryLayout<Type>.stride`. If you store attributes separately, use one `Layout` per attribute.

## Topics

### Creating a layout

- [init(bufferIndex:bufferOffset:bufferStride:stepFunction:stepRate:)](layout/init%28bufferindex_bufferoffset_bufferstride_stepfunction_steprate_%29.md): Creates a layout with the given buffer index, offset, stride, step function, and step rate.

### Configuring vertex stepping

- [stepFunction](layout/stepfunction.md): Determines how the vertex shader steps through the data in this layout.
- [stepRate](layout/steprate.md): The number of instances that share the same per-instance vertex data.

### Initializers

- [init()](layout/init%28%29.md): Creates a layout with all fields set to their zero/default values.

### Instance Properties

- [bufferIndex](layout/bufferindex.md): The index of the buffer to use for this layout.
- [bufferOffset](layout/bufferoffset.md): The byte offset into the buffer for the first byte of this layout.
- [bufferStride](layout/bufferstride.md): The distance, in bytes, between consecutive vertices for attributes using this layout.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the mesh layout

- [descriptor](descriptor-swift.property.md): The descriptor used to create this mesh resource.
- [LowLevelMeshResource.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMeshResource.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit custom shader attributes.
- [LowLevelMeshResource.VertexSemantic](vertexsemantic.md): The intended usage of a vertex attribute.
