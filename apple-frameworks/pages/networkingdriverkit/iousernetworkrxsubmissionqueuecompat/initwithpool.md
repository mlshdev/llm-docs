> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxsubmissionqueuecompat/initwithpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueuecompat/initwithpool)

# initWithPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual bool initWithPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
