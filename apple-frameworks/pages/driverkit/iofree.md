> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iofree](https://developer.apple.com/documentation/driverkit/iofree)

# IOFree

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Frees a memory block that contains general-purpose memory.

## Declaration

```objectivec
void IOFree(void *address, size_t length);
```

## Parameters

- `address`: The pointer to the memory block to free. The memory block must be one that you previously allocated with [IOMalloc](iomalloc.md) or [IOMallocZero](iomalloczero.md).
- `length`: The size of the memory block, which must match the block’s original allocation size.

<a id="Discussion"></a>

## Discussion

Use this macro to free memory that you allocated with [IOMalloc](iomalloc.md) or [IOMallocZero](iomalloczero.md).

## See Also

### Deallocation

- [IODelete](iodelete.md): Frees the memory associated with a valid, typed array.
- [IOSafeDeleteNULL](iosafedeletenull.md): Frees the memory associated with a typed array.
- [OSSafeReleaseNULL](ossafereleasenull.md): Frees memory that you allocated for a named class.
