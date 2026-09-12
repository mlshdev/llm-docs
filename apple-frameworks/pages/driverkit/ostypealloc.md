> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ostypealloc](https://developer.apple.com/documentation/driverkit/ostypealloc)

# OSTypeAlloc

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Macro  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates memory for a named class.

## Declaration

```objectivec
#define OSTypeAlloc(type)
```

## Parameters

- `type`: The name of the desired class as a raw token, not as a string or macro.

<a id="return-value"></a>

## Return Value

A pointer to the allocated memory block, or `NULL` on failure.

<a id="Discussion"></a>

## Discussion

This is a general-purpose utility to allocate memory for DriverKit objects. Consider using object-specific creation methods instead. To allocate memory for use in I/O transfers, create an [IOBufferMemoryDescriptor](iobuffermemorydescriptor.md) instead.

## See Also

### Allocation

- [IONew](ionew.md): Allocates memory for an array of the specified type.
- [IONewZero](ionewzero.md): Allocates memory for an array of the specified type and zero-initializes that memory.
- [IOMalloc](iomalloc.md): Allocates the specified amount of general-purpose memory.
- [IOMallocZero](iomalloczero.md): Allocates the specified amount of general-purpose memory and zero-initializes it.
