> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585694-mpcreatequeue](https://developer.apple.com/documentation/coreservices/1585694-mpcreatequeue)

# MPCreateQueue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a message queue.

## Declaration

```objectivec
OSStatus MPCreateQueue(MPQueueID *queue);
```

## Parameters

- `queue`: On return, the variable contains the ID of the newly created message queue.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If a queue could not be created, `MPCreateQueue` returns `kMPInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

This call creates a message queue, which can be used to notify (that is, send) and wait for (that is, receive) messages consisting of three pointer-sized values in a preemptively safe manner.

Message queues are created from dynamically allocated internal resources. Other tasks may be competing for these resources so it is possible this function may not be able to create a queue. 

See also the functions  [MPDeleteQueue](1585571-mpdeletequeue.md)  and  [MPSetQueueReserve](1585671-mpsetqueuereserve.md).

## See Also

### Creating and Handling Message Queues

- [MPDeleteQueue](1585571-mpdeletequeue.md): Deprecated. Deletes a message queue.
- [MPNotifyQueue](1585699-mpnotifyqueue.md): Deprecated. Sends a message to the specified message queue.
- [MPSetQueueReserve](1585671-mpsetqueuereserve.md): Deprecated. Reserves space for messages on a specified message queue.
- [MPWaitOnQueue](1585762-mpwaitonqueue.md): Deprecated. Obtains a message from a specified message queue.
