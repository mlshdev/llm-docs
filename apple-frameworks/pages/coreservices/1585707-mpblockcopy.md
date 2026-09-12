> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585707-mpblockcopy](https://developer.apple.com/documentation/coreservices/1585707-mpblockcopy)

# MPBlockCopy

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Copies a block of memory.

## Declaration

```objectivec
void MPBlockCopy(LogicalAddress source, LogicalAddress destination, ByteCount size);
```

## Parameters

- `source`: The starting address of the memory block you want to copy.
- `destination`: The location to which you want to copy the memory block.
- `size`: The number of bytes to copy.

<a id="discussion"></a>

## Discussion

This function simply calls through to the Driver Services Library function `BlockMoveData`. Note that you should not make any assumptions about the state of the destination memory while this function is executing. In the intermediate state, values may be present that are neither the original nor the final ones. For example, this function may use the `'dcbz'` instruction. If the underlying memory is not cacheable, if the memory is write-through instead of copy-back, or if the cache block is flushed for some reason, the `'dcbz'` instruction will write zeros to the destination. You can avoid the use of the `'dcbz'` instruction by calling `BlockMoveDataUncached`, but even that function makes no other guarantees about the memory block's intermediate state.

As with all shared memory, your application must synchronize access to the memory blocks to avoid data corruption. `MPBlockCopy` ensures the copying stays within the bounds of the area specified by `size`, but the calling task can be preempted during the copying process. 

Note that you can call this function from an interrupt handler.

## See Also

### Memory Allocation Functions

- [MPAllocate](1585756-mpallocate.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPAllocateAligned](1585774-mpallocatealigned.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockClear](1585642-mpblockclear.md): Deprecated. Clears a block of memory.
- [MPFree](1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
- [MPGetAllocatedBlockSize](1585717-mpgetallocatedblocksize.md): Deprecated. Returns the size of a memory block.
