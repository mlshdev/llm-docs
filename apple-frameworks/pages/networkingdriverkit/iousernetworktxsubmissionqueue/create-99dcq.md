> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxsubmissionqueue/create-99dcq](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueue/create-99dcq)

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static kern_return_t Create(IOUserNetworkPacketBufferPool *pool, OSObject *owner, IOUserNetworkServiceClass serviceClass, uint32_t capacity, uint32_t queueId, IODispatchQueue *dispatchQueue, IOUserNetworkTxSubmissionQueue **queue);
```
