> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxsubmissionqueuecompat/withpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueuecompat/withpool)

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxSubmissionQueueCompat * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, QueryFreeSpaceActionCompat freeSpaceAction, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
