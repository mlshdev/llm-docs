> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811894-getagprangeallocator](https://developer.apple.com/documentation/kernel/ioagpdevice/1811894-getagprangeallocator)

# getAGPRangeAllocator

**Interface language:** Objective-C

**Framework:** Kernel

Accessor to obtain the AGP range allocator.

## Declaration

```objectivec
virtual IORangeAllocator * getAGPRangeAllocator(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to the range allocator for the AGP space.

<a id="overview"></a>

## Overview

To allocate ranges in AGP space, obtain a range allocator for the space with this method. It is retained while the space is created (until destroyAGPSpace is called) and should not be released by the caller.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [createAGPSpace](1811842-createagpspace.md): Allocates the AGP space, and enables AGP transactions on the primary and secondary.
- [destroyAGPSpace](1811870-destroyagpspace.md): Destroys the AGP space, and disables AGP transactions on the primary and secondary.
- [getAGPSpace](1811914-getagpspace.md): Returns the allocated AGP space.
- [getAGPStatus](1811928-getagpstatus.md): Returns the current state of the AGP bus.
- [releaseAGPMemory](1811943-releaseagpmemory.md): Releases memory addressable by AGP transactions.
