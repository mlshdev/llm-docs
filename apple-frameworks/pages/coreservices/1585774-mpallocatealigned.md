> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585774-mpallocatealigned](https://developer.apple.com/documentation/coreservices/1585774-mpallocatealigned)

# MPAllocateAligned

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Allocates a nonrelocatable memory block.

## Declaration

```objectivec
LogicalAddress MPAllocateAligned(ByteCount size, UInt8 alignment, OptionBits options);
```

## Parameters

- `size`: The size, in bytes, of the memory block to allocate.
- `alignment`: The desired alignment of the allocated memory block. See [Memory Allocation Alignment Constants](1585698-memory_allocation_alignment_cons.md) for a list of possible values to pass. Note that there will be a minimum alignment regardless of the requested alignment. If the requested memory block is 4 bytes or smaller, the block will be at least 4-byte aligned. If the requested block is greater than 4 bytes, the block will be at least 8-byte aligned.
- `options`: Any optional information to use with this call. See [Memory Allocation Option Constants](1585664-memory_allocation_option_constan.md) for a list of possible values to pass.

<a id="return_value"></a>

## Return Value

A pointer to the allocated memory. If the function cannot allocate the requested memory or the requested alignment, the returned address is `NULL`.

<a id="discussion"></a>

## Discussion

The memory referenced by the returned address is guaranteed to be accessible by the application's cooperative task and any preemptive tasks that it creates, but not by other applications or their preemptive tasks. Any existing non-global heap blocks are freed when the application terminates. As with all shared memory, you must explicitly synchronize access to allocated heap blocks using a notification mechanism.

You can replicate the effect of the older `MPAllocate` function by calling `MPAllocateAligned` with 32-byte alignment and no options. 

Also see the function  [MPFree](1585676-mpfree.md). 

<a id="1674465"></a>

### Special Considerations

macOS does not support allocation of global (cross address space) or resident memory with this function. In addition, passing the `kMPAllocateNoGrowthMask` constant in the `options` parameter has no effect in macOS, since memory allocation is done with sparse heaps.

## See Also

### Memory Allocation Functions

- [MPAllocate](1585756-mpallocate.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockClear](1585642-mpblockclear.md): Deprecated. Clears a block of memory.
- [MPBlockCopy](1585707-mpblockcopy.md): Deprecated. Copies a block of memory.
- [MPFree](1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
- [MPGetAllocatedBlockSize](1585717-mpgetallocatedblocksize.md): Deprecated. Returns the size of a memory block.
