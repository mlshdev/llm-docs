> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1398445-osmalloc_nowait](https://developer.apple.com/documentation/kernel/1398445-osmalloc_nowait)

# OSMalloc_nowait

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Equivalent to [OSMalloc_noblock](1398431-osmalloc_noblock.md).

## Declaration

```objectivec
void * OSMalloc_nowait(uint32_t size, OSMallocTag tag);
```

## See Also

### Memory

- [OSMalloc](1398447-osmalloc.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md).
- [OSMalloc_Tagalloc](1398437-osmalloc_tagalloc.md): Creates a tag for use with OSMalloc functions.
- [OSMalloc_Tagfree](1398439-osmalloc_tagfree.md): Frees a tag used with OSMalloc functions.
- [OSMalloc_noblock](1398431-osmalloc_noblock.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md), returning `NULL` if it would block.
- [OSFree](1398441-osfree.md): Frees a block of memory allocated by [OSMalloc](1398447-osmalloc.md).
- [bzero](1579350-bzero.md)
- [bzero_phys](1593364-bzero_phys.md)
