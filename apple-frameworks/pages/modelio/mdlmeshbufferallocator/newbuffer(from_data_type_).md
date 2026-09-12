> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newbuffer(from:data:type:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newbuffer(from:data:type:))

# newBuffer(from:data:type:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer containing the specified data in the specified zone.

## Declaration

```swift
func newBuffer(from zone: (any MDLMeshBufferZone)?, data: Data, type: MDLMeshBufferType) -> (any MDLMeshBuffer)?
```

## Parameters

- `zone`: A pool of memory for related allocations, as returned by the [newZone(\_:)](newzone%28__%29.md) method.
- `data`: The initial data to store in the buffer. Implementations of this protocol typically copy this data.
- `type`: Use [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

Use this method when making multiple related allocations that should share the same memory pool.

## See Also

### Allocating Mesh Buffers

- [newZone(\_:)](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffers(withSize:andType:)](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(\_:type:)](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(with:type:)](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.

# newBufferFromZone:data:type: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new buffer containing the specified data in the specified zone.

## Declaration

```objectivec
- (id<MDLMeshBuffer>) newBufferFromZone:(id<MDLMeshBufferZone>) zone data:(NSData *) data type:(MDLMeshBufferType) type;
```

## Parameters

- `zone`: A pool of memory for related allocations, as returned by the [newZone:](newzone%28__%29.md) method.
- `data`: The initial data to store in the buffer. Implementations of this protocol typically copy this data.
- `type`: Use [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

Use this method when making multiple related allocations that should share the same memory pool.

## See Also

### Allocating Mesh Buffers

- [newZone:](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffersWithSize:andType:](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer:type:](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferWithData:type:](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
