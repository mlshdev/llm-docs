> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575300-iofreepageable](https://developer.apple.com/documentation/kernel/1575300-iofreepageable)

# IOFreePageable

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Frees memory allocated with IOMallocPageable.

## Declaration

```objectivec
void IOFreePageable(void *address, vm_size_t size);
```

## Parameters

- `address`: Virtual address of the allocated memory.
- `size`: Size of the memory allocated.

<a id="discussion"></a>

## Discussion

This function frees memory allocated with IOMallocPageable, it may block and so should not be called from interrupt level or while a simple lock is held.

## See Also

### Deallocation

- [IOFree](1575290-iofree.md): Frees memory allocated with IOMalloc.
- [IOFreeAligned](1575330-iofreealigned.md): Frees memory allocated with IOMallocAligned.
