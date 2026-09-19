> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxcompletionqueuecompat/create

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static kern_return_t Create(IOUserNetworkPacketBufferPool *pool, OSObject *owner, uint32_t capacity, uint32_t queueId, IODispatchQueue *dispatchQueue, IOUserNetworkTxCompletionQueueCompat **queue);
```
