> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1398439-osmalloc_tagfree](https://developer.apple.com/documentation/kernel/1398439-osmalloc_tagfree)

# OSMalloc_Tagfree

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Frees a tag used with OSMalloc functions.

## Declaration

```objectivec
void OSMalloc_Tagfree(OSMallocTag tag);
```

## Parameters

- `tag`: The [OSMallocTag](osmalloctag.md) to free.

<a id="discussion"></a>

## Discussion

OSMalloc tags must not be freed while any memory blocks allocated with them still exist. Any OSMalloc function called on those blocks will result in a panic.

## See Also

### Memory

- [OSMalloc](1398447-osmalloc.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md).
- [OSMalloc_Tagalloc](1398437-osmalloc_tagalloc.md): Creates a tag for use with OSMalloc functions.
- [OSMalloc_noblock](1398431-osmalloc_noblock.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md), returning `NULL` if it would block.
- [OSMalloc_nowait](1398445-osmalloc_nowait.md): Equivalent to [OSMalloc_noblock](1398431-osmalloc_noblock.md).
- [OSFree](1398441-osfree.md): Frees a block of memory allocated by [OSMalloc](1398447-osmalloc.md).
- [bzero](1579350-bzero.md)
- [bzero_phys](1593364-bzero_phys.md)
