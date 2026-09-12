> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811914-getagpspace](https://developer.apple.com/documentation/kernel/ioagpdevice/1811914-getagpspace)

# getAGPSpace

**Interface language:** Objective-C

**Framework:** Kernel

Returns the allocated AGP space.

## Declaration

```objectivec
virtual IOReturn getAGPSpace(
 IOPhysicalAddress *address, 
 IOPhysicalLength *length ); 
```

## Parameters

- `address`: The physical range allocated for the AGP space is passed back to the caller. Zero may be passed if the address is not needed by the caller.
- `length`: The size of the the AGP space created is passed back. Zero may be passed if the length is not needed by the caller.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code indicating success or failure.

<a id="overview"></a>

## Overview

This method can be called by the driver for the AGP primary device to retrieve the physical address and size of the space created with createAGPSpace.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [createAGPSpace](1811842-createagpspace.md): Allocates the AGP space, and enables AGP transactions on the primary and secondary.
- [destroyAGPSpace](1811870-destroyagpspace.md): Destroys the AGP space, and disables AGP transactions on the primary and secondary.
- [getAGPRangeAllocator](1811894-getagprangeallocator.md): Accessor to obtain the AGP range allocator.
- [getAGPStatus](1811928-getagpstatus.md): Returns the current state of the AGP bus.
- [releaseAGPMemory](1811943-releaseagpmemory.md): Releases memory addressable by AGP transactions.
