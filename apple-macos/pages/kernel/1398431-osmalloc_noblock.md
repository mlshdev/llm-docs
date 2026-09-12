> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1398431-osmalloc_noblock](https://developer.apple.com/documentation/kernel/1398431-osmalloc_noblock)

# OSMalloc_noblock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md), returning `NULL` if it would block.

## Declaration

```objectivec
void * OSMalloc_noblock(uint32_t size, OSMallocTag tag);
```

## Parameters

- `size`: The size of the memory block to allocate.
- `tag`: The [OSMallocTag](osmalloctag.md) under which to allocate the memory.

<a id="return_value"></a>

## Return Value

A pointer to the memory on success, `NULL` on failure or if allocation would block.

<a id="discussion"></a>

## Discussion

If `tag` was created with the `OSMT_PAGEABLE` attribute *and*` size` is a full page or larger, the allocated memory is pageable; otherwise it is wired.

This function is guaranteed not to block.

## See Also

### Memory

- [OSMalloc](1398447-osmalloc.md): Allocates a block of memory associated with a given [OSMallocTag](osmalloctag.md).
- [OSMalloc_Tagalloc](1398437-osmalloc_tagalloc.md): Creates a tag for use with OSMalloc functions.
- [OSMalloc_Tagfree](1398439-osmalloc_tagfree.md): Frees a tag used with OSMalloc functions.
- [OSMalloc_nowait](1398445-osmalloc_nowait.md): Equivalent to [OSMalloc_noblock](1398431-osmalloc_noblock.md).
- [OSFree](1398441-osfree.md): Frees a block of memory allocated by [OSMalloc](1398447-osmalloc.md).
- [bzero](1579350-bzero.md)
- [bzero_phys](1593364-bzero_phys.md)
