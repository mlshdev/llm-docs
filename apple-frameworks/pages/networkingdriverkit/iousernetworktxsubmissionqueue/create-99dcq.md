> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxsubmissionqueue/create-99dcq

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static kern_return_t Create(IOUserNetworkPacketBufferPool *pool, OSObject *owner, IOUserNetworkServiceClass serviceClass, uint32_t capacity, uint32_t queueId, IODispatchQueue *dispatchQueue, IOUserNetworkTxSubmissionQueue **queue);
```
