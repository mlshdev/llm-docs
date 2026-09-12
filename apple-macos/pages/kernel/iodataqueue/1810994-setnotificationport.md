> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueue/1810994-setnotificationport](https://developer.apple.com/documentation/kernel/iodataqueue/1810994-setnotificationport)

# setNotificationPort

**Interface language:** Objective-C

**Framework:** Kernel

Creates a simple mach message targeting the mach port specified in port.

## Declaration

```objectivec
virtual void setNotificationPort(
 mach_port_tport); 
```

## Parameters

- `port`: The mach port to target with the notification message.

<a id="overview"></a>

## Overview

This message is sent when data is added to an empty queue. It is to notify a user process that new data has become available.

## See Also

### Miscellaneous

- [enqueue](1810927-enqueue.md): Enqueues a new entry on the queue.
- [getMemoryDescriptor](1810939-getmemorydescriptor.md): Returns a memory descriptor covering the IODataQueueMemory region.
- [initWithCapacity](1810950-initwithcapacity.md): Initializes an IODataQueue instance with the capacity specified in the size parameter.
- [initWithEntries](1810963-initwithentries.md): Initializes an IODataQueue instance with the specified number of entries of the given size.
- [sendDataAvailableNotification](1810980-senddataavailablenotification.md): Sends a dataAvailableNotification message to the specified mach port.
- [withCapacity](1811001-withcapacity.md): Static method that creates a new IODataQueue instance with the capacity specified in the size parameter.
- [withEntries](1811020-withentries.md): Static method that creates a new IODataQueue instance with the specified number of entries of the given size.
