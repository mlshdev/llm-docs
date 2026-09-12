> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer/append(length:allocator:range:flags:)](https://developer.apple.com/documentation/coremedia/cmblockbuffer/append(length:allocator:range:flags:))

# append(length:allocator:range:flags:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a memory block to an existing block buffer.

## Declaration

```swift
func append(length: Int, allocator: CFAllocator? = kCFAllocatorDefault, range: Range<Int>? = nil, flags: CMBlockBuffer.Flags = []) throws
```

## Parameters

- `length`: The length of the memory block in bytes. Must not be zero. This is the size to allocate when you call the [assureBlockMemory()](assureblockmemory%28%29.md) function.
- `allocator`: The allocator to use to allocate the memory block.
- `range`: The range within the memory block to which the block buffer should refer to data. If this value is `nil`, the block buffer uses the whole memory block.
- `flags`: Flags to control the behavior of the operation.

## See Also

### Modifying a Block Buffer

- [append(buffer:allocator:flags:)](append%28buffer_allocator_flags_%29-28keu.md): Adds a memory block to a block buffer using a custom allocator.
- [append(buffer:allocator:flags:)](append%28buffer_allocator_flags_%29-8fws8.md): Adds a sliced memory block to a block buffer using a custom allocator.
- [append(length:allocator:deallocator:range:flags:)](append%28length_allocator_deallocator_range_flags_%29.md): Adds a memory block to a block buffer using a custom allocator and deallocator.
- [append(buffer:deallocator:flags:)](append%28buffer_deallocator_flags_%29-3bfef.md): Adds a memory block to a block buffer with a custom deallocator.
- [append(buffer:deallocator:flags:)](append%28buffer_deallocator_flags_%29-1ibzz.md): Adds a sliced memory block to a block buffer with a custom deallocator.
- [CMBlockBuffer.CustomBlockAllocator](customblockallocator.md): A type that allocates memory blocks.
- [CMBlockBuffer.CustomBlockDeallocator](customblockdeallocator.md): A type that deallocates memory blocks.
- [append(bufferReference:flags:)](append%28bufferreference_flags_%29.md): Adds a reference to another block buffer.
- [assureBlockMemory()](assureblockmemory%28%29.md): Assures that the system allocates all memory blocks.
- [withUnsafeMutableBytes(atOffset:\_:)](withunsafemutablebytes%28atoffset___%29.md): Accesses the data that a block buffer represents.
