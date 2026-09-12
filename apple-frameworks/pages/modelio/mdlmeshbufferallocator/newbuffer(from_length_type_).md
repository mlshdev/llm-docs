> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newbuffer(from:length:type:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newbuffer(from:length:type:))

# newBuffer(from:length:type:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer of the specified length in the specified zone.

## Declaration

```swift
func newBuffer(from zone: (any MDLMeshBufferZone)?, length: Int, type: MDLMeshBufferType) -> (any MDLMeshBuffer)?
```

## Parameters

- `zone`: A pool of memory for related allocations, as returned by the [newZone(\_:)](newzone%28__%29.md) method.
- `length`: The size, in bytes, of the buffer to create.
- `type`: Use [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

Use this method when making multiple related allocations that should share the same memory pool.

The concrete class implementing this protocol determines the initial contents of the buffer.

## See Also

### Allocating Mesh Buffers

- [newZone(\_:)](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffers(withSize:andType:)](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(\_:type:)](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(with:type:)](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

# newBufferFromZone:length:type: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer of the specified length in the specified zone.

## Declaration

```objectivec
- (id<MDLMeshBuffer>) newBufferFromZone:(id<MDLMeshBufferZone>) zone length:(NSUInteger) length type:(MDLMeshBufferType) type;
```

## Parameters

- `zone`: A pool of memory for related allocations, as returned by the [newZone:](newzone%28__%29.md) method.
- `length`: The size, in bytes, of the buffer to create.
- `type`: Use [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

Use this method when making multiple related allocations that should share the same memory pool.

The concrete class implementing this protocol determines the initial contents of the buffer.

## See Also

### Allocating Mesh Buffers

- [newZone:](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffersWithSize:andType:](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer:type:](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferWithData:type:](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.
