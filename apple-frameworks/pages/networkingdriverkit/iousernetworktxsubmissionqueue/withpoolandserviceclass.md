> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxsubmissionqueue/withpoolandserviceclass](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueue/withpoolandserviceclass)

# withPoolAndServiceClass

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkTxSubmissionQueue * withPoolAndServiceClass(IOUserNetworkPacketBufferPool *pool, IOUserNetworkServiceClass serviceClass, uint32_t capacity, IOUserNetworkPacketQueueId queueId, OSObject *target, QueryFreeSpaceAction freeSpaceAction, DequeueAction dequeueAction, void *refCon, IOOptionBits options);
```
