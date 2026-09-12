> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811928-getagpstatus](https://developer.apple.com/documentation/kernel/ioagpdevice/1811928-getagpstatus)

# getAGPStatus

**Interface language:** Objective-C

**Framework:** Kernel

Returns the current state of the AGP bus.

## Declaration

```objectivec
virtual IOOptionBits getAGPStatus(
 IOOptionBits which = which ); 
```

## Parameters

- `which`: Type of status - only kIOAGPDefaultStatus is currently valid.

<a id="return_value"></a>

## Return Value

Returns mask of status bits for the AGP bus.

<a id="overview"></a>

## Overview

Returns state bits for the AGP bus. Only one type of status is currently defined.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [createAGPSpace](1811842-createagpspace.md): Allocates the AGP space, and enables AGP transactions on the primary and secondary.
- [destroyAGPSpace](1811870-destroyagpspace.md): Destroys the AGP space, and disables AGP transactions on the primary and secondary.
- [getAGPRangeAllocator](1811894-getagprangeallocator.md): Accessor to obtain the AGP range allocator.
- [getAGPSpace](1811914-getagpspace.md): Returns the allocated AGP space.
- [releaseAGPMemory](1811943-releaseagpmemory.md): Releases memory addressable by AGP transactions.
