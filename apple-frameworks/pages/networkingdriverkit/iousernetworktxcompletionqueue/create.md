> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworktxcompletionqueue/create](https://developer.apple.com/documentation/networkingdriverkit/iousernetworktxcompletionqueue/create)

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

Creates a queue that tells the system which packets you transmitted to your device.

## Declaration

```objectivec
static kern_return_t Create(IOUserNetworkPacketBufferPool *pool, OSObject *owner, uint32_t capacity, uint32_t queueId, IODispatchQueue *dispatchQueue, IOUserNetworkTxCompletionQueue **queue);
```

## Parameters

- `pool`: The buffer pool containing the memory for the network packets. This parameter must not be `NULL`.
- `owner`: The object to use as the owner of the queue.
- `capacity`: The number of packets in the queue.
- `queueId`: An identifier for you to use to distinguish the queue from other queues. Specify `0` if you don’t use this parameter.
- `dispatchQueue`: The dispatch queue on which to execute tasks.
- `queue`: On return, the new queue object. It is a programmer error to specify `NULL` for this parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Creating the Completion Queue

- [init](init.md): Initializes the packet submission queue.
- [free](free.md): Performs any final cleanup for the queue.
