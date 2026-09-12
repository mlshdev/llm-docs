> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585571-mpdeletequeue](https://developer.apple.com/documentation/coreservices/1585571-mpdeletequeue)

# MPDeleteQueue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Deletes a message queue.

## Declaration

```objectivec
OSStatus MPDeleteQueue(MPQueueID queue);
```

## Parameters

- `queue`: The ID of the message queue you want to delete.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

After calling `MPDeleteQueue`, the specified queue ID becomes invalid, and all internal resources associated with the queue (including queued messages) are reclaimed. Any tasks waiting on the queue are unblocked and their respective  [MPWaitOnQueue](1585762-mpwaitonqueue.md)  calls will return with the result code `kMPDeletedErr`.

Also see the function  [MPCreateQueue](1585694-mpcreatequeue.md).

## See Also

### Creating and Handling Message Queues

- [MPCreateQueue](1585694-mpcreatequeue.md): Deprecated. Creates a message queue.
- [MPNotifyQueue](1585699-mpnotifyqueue.md): Deprecated. Sends a message to the specified message queue.
- [MPSetQueueReserve](1585671-mpsetqueuereserve.md): Deprecated. Reserves space for messages on a specified message queue.
- [MPWaitOnQueue](1585762-mpwaitonqueue.md): Deprecated. Obtains a message from a specified message queue.
