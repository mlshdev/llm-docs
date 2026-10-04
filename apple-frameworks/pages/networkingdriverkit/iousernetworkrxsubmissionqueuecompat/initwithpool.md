> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueuecompat/initwithpool

# initWithPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual bool initWithPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
