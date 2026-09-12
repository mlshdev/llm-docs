> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueue/1810939-getmemorydescriptor](https://developer.apple.com/documentation/kernel/iodataqueue/1810939-getmemorydescriptor)

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

- [enqueue](1810927-enqueue.md): Enqueues a new entry on the queue.
- [initWithCapacity](1810950-initwithcapacity.md): Initializes an IODataQueue instance with the capacity specified in the size parameter.
- [initWithEntries](1810963-initwithentries.md): Initializes an IODataQueue instance with the specified number of entries of the given size.
- [sendDataAvailableNotification](1810980-senddataavailablenotification.md): Sends a dataAvailableNotification message to the specified mach port.
- [setNotificationPort](1810994-setnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [withCapacity](1811001-withcapacity.md): Static method that creates a new IODataQueue instance with the capacity specified in the size parameter.
- [withEntries](1811020-withentries.md): Static method that creates a new IODataQueue instance with the specified number of entries of the given size.
