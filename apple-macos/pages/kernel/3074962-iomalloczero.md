> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3074962-iomalloczero](https://developer.apple.com/documentation/kernel/3074962-iomalloczero)

# IOMallocZero

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
void * IOMallocZero(vm_size_t size);
```

## See Also

### Allocation

- [IOMalloc](1575326-iomalloc.md): Allocates general purpose, wired memory in the kernel map.
- [IOMallocAligned](1575291-iomallocaligned.md): Allocates wired memory in the kernel map, with an alignment restriction.
- [IOMallocPageable](1575327-iomallocpageable.md): Allocates pageable memory in the kernel map.
- [IORangeAllocator](iorangeallocator.md): A utility class to manage allocations from a range.
