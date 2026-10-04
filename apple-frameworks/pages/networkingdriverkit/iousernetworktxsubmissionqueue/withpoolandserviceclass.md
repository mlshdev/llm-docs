> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueue/withpoolandserviceclass

# withPoolAndServiceClass

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxSubmissionQueue * withPoolAndServiceClass(IOUserNetworkPacketBufferPool *pool, IOUserNetworkServiceClass serviceClass, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, QueryFreeSpaceAction freeSpaceAction, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
