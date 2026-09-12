> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxcompletionqueue/initwithpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxcompletionqueue/initwithpool)

# initWithPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual bool initWithPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, EnqueueAction enqueueAction, void *refCon, IOOptionBits options);
```
