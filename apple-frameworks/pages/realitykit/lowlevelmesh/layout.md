> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/layout](https://developer.apple.com/documentation/realitykit/lowlevelmesh/layout)

# LowLevelMesh.Layout

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that describes a set of attributes that share a buffer index, offset, and stride.

## Declaration

```swift
struct Layout
```

<a id="overview"></a>

## Overview

Applications typically express their types using contiguous or interleaved (strided) memory.

If you interleave your data (meaning that you represent it with a structure), use one `Layout` object where [bufferStride](layout/bufferstride.md) is equal to `MemoryLayout<Type>.stride()`.

If you store your attributes separately, use one `Layout` per attribute.

## Topics

### Creating a low-level mesh layout

- [init(bufferIndex:bufferOffset:bufferStride:)](layout/init%28bufferindex_bufferoffset_bufferstride_%29.md)

### Describing a low-level mesh layout

- [bufferIndex](layout/bufferindex.md): The index of the buffer to use for this layout.
- [bufferOffset](layout/bufferoffset.md): The byte offset into the buffer for the first byte of this layout.
- [bufferStride](layout/bufferstride.md): The distance, in bytes, between consecutive vertices for attributes using this layout.

### Creating a layout

- [init(bufferIndex:bufferOffset:bufferStride:stepFunction:stepRate:)](layout/init%28bufferindex_bufferoffset_bufferstride_stepfunction_steprate_%29.md)

### Configuring vertex stepping

- [stepFunction](layout/stepfunction.md): Determines how the vertex shader steps through the data in this layout.
- [stepRate](layout/steprate.md): The number of instances that share the same per-instance vertex data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updatable meshes

- [Integrating virtual objects with your environment](../integrating-virtual-objects-with-your-environment.md): Create an immersive game using native anchor support, environmental blending, model manipulation, and mesh instance duplication.
- [Creating a spatial drawing app with RealityKit](../creating-a-spatial-drawing-app-with-realitykit.md): Use low-level mesh and texture APIs to achieve fast updates to a person’s brush strokes by integrating RealityKit with ARKit and SwiftUI.
- [Creating a plane with low-level mesh](../creating-a-plane-with-low-level-mesh.md): Create a low-level mesh and set its vertex positions and normals to form a plane.
- [LowLevelMesh](../lowlevelmesh.md): A container for vertex data that you can use to create and update meshes using your own format.
- [LowLevelMesh.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMesh.Part](part.md): An object that describes a range of primitives to display, and their material index.
- [LowLevelMesh.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit shader attributes.
- [LowLevelMesh.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelMesh.PartsCollection](partscollection.md): An object that holds a mutable collection low-level mesh parts.
- [LowLevelBuffer](../lowlevelbuffer.md)
- [LowLevelInstanceData](../lowlevelinstancedata.md)
