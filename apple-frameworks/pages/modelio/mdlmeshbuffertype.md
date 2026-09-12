> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffertype](https://developer.apple.com/documentation/modelio/mdlmeshbuffertype)

# MDLMeshBufferType (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.

## Declaration

```swift
enum MDLMeshBufferType
```

## Topics

### Constants

- [MDLMeshBufferType.vertex](mdlmeshbuffertype/vertex.md): The buffer contains per-vertex data for one or more vertex attributes of a [MDLMesh](mdlmesh.md) object.
- [MDLMeshBufferType.index](mdlmeshbuffertype/index.md): The buffer contains index data for a [MDLSubmesh](mdlsubmesh.md) object.

### Enumeration Cases

- [MDLMeshBufferType.custom](mdlmeshbuffertype/custom.md)

### Initializers

- [init(rawValue:)](mdlmeshbuffertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MDLMeshBufferType (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.

## Declaration

```objectivec
enum MDLMeshBufferType : NSUInteger;
```

## Topics

### Constants

- [MDLMeshBufferTypeVertex](mdlmeshbuffertype/vertex.md): The buffer contains per-vertex data for one or more vertex attributes of a [MDLMesh](mdlmesh.md) object.
- [MDLMeshBufferTypeIndex](mdlmeshbuffertype/index.md): The buffer contains index data for a [MDLSubmesh](mdlsubmesh.md) object.

### Enumeration Cases

- [MDLMeshBufferTypeCustom](mdlmeshbuffertype/custom.md)
