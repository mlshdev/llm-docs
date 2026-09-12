> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioshareddataqueue/1810240-getmemorydescriptor](https://developer.apple.com/documentation/kernel/ioshareddataqueue/1810240-getmemorydescriptor)

# getMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

Returns a memory descriptor covering the IODataQueueMemory region.

## Declaration

```objectivec
virtual IOMemoryDescriptor *getMemoryDescriptor(); 
```

<a id="return_value"></a>

## Return Value

Returns a newly allocated IOMemoryDescriptor for the IODataQueueMemory region. Returns zero on failure.

<a id="overview"></a>

## Overview

The IOMemoryDescriptor instance returned by this method is intended to be mapped into a user process. This is the memory region that the IODataQueueClient code operates on.

## See Also

### Miscellaneous

- [dequeue](1810190-dequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [initWithCapacity](1810293-initwithcapacity.md): Initializes an IOSharedDataQueue instance with the capacity specified in the size parameter.
- [peek](1810347-peek.md): Used to peek at the next entry on the queue.
- [withCapacity](1810400-withcapacity.md): Static method that creates a new IOSharedDataQueue instance with the capacity specified in the size parameter.
- [withEntries](1810447-withentries.md): Static method that creates a new IOSharedDataQueue instance with the specified number of entries of the given size.
