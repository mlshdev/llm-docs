> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbufferallocator](https://developer.apple.com/documentation/metalkit/mtkmeshbufferallocator)

# MTKMeshBufferAllocator (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```swift
class MTKMeshBufferAllocator
```

## Topics

### Initialization

- [init(device:)](mtkmeshbufferallocator/init%28device_%29.md): Initializes a new allocator object.

### Device

- [device](mtkmeshbufferallocator/device.md): The device used to create Metal objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLMeshBufferAllocator](../modelio/mdlmeshbufferallocator.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.

# MTKMeshBufferAllocator (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```objectivec
@interface MTKMeshBufferAllocator : NSObject
```

## Topics

### Initialization

- [initWithDevice:](mtkmeshbufferallocator/init%28device_%29.md): Initializes a new allocator object.

### Device

- [device](mtkmeshbufferallocator/device.md): The device used to create Metal objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLMeshBufferAllocator](../modelio/mdlmeshbufferallocator.md)

## See Also

### Model Handling

- [MTKMesh](mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.
