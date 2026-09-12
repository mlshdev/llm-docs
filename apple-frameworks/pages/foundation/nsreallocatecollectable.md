> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsreallocatecollectable](https://developer.apple.com/documentation/foundation/nsreallocatecollectable)

# NSReallocateCollectable

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Reallocates collectable memory.

> Garbage collection is deprecated in OS X v10.8; instead,you should use AutomaticReference Counting—see [Transitioning to ARC Release Notes](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011226).

## Declaration

```objectivec
extern void *NSReallocateCollectable(void *ptr, NSUInteger size, NSUInteger options);
```

<a id="Discussion"></a>

## Discussion

Changes the size of the block of memory pointed to by `ptr` to `size` bytes. It may allocate new memory to replace the old, in which case it moves the contents of the old memory block to the new block, up to a maximum of `size` bytes.

`options` can be `0` or `NSScannedOption`: A value of `0` allocates non-scanned memory; a value of `NSScannedOption` allocates scanned memory.

This function returns `NULL` if it’s unable to allocate the requested memory.

## See Also

### Legacy

- [NSGarbageCollector](nsgarbagecollector.md): Deprecated. A convenient interface to the garbage collection system.
- [NSAllocateCollectable](nsallocatecollectable.md): Deprecated. Allocates collectable memory.
- [NSMakeCollectable](nsmakecollectable.md): Deprecated. Makes a newly allocated Core Foundation object eligible for collection.
- [Memory Allocation Options](1539826-memory-allocation-options.md): Constants used to control behavior when allocating or reallocating collectible memory.
