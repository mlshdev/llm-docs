> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585756-mpallocate](https://developer.apple.com/documentation/coreservices/1585756-mpallocate)

# MPAllocate

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Allocates a nonrelocatable memory block.

> Use `MPAllocateAligned` instead.

## Declaration

```objectivec
LogicalAddress MPAllocate(ByteCount size);
```

## Parameters

- `size`: The size, in bytes, of the memory block to allocate.

<a id="return_value"></a>

## Return Value

A pointer to the allocated memory. If the function cannot allocate the requested memory or the requested alignment, the returned address is `NULL`.

## See Also

### Memory Allocation Functions

- [MPAllocateAligned](1585774-mpallocatealigned.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockClear](1585642-mpblockclear.md): Deprecated. Clears a block of memory.
- [MPBlockCopy](1585707-mpblockcopy.md): Deprecated. Copies a block of memory.
- [MPFree](1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
- [MPGetAllocatedBlockSize](1585717-mpgetallocatedblocksize.md): Deprecated. Returns the size of a memory block.
