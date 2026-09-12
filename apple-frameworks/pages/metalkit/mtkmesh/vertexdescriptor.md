> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmesh/vertexdescriptor](https://developer.apple.com/documentation/metalkit/mtkmesh/vertexdescriptor)

# vertexDescriptor (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Model I/O vertex descriptor specifying the data layout in the vertex buffers.

## Declaration

```swift
var vertexDescriptor: MDLVertexDescriptor { get }
```

<a id="Discussion"></a>

## Discussion

This is a convenience property. The [MTKMesh](../mtkmesh.md) class does not use this descriptor, but your application may use this object to determine rendering state or create a [MTLVertexDescriptor](../../metal/mtlvertexdescriptor.md) object to build a [MTLRenderPipelineState](../../metal/mtlrenderpipelinestate.md) object capable of interpreting the data in [vertexBuffers](vertexbuffers.md).

## See Also

### Vertex Properties

- [vertexBuffers](vertexbuffers.md): An array of buffers in which mesh vertex data resides.
- [vertexCount](vertexcount.md): The number of vertices in the vertex buffers.

# vertexDescriptor (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Model I/O vertex descriptor specifying the data layout in the vertex buffers.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) MDLVertexDescriptor * vertexDescriptor;
```

<a id="Discussion"></a>

## Discussion

This is a convenience property. The [MTKMesh](../mtkmesh.md) class does not use this descriptor, but your application may use this object to determine rendering state or create a [MTLVertexDescriptor](../../metal/mtlvertexdescriptor.md) object to build a [MTLRenderPipelineState](../../metal/mtlrenderpipelinestate.md) object capable of interpreting the data in [vertexBuffers](vertexbuffers.md).

## See Also

### Vertex Properties

- [vertexBuffers](vertexbuffers.md): An array of buffers in which mesh vertex data resides.
- [vertexCount](vertexcount.md): The number of vertices in the vertex buffers.
