> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575326-iomalloc](https://developer.apple.com/documentation/kernel/1575326-iomalloc)

# IOMalloc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Allocates general purpose, wired memory in the kernel map.

## Declaration

```objectivec
void * IOMalloc(vm_size_t size);
```

## Parameters

- `size`: Size of the memory requested.

<a id="return_value"></a>

## Return Value

Pointer to the allocated memory, or zero on failure.

<a id="discussion"></a>

## Discussion

This is a general purpose utility to allocate memory in the kernel. There are no alignment guarantees given on the returned memory, and alignment may vary depending on the kernel configuration. This function may block and so should not be called from interrupt level or while a simple lock is held.

## See Also

### Allocation

- [IOMallocAligned](1575291-iomallocaligned.md): Allocates wired memory in the kernel map, with an alignment restriction.
- [IOMallocPageable](1575327-iomallocpageable.md): Allocates pageable memory in the kernel map.
- [IOMallocZero](3074962-iomalloczero.md)
- [IORangeAllocator](iorangeallocator.md): A utility class to manage allocations from a range.
