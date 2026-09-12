> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodelete](https://developer.apple.com/documentation/driverkit/iodelete)

# IODelete

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Macro  
**Availability:** DriverKit · iOS · iPadOS · macOS

Frees the memory associated with a valid, typed array.

## Declaration

```objectivec
#define IODelete(ptr, type, count)
```

## Parameters

- `ptr`: The pointer to the memory block to free. This pointer must not be `NULL`.
- `type`: The data type stored in the memory block. The macro uses the type to determine its size.
- `count`: The number of array entries in the memory block

<a id="Discussion"></a>

## Discussion

Use this macro to free memory that you allocated with [IONew](ionew.md) or [IONewZero](ionewzero.md). It is a programmer error to pass a `NULL` pointer to this macro.

## See Also

### Deallocation

- [IOSafeDeleteNULL](iosafedeletenull.md): Frees the memory associated with a typed array.
- [OSSafeReleaseNULL](ossafereleasenull.md): Frees memory that you allocated for a named class.
- [IOFree](iofree.md): Frees a memory block that contains general-purpose memory.
