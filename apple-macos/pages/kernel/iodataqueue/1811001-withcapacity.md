> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueue/1811001-withcapacity](https://developer.apple.com/documentation/kernel/iodataqueue/1811001-withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Static method that creates a new IODataQueue instance with the capacity specified in the size parameter.

## Declaration

```objectivec
static IODataQueue *withCapacity(
 UInt32size); 
```

## Parameters

- `size`: The size of the data queue memory region.

<a id="return_value"></a>

## Return Value

Returns the newly allocated IODataQueue instance. Zero is returned on failure.

<a id="overview"></a>

## Overview

The actual size of the entire data queue memory region (to be shared into a user process) is equal to the capacity plus the IODataQueueMemory overhead. This overhead value can be determined from the DATA_QUEUE_MEMORY_HEADER_SIZE macro in \<IOKit/IODataQueueShared.h\>. The size of the data queue memory region must include space for the overhead of each IODataQueueEntry. This entry overhead can be determined from the DATA_QUEUE_ENTRY_HEADER_SIZE macro in \<IOKit/IODataQueueShared.h\>.

This method allocates a new IODataQueue instance and then calls initWithCapacity() with the given size parameter. If the initWithCapacity() fails, the new instance is released and zero is returned.

## See Also

### Miscellaneous

- [enqueue](1810927-enqueue.md): Enqueues a new entry on the queue.
- [getMemoryDescriptor](1810939-getmemorydescriptor.md): Returns a memory descriptor covering the IODataQueueMemory region.
- [initWithCapacity](1810950-initwithcapacity.md): Initializes an IODataQueue instance with the capacity specified in the size parameter.
- [initWithEntries](1810963-initwithentries.md): Initializes an IODataQueue instance with the specified number of entries of the given size.
- [sendDataAvailableNotification](1810980-senddataavailablenotification.md): Sends a dataAvailableNotification message to the specified mach port.
- [setNotificationPort](1810994-setnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [withEntries](1811020-withentries.md): Static method that creates a new IODataQueue instance with the specified number of entries of the given size.
