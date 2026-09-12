> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/withpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/withpool)

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkRxSubmissionQueue * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueId queueId, OSObject *target, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
