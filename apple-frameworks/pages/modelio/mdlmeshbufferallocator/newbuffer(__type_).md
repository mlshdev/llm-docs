> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newbuffer(_:type:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newbuffer(_:type:))

# newBuffer(\_:type:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer of the specified length.

## Declaration

```swift
func newBuffer(_ length: Int, type: MDLMeshBufferType) -> any MDLMeshBuffer
```

## Parameters

- `length`: The size, in bytes, of the buffer to create.
- `type`: Use [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

The concrete class implementing this protocol determines the initial contents of the buffer and the memory pool from which the buffer is allocated. To provide a hint that multiple related allocations should share the same pool of memory, use the [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md) method instead.

## See Also

### Allocating Mesh Buffers

- [newZone(\_:)](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffers(withSize:andType:)](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(with:type:)](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

# newBuffer:type: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer of the specified length.

## Declaration

```objectivec
- (id<MDLMeshBuffer>) newBuffer:(NSUInteger) length type:(MDLMeshBufferType) type;
```

## Parameters

- `length`: The size, in bytes, of the buffer to create.
- `type`: Use [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

The concrete class implementing this protocol determines the initial contents of the buffer and the memory pool from which the buffer is allocated. To provide a hint that multiple related allocations should share the same pool of memory, use the [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md) method instead.

## See Also

### Allocating Mesh Buffers

- [newZone:](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffersWithSize:andType:](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferWithData:type:](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.
