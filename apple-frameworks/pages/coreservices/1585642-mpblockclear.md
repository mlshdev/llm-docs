> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585642-mpblockclear](https://developer.apple.com/documentation/coreservices/1585642-mpblockclear)

# MPBlockClear

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Clears a block of memory.

## Declaration

```objectivec
void MPBlockClear(LogicalAddress address, ByteCount size);
```

## Parameters

- `address`: The starting address of the memory block you want to clear.
- `size`: The number of bytes you want to clear.

<a id="discussion"></a>

## Discussion

As with all shared memory, your application must synchronize access to the memory blocks to avoid data corruption. `MPBlockClear` ensures the clearing stays within the bounds of the area specified by `size`, but the calling task can be preempted during the copying process. 

Note that you can call this function from an interrupt handler.

## See Also

### Memory Allocation Functions

- [MPAllocate](1585756-mpallocate.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPAllocateAligned](1585774-mpallocatealigned.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockCopy](1585707-mpblockcopy.md): Deprecated. Copies a block of memory.
- [MPFree](1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
- [MPGetAllocatedBlockSize](1585717-mpgetallocatedblocksize.md): Deprecated. Returns the size of a memory block.
