> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ossafereleasenull](https://developer.apple.com/documentation/driverkit/ossafereleasenull)

# OSSafeReleaseNULL

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Macro  
**Availability:** DriverKit · iOS · iPadOS · macOS

Frees memory that you allocated for a named class.

## Declaration

```objectivec
#define OSSafeReleaseNULL(inst)
```

## Parameters

- `inst`: The object that you want to free. After freeing the memory, the macro sets the value of `inst` to `NULL`.

<a id="Discussion"></a>

## Discussion

Use this macro to free memory that you allocated [OSTypeAlloc](ostypealloc.md). If `inst` is `NULL`, this macro doesn’t attempt to free the memory.

## See Also

### Deallocation

- [IODelete](iodelete.md): Frees the memory associated with a valid, typed array.
- [IOSafeDeleteNULL](iosafedeletenull.md): Frees the memory associated with a typed array.
- [IOFree](iofree.md): Frees a memory block that contains general-purpose memory.
