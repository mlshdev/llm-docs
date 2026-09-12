> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxsubmissionqueuecompat/withpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueuecompat/withpool)

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkRxSubmissionQueueCompat * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
