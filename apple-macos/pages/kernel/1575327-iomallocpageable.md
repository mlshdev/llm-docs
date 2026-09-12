> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575327-iomallocpageable](https://developer.apple.com/documentation/kernel/1575327-iomallocpageable)

# IOMallocPageable

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Allocates pageable memory in the kernel map.

## Declaration

```objectivec
void * IOMallocPageable(vm_size_t size, vm_size_t alignment);
```

## Parameters

- `size`: Size of the memory requested.
- `alignment`: Byte count of the alignment for the memory. For example, pass 256 to get memory allocated at an address with bits 0-7 zero.

<a id="return_value"></a>

## Return Value

Pointer to the allocated memory, or zero on failure.

<a id="discussion"></a>

## Discussion

This is a utility to allocate pageable memory in the kernel. This function may block and so should not be called from interrupt level or while a simple lock is held.

## See Also

### Allocation

- [IOMalloc](1575326-iomalloc.md): Allocates general purpose, wired memory in the kernel map.
- [IOMallocAligned](1575291-iomallocaligned.md): Allocates wired memory in the kernel map, with an alignment restriction.
- [IOMallocZero](3074962-iomalloczero.md)
- [IORangeAllocator](iorangeallocator.md): A utility class to manage allocations from a range.
