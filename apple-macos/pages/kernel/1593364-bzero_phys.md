> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1593364-bzero_phys](https://developer.apple.com/documentation/kernel/1593364-bzero_phys)

# bzero_phys

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
void bzero_phys(addr64_t phys_address, uint32_t length);
```

## See Also

### Memory

- [OSMalloc](1398447-osmalloc.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md).
- [OSMalloc_Tagalloc](1398437-osmalloc_tagalloc.md): Creates a tag for use with OSMalloc functions.
- [OSMalloc_Tagfree](1398439-osmalloc_tagfree.md): Frees a tag used with OSMalloc functions.
- [OSMalloc_noblock](1398431-osmalloc_noblock.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md), returning `NULL` if it would block.
- [OSMalloc_nowait](1398445-osmalloc_nowait.md): Equivalent to [OSMalloc_noblock](1398431-osmalloc_noblock.md).
- [OSFree](1398441-osfree.md): Frees a block of memory allocated by [OSMalloc](1398447-osmalloc.md).
- [bzero](1579350-bzero.md)
