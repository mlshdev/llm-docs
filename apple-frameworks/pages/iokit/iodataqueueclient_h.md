> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodataqueueclient_h](https://developer.apple.com/documentation/iokit/iodataqueueclient_h)

# IODataQueueClient.h (Swift)

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

<a id="1675599"></a>

### Included Headers

- \<sys/cdefs.h\>
- \<AvailabilityMacros.h\>
- \<libkern/OSTypes.h\>
- \<mach/port.h\>
- \<IOKit/IOReturn.h\>
- \<IOKit/IODataQueueShared.h\>

## Topics

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueueClient.h (Objective-C)

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

<a id="1675599"></a>

### Included Headers

- \<sys/cdefs.h\>
- \<AvailabilityMacros.h\>
- \<libkern/OSTypes.h\>
- \<mach/port.h\>
- \<IOKit/IOReturn.h\>
- \<IOKit/IODataQueueShared.h\>

## Topics

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
