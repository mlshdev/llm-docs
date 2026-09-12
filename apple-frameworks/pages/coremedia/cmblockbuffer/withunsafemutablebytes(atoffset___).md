> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer/withunsafemutablebytes(atoffset:_:)](https://developer.apple.com/documentation/coremedia/cmblockbuffer/withunsafemutablebytes(atoffset:_:))

# withUnsafeMutableBytes(atOffset:\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses the data that a block buffer represents.

## Declaration

```swift
func withUnsafeMutableBytes<R>(atOffset offset: Int = 0, _ body: (UnsafeMutableRawBufferPointer) throws -> R) throws -> R
```

## Parameters

- `offset`: An offset within the buffer’s offset range.
- `body`: A closure the system calls with an [UnsafeMutableRawBufferPointer](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer) parameter that points to contiguous storage in the block buffer.

<a id="return-value"></a>

## Return Value

The value, if any, that the body parameter returns

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
- [append(bufferReference:flags:)](append%28bufferreference_flags_%29.md): Adds a reference to another block buffer.
- [assureBlockMemory()](assureblockmemory%28%29.md): Assures that the system allocates all memory blocks.
