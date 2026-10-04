> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueuecompat/withpoolandserviceclass

# withPoolAndServiceClass

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxSubmissionQueueCompat * withPoolAndServiceClass(IOUserNetworkPacketBufferPool *pool, IOUserNetworkServiceClass serviceClass, uint32_t capacity, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, QueryFreeSpaceActionCompat freeSpaceAction, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
