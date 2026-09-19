> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/withpool

# withPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkRxSubmissionQueue * withPool(IOUserNetworkPacketBufferPool *pool, uint32_t capacity, uint32_t bufferCount, IOUserNetworkPacketQueueId queueId, OSObject *target, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
