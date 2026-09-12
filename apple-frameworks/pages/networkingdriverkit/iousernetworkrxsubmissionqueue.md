> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxsubmissionqueue](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueue)

# IOUserNetworkRxSubmissionQueue

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Class  
**Availability:** DriverKit

The queue that receives packets from the device.

## Declaration

```objectivec
class IOUserNetworkRxSubmissionQueue;
```

<a id="overview"></a>

## Overview

Create an [IOUserNetworkRxSubmissionQueue](iousernetworkrxsubmissionqueue.md) in your driver and use it to dequeue empty packets. As data arrives from your hardware, fill those empty packets with the data. Once the packets are filled, enqueue them on your [IOUserNetworkRxCompletionQueue](iousernetworkrxcompletionqueue.md) object.

## Topics

### Creating the Submission Queue

- [Create](iousernetworkrxsubmissionqueue/create.md): Creates a queue that delivers empty packets for you to fill with data from your hardware device.
- [init](iousernetworkrxsubmissionqueue/init.md): Initializes the packet submission queue.
- [free](iousernetworkrxsubmissionqueue/free.md): Performs any final cleanup for the queue.

### Instance Methods

- [initWithPool](iousernetworkrxsubmissionqueue/initwithpool.md)

### Type Methods

- [withPool](iousernetworkrxsubmissionqueue/withpool.md)

## Relationships

### Inherits From

- [IOUserNetworkPacketQueue](iousernetworkpacketqueue.md)

## See Also

### Packet Queues

- [IOUserNetworkRxCompletionQueue](iousernetworkrxcompletionqueue.md): The queue you use to store packets that you successfully transferred to the networking stack.
- [IOUserNetworkTxSubmissionQueue](iousernetworktxsubmissionqueue.md): The queue that receives packets from the networking stack.
- [IOUserNetworkTxCompletionQueue](iousernetworktxcompletionqueue.md): The queue you use to store packets that you successfully transferred to the device.
- [IOUserNetworkPacketQueue](iousernetworkpacketqueue.md): The base class for the queues that manage the packets moving to and from your device.
