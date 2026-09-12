> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585717-mpgetallocatedblocksize](https://developer.apple.com/documentation/coreservices/1585717-mpgetallocatedblocksize)

# MPGetAllocatedBlockSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the size of a memory block.

## Declaration

```objectivec
ByteCount MPGetAllocatedBlockSize(LogicalAddress object);
```

## Parameters

- `object`: The address of the memory block whose size you want to determine.

<a id="return_value"></a>

## Return Value

The size of the allocated memory block, in bytes.

## See Also

### Memory Allocation Functions

- [MPAllocate](1585756-mpallocate.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPAllocateAligned](1585774-mpallocatealigned.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockClear](1585642-mpblockclear.md): Deprecated. Clears a block of memory.
- [MPBlockCopy](1585707-mpblockcopy.md): Deprecated. Copies a block of memory.
- [MPFree](1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
