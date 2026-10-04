> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxcompletionqueuecompat/withpool

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkRxCompletionQueueCompat * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, EnqueueActionCompat action, void *refCon, IOOptionBits options);
```
