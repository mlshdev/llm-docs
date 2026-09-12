> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbuffer](https://developer.apple.com/documentation/metalkit/mtkmeshbuffer)

# MTKMeshBuffer (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```swift
class MTKMeshBuffer
```

## Topics

### Originating Objects

- [allocator](mtkmeshbuffer/allocator.md): The allocator object used to create this mesh buffer.
- [type](mtkmeshbuffer/type.md): The type of data contained in the originating Model I/O buffer.

### Metal Buffer Properties

- [buffer](mtkmeshbuffer/buffer.md): The Metal buffer backing all vertex and index data.
- [length](mtkmeshbuffer/length.md): The logical size of the Metal buffer, in bytes.
- [offset](mtkmeshbuffer/offset.md): The byte offset of the data within the Metal buffer.

### Instance Methods

- [zone()](mtkmeshbuffer/zone%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLMeshBuffer](../modelio/mdlmeshbuffer.md)
- [MDLNamed](../modelio/mdlnamed.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.

# MTKMeshBuffer (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```objectivec
@interface MTKMeshBuffer : NSObject
```

## Topics

### Originating Objects

- [allocator](mtkmeshbuffer/allocator.md): The allocator object used to create this mesh buffer.
- [zone](mtkmeshbuffer/zone.md): The zone, if any, from which this mesh buffer was created.
- [type](mtkmeshbuffer/type.md): The type of data contained in the originating Model I/O buffer.

### Metal Buffer Properties

- [buffer](mtkmeshbuffer/buffer.md): The Metal buffer backing all vertex and index data.
- [length](mtkmeshbuffer/length.md): The logical size of the Metal buffer, in bytes.
- [offset](mtkmeshbuffer/offset.md): The byte offset of the data within the Metal buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLMeshBuffer](../modelio/mdlmeshbuffer.md)
- [MDLNamed](../modelio/mdlnamed.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.
