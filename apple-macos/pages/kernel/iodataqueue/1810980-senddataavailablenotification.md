> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueue/1810980-senddataavailablenotification](https://developer.apple.com/documentation/kernel/iodataqueue/1810980-senddataavailablenotification)

# sendDataAvailableNotification

**Interface language:** Objective-C

**Framework:** Kernel

Sends a dataAvailableNotification message to the specified mach port.

## Declaration

```objectivec
virtual void sendDataAvailableNotification(); 
```

<a id="overview"></a>

## Overview

This method sends a message to the mach port passed to setNotificationPort(). It is used to indicate that data is available in the queue.

## See Also

### Miscellaneous

- [enqueue](1810927-enqueue.md): Enqueues a new entry on the queue.
- [getMemoryDescriptor](1810939-getmemorydescriptor.md): Returns a memory descriptor covering the IODataQueueMemory region.
- [initWithCapacity](1810950-initwithcapacity.md): Initializes an IODataQueue instance with the capacity specified in the size parameter.
- [initWithEntries](1810963-initwithentries.md): Initializes an IODataQueue instance with the specified number of entries of the given size.
- [setNotificationPort](1810994-setnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [withCapacity](1811001-withcapacity.md): Static method that creates a new IODataQueue instance with the capacity specified in the size parameter.
- [withEntries](1811020-withentries.md): Static method that creates a new IODataQueue instance with the specified number of entries of the given size.
