> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811842-createagpspace](https://developer.apple.com/documentation/kernel/ioagpdevice/1811842-createagpspace)

# createAGPSpace

**Interface language:** Objective-C

**Framework:** Kernel

Allocates the AGP space, and enables AGP transactions on the primary and secondary.

## Declaration

```objectivec
virtual IOReturn createAGPSpace(
 IOOptionBitsoptions, 
 IOPhysicalAddress *address, 
 IOPhysicalLength *length ); 
```

## Parameters

- `options`: No options are currently defined, pass zero.
- `address`: The physical range allocated for the AGP space is passed back to the caller.
- `length`: An in/out parameter - the caller sets the devices maximum AGP addressing and the actual size created is passed back.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code indicating success or failure.

<a id="overview"></a>

## Overview

This method should be called by the driver for the AGP primary device to set the size of the space and enable AGP transactions. It will destroy any AGP space currently allocated.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [destroyAGPSpace](1811870-destroyagpspace.md): Destroys the AGP space, and disables AGP transactions on the primary and secondary.
- [getAGPRangeAllocator](1811894-getagprangeallocator.md): Accessor to obtain the AGP range allocator.
- [getAGPSpace](1811914-getagpspace.md): Returns the allocated AGP space.
- [getAGPStatus](1811928-getagpstatus.md): Returns the current state of the AGP bus.
- [releaseAGPMemory](1811943-releaseagpmemory.md): Releases memory addressable by AGP transactions.
