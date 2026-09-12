> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopacketqueue/iopacketqueuedefaultcapacity](https://developer.apple.com/documentation/kernel/iopacketqueue/iopacketqueuedefaultcapacity)

# IOPacketQueueDefaultCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Describes the default capacity of the queue object.

## Declaration

```objectivec
static const UInt32 IOPacketQueueDefaultCapacity = 100;
```

<a id="overview"></a>

## Overview

The capacity is only observed by the enqueue() method. Therefore, it is possible for the size of the queue to exceed its capacity when other methods, such as prepend(), are used to add packets to the queue.
