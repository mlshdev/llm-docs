> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575330-iofreealigned](https://developer.apple.com/documentation/kernel/1575330-iofreealigned)

# IOFreeAligned

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Frees memory allocated with IOMallocAligned.

## Declaration

```objectivec
void IOFreeAligned(void *address, vm_size_t size);
```

## Parameters

- `address`: Pointer to the allocated memory.
- `size`: Size of the memory allocated.

<a id="discussion"></a>

## Discussion

This function frees memory allocated with IOMallocAligned, it may block and so should not be called from interrupt level or while a simple lock is held.

## See Also

### Deallocation

- [IOFree](1575290-iofree.md): Frees memory allocated with IOMalloc.
- [IOFreePageable](1575300-iofreepageable.md): Frees memory allocated with IOMallocPageable.
