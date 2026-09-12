> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueue/1810963-initwithentries](https://developer.apple.com/documentation/kernel/iodataqueue/1810963-initwithentries)

# initWithEntries

**Interface language:** Objective-C

**Framework:** Kernel

Initializes an IODataQueue instance with the specified number of entries of the given size.

## Declaration

```objectivec
virtual Boolean initWithEntries(
 UInt32numEntries,
 UInt32entrySize); 
```

## Parameters

- `numEntries`: Number of entries to allocate space for.
- `entrySize`: Size of each entry.

<a id="return_value"></a>

## Return Value

Reeturns true on success and false on failure.

<a id="overview"></a>

## Overview

This method will initialize an IODataQueue instance with enough capacity for numEntries of entrySize. It does account for the IODataQueueEntry overhead for each entry. Note that the numEntries and entrySize are simply used to determine the data region size. They do not actually restrict the size of number of entries that can be added to the queue.

This method allocates a new IODataQueue instance and then calls initWithEntries() with the given numEntries and entrySize parameters.

## See Also

### Miscellaneous

- [enqueue](1810927-enqueue.md): Enqueues a new entry on the queue.
- [getMemoryDescriptor](1810939-getmemorydescriptor.md): Returns a memory descriptor covering the IODataQueueMemory region.
- [initWithCapacity](1810950-initwithcapacity.md): Initializes an IODataQueue instance with the capacity specified in the size parameter.
- [sendDataAvailableNotification](1810980-senddataavailablenotification.md): Sends a dataAvailableNotification message to the specified mach port.
- [setNotificationPort](1810994-setnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [withCapacity](1811001-withcapacity.md): Static method that creates a new IODataQueue instance with the capacity specified in the size parameter.
- [withEntries](1811020-withentries.md): Static method that creates a new IODataQueue instance with the specified number of entries of the given size.
