> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomalloc](https://developer.apple.com/documentation/driverkit/iomalloc)

# IOMalloc

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates the specified amount of general-purpose memory.

## Declaration

```objectivec
void *IOMalloc(size_t length);
```

## Parameters

- `length`: The number of bytes to allocate.

<a id="return-value"></a>

## Return Value

A pointer to the allocated memory block, or `NULL` on failure.

<a id="Discussion"></a>

## Discussion

This is a general-purpose utility to allocate memory. There are no alignment guarantees on the returned memory, and alignment may vary depending on the configuration. To allocate memory for use in I/O transfers, create an [IOBufferMemoryDescriptor](iobuffermemorydescriptor.md) instead.

## See Also

### Allocation

- [IONew](ionew.md): Allocates memory for an array of the specified type.
- [IONewZero](ionewzero.md): Allocates memory for an array of the specified type and zero-initializes that memory.
- [IOMallocZero](iomalloczero.md): Allocates the specified amount of general-purpose memory and zero-initializes it.
- [OSTypeAlloc](ostypealloc.md): Allocates memory for a named class.
