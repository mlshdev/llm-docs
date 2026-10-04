> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxcompletionqueue/withpool

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkRxCompletionQueue * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, EnqueueAction action, void *refCon, IOOptionBits options);
```
