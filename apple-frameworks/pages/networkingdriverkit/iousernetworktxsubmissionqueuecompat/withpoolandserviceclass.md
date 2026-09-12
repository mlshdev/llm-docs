> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxsubmissionqueuecompat/withpoolandserviceclass](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueuecompat/withpoolandserviceclass)

# withPoolAndServiceClass

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxSubmissionQueueCompat * withPoolAndServiceClass(IOUserNetworkPacketBufferPool *pool, IOUserNetworkServiceClass serviceClass, uint32_t capacity, IOUserNetworkPacketQueueCompatId queueId, OSObject *target, QueryFreeSpaceActionCompat freeSpaceAction, DequeueActionCompat dequeueAction, void *refCon, IOOptionBits options);
```
