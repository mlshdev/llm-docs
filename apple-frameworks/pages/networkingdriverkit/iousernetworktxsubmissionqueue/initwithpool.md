> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxsubmissionqueue/initwithpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueue/initwithpool)

# initWithPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual bool initWithPool(IOUserNetworkPacketBufferPool *pool, IOUserNetworkServiceClass serviceClass, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, QueryFreeSpaceAction freeSpaceAction, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
