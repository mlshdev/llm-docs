> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newbuffer(with:type:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newbuffer(with:type:))

# newBuffer(with:type:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer containing the specified data.

## Declaration

```swift
func newBuffer(with data: Data, type: MDLMeshBufferType) -> any MDLMeshBuffer
```

## Parameters

- `data`: The initial data to store in the buffer. Implementations of this protocol typically copy this data.
- `type`: Use [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

The concrete class implementing this protocol determines the memory pool from which the buffer is allocated. To provide a hint that multiple related allocations should share the same pool of memory, use the [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md) method instead.

## See Also

### Allocating Mesh Buffers

- [newZone(\_:)](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffers(withSize:andType:)](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(\_:type:)](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

# newBufferWithData:type: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer containing the specified data.

## Declaration

```objectivec
- (id<MDLMeshBuffer>) newBufferWithData:(NSData *) data type:(MDLMeshBufferType) type;
```

## Parameters

- `data`: The initial data to store in the buffer. Implementations of this protocol typically copy this data.
- `type`: Use [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

The concrete class implementing this protocol determines the memory pool from which the buffer is allocated. To provide a hint that multiple related allocations should share the same pool of memory, use the [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md) method instead.

## See Also

### Allocating Mesh Buffers

- [newZone:](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffersWithSize:andType:](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer:type:](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.
