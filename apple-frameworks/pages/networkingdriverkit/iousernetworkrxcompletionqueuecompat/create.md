> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxcompletionqueuecompat/create

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static kern_return_t Create(IOUserNetworkPacketBufferPool *pool, OSObject *owner, uint32_t capacity, uint32_t queueId, IODispatchQueue *dispatchQueue, IOUserNetworkRxCompletionQueueCompat **queue);
```
