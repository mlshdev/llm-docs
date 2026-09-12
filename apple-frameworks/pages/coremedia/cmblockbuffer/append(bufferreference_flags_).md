> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer/append(bufferreference:flags:)](https://developer.apple.com/documentation/coremedia/cmblockbuffer/append(bufferreference:flags:))

# append(bufferReference:flags:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a reference to another block buffer.

## Declaration

```swift
func append<T>(bufferReference: T, flags: CMBlockBuffer.Flags = []) throws where T : CMBlockBufferProtocol
```

## Parameters

- `bufferReference`: A block buffer to refer to. The buffer must not be empty unless you also pass the [permitEmptyReference](flags/permitemptyreference.md) flag.
- `flags`: Feature and control flags.

## See Also

### Modifying a Block Buffer

- [append(length:allocator:range:flags:)](append%28length_allocator_range_flags_%29.md): Adds a memory block to an existing block buffer.
- [append(buffer:allocator:flags:)](append%28buffer_allocator_flags_%29-28keu.md): Adds a memory block to a block buffer using a custom allocator.
- [append(buffer:allocator:flags:)](append%28buffer_allocator_flags_%29-8fws8.md): Adds a sliced memory block to a block buffer using a custom allocator.
- [append(length:allocator:deallocator:range:flags:)](append%28length_allocator_deallocator_range_flags_%29.md): Adds a memory block to a block buffer using a custom allocator and deallocator.
- [append(buffer:deallocator:flags:)](append%28buffer_deallocator_flags_%29-3bfef.md): Adds a memory block to a block buffer with a custom deallocator.
- [append(buffer:deallocator:flags:)](append%28buffer_deallocator_flags_%29-1ibzz.md): Adds a sliced memory block to a block buffer with a custom deallocator.
- [CMBlockBuffer.CustomBlockAllocator](customblockallocator.md): A type that allocates memory blocks.
- [CMBlockBuffer.CustomBlockDeallocator](customblockdeallocator.md): A type that deallocates memory blocks.
- [assureBlockMemory()](assureblockmemory%28%29.md): Assures that the system allocates all memory blocks.
- [withUnsafeMutableBytes(atOffset:\_:)](withunsafemutablebytes%28atoffset___%29.md): Accesses the data that a block buffer represents.
