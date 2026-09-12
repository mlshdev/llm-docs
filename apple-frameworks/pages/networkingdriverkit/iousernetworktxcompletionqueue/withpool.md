> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxcompletionqueue/withpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxcompletionqueue/withpool)

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxCompletionQueue * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, EnqueueAction enqueueAction, void *refCon, IOOptionBits options);
```
