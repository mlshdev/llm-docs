> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811870-destroyagpspace](https://developer.apple.com/documentation/kernel/ioagpdevice/1811870-destroyagpspace)

# destroyAGPSpace

**Interface language:** Objective-C

**Framework:** Kernel

Destroys the AGP space, and disables AGP transactions on the primary and secondary.

## Declaration

```objectivec
virtual IOReturn destroyAGPSpace(
 void ); 
```

<a id="overview"></a>

## Overview

This method should be called by the driver to shutdown AGP transactions and release resources.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [createAGPSpace](1811842-createagpspace.md): Allocates the AGP space, and enables AGP transactions on the primary and secondary.
- [getAGPRangeAllocator](1811894-getagprangeallocator.md): Accessor to obtain the AGP range allocator.
- [getAGPSpace](1811914-getagpspace.md): Returns the allocated AGP space.
- [getAGPStatus](1811928-getagpstatus.md): Returns the current state of the AGP bus.
- [releaseAGPMemory](1811943-releaseagpmemory.md): Releases memory addressable by AGP transactions.
