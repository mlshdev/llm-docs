> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newzoneforbuffers(withsize:andtype:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newzoneforbuffers(withsize:andtype:))

# newZoneForBuffers(withSize:andType:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a zone large enough to fit the specified group of allocation sizes.

## Declaration

```swift
func newZoneForBuffers(withSize sizes: [NSNumber], andType types: [NSNumber]) -> any MDLMeshBufferZone
```

## Parameters

- `sizes`: An array of integers, each the length in bytes of an allocation to be made later.
- `types`: An array of integers, each the [MDLMeshBufferType](../mdlmeshbuffertype.md) value corresponding to an allocation described in the `sizes` array.

<a id="return-value"></a>

## Return Value

A new memory zone.

<a id="Discussion"></a>

## Discussion

Objects implementing the [MDLMeshBufferZone](../mdlmeshbufferzone.md) protocol describe a logical pool of memory for allocation of related buffers. The actual class of buffer zone objects vended by an allocator may be private.

This method creates a zone with enough capacity to allocate buffers with the sizes and types specified, taking into account any alignment restrictions necessary to use these buffers.

## See Also

### Allocating Mesh Buffers

- [newZone(\_:)](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newBuffer(\_:type:)](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(with:type:)](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

# newZoneForBuffersWithSize:andType: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a zone large enough to fit the specified group of allocation sizes.

## Declaration

```objectivec
- (id<MDLMeshBufferZone>) newZoneForBuffersWithSize:(NSArray<NSNumber *> *) sizes andType:(NSArray<NSNumber *> *) types;
```

## Parameters

- `sizes`: An array of integers, each the length in bytes of an allocation to be made later.
- `types`: An array of integers, each the [MDLMeshBufferType](../mdlmeshbuffertype.md) value corresponding to an allocation described in the `sizes` array.

<a id="return-value"></a>

## Return Value

A new memory zone.

<a id="Discussion"></a>

## Discussion

Objects implementing the [MDLMeshBufferZone](../mdlmeshbufferzone.md) protocol describe a logical pool of memory for allocation of related buffers. The actual class of buffer zone objects vended by an allocator may be private.

This method creates a zone with enough capacity to allocate buffers with the sizes and types specified, taking into account any alignment restrictions necessary to use these buffers.

## See Also

### Allocating Mesh Buffers

- [newZone:](newzone%28__%29.md): Creates a zone for related memory allocations.
- [newBuffer:type:](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferWithData:type:](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.
