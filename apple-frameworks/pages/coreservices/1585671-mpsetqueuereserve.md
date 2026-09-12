> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585671-mpsetqueuereserve](https://developer.apple.com/documentation/coreservices/1585671-mpsetqueuereserve)

# MPSetQueueReserve

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Reserves space for messages on a specified message queue.

## Declaration

```objectivec
OSStatus MPSetQueueReserve(MPQueueID queue, ItemCount count);
```

## Parameters

- `queue`: The ID of the queue whose messages you want to reserve.
- `count`: The number of messages to reserve.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

[MPNotifyQueue](1585699-mpnotifyqueue.md)  allocates spaces for messages dynamically; that is, memory to hold the message is allocated for the queue at the time of the call. In most cases this method is both speed and storage efficient. However, it is possible that, due to lack of memory resources, space for the message may not be available at the time of the call; in such cases,  [MPNotifyQueue](1585699-mpnotifyqueue.md)  will return `kInsufficientResourcesErr`. 

If you must have guaranteed message delivery, or if you need to call  [MPNotifyQueue](1585699-mpnotifyqueue.md)  from an interrupt handler, you should reserve space on the specified queue by calling `MPSetQueueReserve`. Because such allocated space is reserved for duration of the queue’s existence, you should avoid straining internal system resources by reserving messages only when absolutely necessary. Note that if you have reserved messages on a queue, additional space cannot be added dynamically if the number of messages exceeds the number reserved for that queue. 

The number of reserved messages is set to `count`, lowering or increasing the current number of reserved messages as required. If `count` is set to zero, no messages are reserved for the queue, and space for messages is allocated dynamically.

## See Also

### Creating and Handling Message Queues

- [MPCreateQueue](1585694-mpcreatequeue.md): Deprecated. Creates a message queue.
- [MPDeleteQueue](1585571-mpdeletequeue.md): Deprecated. Deletes a message queue.
- [MPNotifyQueue](1585699-mpnotifyqueue.md): Deprecated. Sends a message to the specified message queue.
- [MPWaitOnQueue](1585762-mpwaitonqueue.md): Deprecated. Obtains a message from a specified message queue.
