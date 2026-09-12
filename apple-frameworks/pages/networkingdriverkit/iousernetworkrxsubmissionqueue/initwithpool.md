> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/initwithpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/initwithpool)

# initWithPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual bool initWithPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueId queueId, OSObject *target, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
