> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator/newzone(_:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator/newzone(_:))

# newZone(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a zone for related memory allocations.

## Declaration

```swift
func newZone(_ capacity: Int) -> any MDLMeshBufferZone
```

## Parameters

- `capacity`: The capacity of the zone to be created.

<a id="return-value"></a>

## Return Value

A new memory zone.

<a id="Discussion"></a>

## Discussion

Objects implementing the [MDLMeshBufferZone](../mdlmeshbufferzone.md) protocol describe a logical pool of memory for allocation of related buffers. The actual class of buffer zone objects vended by an allocator may be private.

## See Also

### Allocating Mesh Buffers

- [newZoneForBuffers(withSize:andType:)](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(\_:type:)](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(from:length:type:)](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(with:type:)](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBuffer(from:data:type:)](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

# newZone: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a zone for related memory allocations.

## Declaration

```objectivec
- (id<MDLMeshBufferZone>) newZone:(NSUInteger) capacity;
```

## Parameters

- `capacity`: The capacity of the zone to be created.

<a id="return-value"></a>

## Return Value

A new memory zone.

<a id="Discussion"></a>

## Discussion

Objects implementing the [MDLMeshBufferZone](../mdlmeshbufferzone.md) protocol describe a logical pool of memory for allocation of related buffers. The actual class of buffer zone objects vended by an allocator may be private.

## See Also

### Allocating Mesh Buffers

- [newZoneForBuffersWithSize:andType:](newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer:type:](newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferFromZone:length:type:](newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferWithData:type:](newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBufferFromZone:data:type:](newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.
