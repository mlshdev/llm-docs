> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtksubmesh](https://developer.apple.com/documentation/metalkit/mtksubmesh)

# MTKSubmesh (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for the index data of a Model I/O submesh, suitable for use in a Metal app.

## Declaration

```swift
class MTKSubmesh
```

<a id="overview"></a>

## Overview

The [MTKSubmesh](mtksubmesh.md) class provides a container for a segment of mesh data that can be rendered in a single draw call. A submesh can only be initialized as part of a [MTKMesh](mtkmesh.md) object. Each submesh contains an index buffer with which the parent’s mesh data can be rendered. Actual submesh vertex data resides in the submesh’s parent mesh. For more information on Model I/O submeshes, see [MDLSubmesh](../modelio/mdlsubmesh.md).

## Topics

### Parent Mesh

- [mesh](mtksubmesh/mesh.md): The parent mesh containing the vertex data of this submesh.

### Properties used to Draw Indexed Primitives

- [indexBuffer](mtksubmesh/indexbuffer.md): The index buffer used to render the submesh object.
- [indexCount](mtksubmesh/indexcount.md): The number of indices in the index buffer.
- [indexType](mtksubmesh/indextype.md): The type of index data in the index buffer.
- [primitiveType](mtksubmesh/primitivetype.md): The primitive type with which to draw the submesh object.

### Identifying Properties

- [name](mtksubmesh/name.md): The name of the submesh.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.

# MTKSubmesh (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for the index data of a Model I/O submesh, suitable for use in a Metal app.

## Declaration

```objectivec
@interface MTKSubmesh : NSObject
```

<a id="overview"></a>

## Overview

The [MTKSubmesh](mtksubmesh.md) class provides a container for a segment of mesh data that can be rendered in a single draw call. A submesh can only be initialized as part of a [MTKMesh](mtkmesh.md) object. Each submesh contains an index buffer with which the parent’s mesh data can be rendered. Actual submesh vertex data resides in the submesh’s parent mesh. For more information on Model I/O submeshes, see [MDLSubmesh](../modelio/mdlsubmesh.md).

## Topics

### Parent Mesh

- [mesh](mtksubmesh/mesh.md): The parent mesh containing the vertex data of this submesh.

### Properties used to Draw Indexed Primitives

- [indexBuffer](mtksubmesh/indexbuffer.md): The index buffer used to render the submesh object.
- [indexCount](mtksubmesh/indexcount.md): The number of indices in the index buffer.
- [indexType](mtksubmesh/indextype.md): The type of index data in the index buffer.
- [primitiveType](mtksubmesh/primitivetype.md): The primitive type with which to draw the submesh object.

### Identifying Properties

- [name](mtksubmesh/name.md): The name of the submesh.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.
