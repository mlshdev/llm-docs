> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer](https://developer.apple.com/documentation/coremedia/cmblockbuffer)

# CMBlockBuffer (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a block buffer instance.

## Declaration

```swift
class CMBlockBuffer
```

## Topics

### Modifying a Block Buffer

- [append(length:allocator:range:flags:)](cmblockbuffer/append%28length_allocator_range_flags_%29.md): Adds a memory block to an existing block buffer.
- [append(buffer:allocator:flags:)](cmblockbuffer/append%28buffer_allocator_flags_%29-28keu.md): Adds a memory block to a block buffer using a custom allocator.
- [append(buffer:allocator:flags:)](cmblockbuffer/append%28buffer_allocator_flags_%29-8fws8.md): Adds a sliced memory block to a block buffer using a custom allocator.
- [append(length:allocator:deallocator:range:flags:)](cmblockbuffer/append%28length_allocator_deallocator_range_flags_%29.md): Adds a memory block to a block buffer using a custom allocator and deallocator.
- [append(buffer:deallocator:flags:)](cmblockbuffer/append%28buffer_deallocator_flags_%29-3bfef.md): Adds a memory block to a block buffer with a custom deallocator.
- [append(buffer:deallocator:flags:)](cmblockbuffer/append%28buffer_deallocator_flags_%29-1ibzz.md): Adds a sliced memory block to a block buffer with a custom deallocator.
- [CMBlockBuffer.CustomBlockAllocator](cmblockbuffer/customblockallocator.md): A type that allocates memory blocks.
- [CMBlockBuffer.CustomBlockDeallocator](cmblockbuffer/customblockdeallocator.md): A type that deallocates memory blocks.
- [append(bufferReference:flags:)](cmblockbuffer/append%28bufferreference_flags_%29.md): Adds a reference to another block buffer.
- [assureBlockMemory()](cmblockbuffer/assureblockmemory%28%29.md): Assures that the system allocates all memory blocks.
- [withUnsafeMutableBytes(atOffset:\_:)](cmblockbuffer/withunsafemutablebytes%28atoffset___%29.md): Accesses the data that a block buffer represents.

### Inspecting a Block Buffer

- [isEmpty](cmblockbuffer/isempty.md): A Boolean value that indicates whether the block buffer is empty.

### Accessing the Type Identifier

- [typeID](cmblockbuffer/typeid.md): The type identifier for block buffer objects.

### Data Types

- [CMBlockBuffer.Error](cmblockbuffer/error.md): A structure that defines block buffer errors.
- [CMBlockBuffer.Flags](cmblockbuffer/flags.md): A structure that defines feature and control flags.
- [CMBlockBuffer.Slice](cmblockbuffer/slice.md): A slice of a `CMBlockBuffer` instance.

### Initializers

- [init(referencing:)](cmblockbuffer/init%28referencing_%29.md)

### Type Aliases

- [CMBlockBuffer.T](cmblockbuffer/t.md)

## Relationships

### Conforms To

- [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md)
- [CMBlockBufferProtocol](cmblockbufferprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [CMBlockBufferProtocol](cmblockbufferprotocol.md): A protocol for objects that operate on a range of a block buffer.

# CMBlockBufferRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a block buffer instance.

## Declaration

```objectivec
typedef struct OpaqueCMBlockBuffer * CMBlockBufferRef;
```
