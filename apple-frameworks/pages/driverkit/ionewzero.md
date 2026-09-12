> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ionewzero](https://developer.apple.com/documentation/driverkit/ionewzero)

# IONewZero

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Macro  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates memory for an array of the specified type and zero-initializes that memory.

## Declaration

```objectivec
#define IONewZero(type, count)
```

## Parameters

- `type`: The data type to store in the block of memory. The macro uses the size of this type to determine how much memory to allocate for each array entry.
- `count`: The number of array entries to allocate.

<a id="return-value"></a>

## Return Value

A pointer to the allocated memory block, or `NULL` on failure.

<a id="Discussion"></a>

## Discussion

This is a general-purpose utility to allocate memory. There are no alignment guarantees on the returned memory, and alignment may vary depending on the configuration. To allocate memory for use in I/O transfers, create an [IOBufferMemoryDescriptor](iobuffermemorydescriptor.md) instead.

## See Also

### Allocation

- [IONew](ionew.md): Allocates memory for an array of the specified type.
- [IOMalloc](iomalloc.md): Allocates the specified amount of general-purpose memory.
- [IOMallocZero](iomalloczero.md): Allocates the specified amount of general-purpose memory and zero-initializes it.
- [OSTypeAlloc](ostypealloc.md): Allocates memory for a named class.
