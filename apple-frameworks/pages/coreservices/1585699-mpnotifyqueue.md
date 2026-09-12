> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585699-mpnotifyqueue](https://developer.apple.com/documentation/coreservices/1585699-mpnotifyqueue)

# MPNotifyQueue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sends a message to the specified message queue.

## Declaration

```objectivec
OSStatus MPNotifyQueue(MPQueueID queue, void *param1, void *param2, void *param3);
```

## Parameters

- `queue`: The queue ID of the message queue you want to notify.
- `param1`: The first pointer-sized value of the message to send.
- `param2`: The second pointer-sized value of the message to send.
- `param3`: The third pointer-sized value of the message to send.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

This function sends a message to the specified queue, which consist of the three parameters, `param1`, `param2`, and `param3`. The system does not interpret the three values which comprise the text of the message. If tasks are waiting on the specified queue, the first waiting task is unblocked and the task’s  [MPWaitOnQueue](1585762-mpwaitonqueue.md)  function completes.

Depending on the queue mode, the system either allocates messages dynamically or assigns them to memory reserved for the queue. In either case, if no more memory is available for messages `MPNotifyQueue` returns `kMPInsufficientResourcesErr`.

You can call this function from an interrupt handler if messages are reserved on the queue. For more information about queueing modes and reserving messages, see  [MPSetQueueReserve](1585671-mpsetqueuereserve.md).

Also see the function  [MPWaitOnQueue](1585762-mpwaitonqueue.md).

## See Also

### Creating and Handling Message Queues

- [MPCreateQueue](1585694-mpcreatequeue.md): Deprecated. Creates a message queue.
- [MPDeleteQueue](1585571-mpdeletequeue.md): Deprecated. Deletes a message queue.
- [MPSetQueueReserve](1585671-mpsetqueuereserve.md): Deprecated. Reserves space for messages on a specified message queue.
- [MPWaitOnQueue](1585762-mpwaitonqueue.md): Deprecated. Obtains a message from a specified message queue.
