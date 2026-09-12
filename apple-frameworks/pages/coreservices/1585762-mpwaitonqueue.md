> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585762-mpwaitonqueue](https://developer.apple.com/documentation/coreservices/1585762-mpwaitonqueue)

# MPWaitOnQueue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Obtains a message from a specified message queue.

## Declaration

```objectivec
OSStatus MPWaitOnQueue(MPQueueID queue, void **param1, void **param2, void **param3, Duration timeout);
```

## Parameters

- `queue`: The ID of the message queue from which to receive the notification.
- `param1`: On return, the first pointer-sized value of the notification message. Pass `NULL` if you do not need this portion of the message.
- `param2`: On return, the second pointer-sized value of the notification message. Pass `NULL` if you do not need this portion of the message.
- `param3`: On return, the third pointer-sized value of the notification message. Pass `NULL` if you do not need this portion of the message.
- `timeout`: The time to wait for a notification before timing out. See [Timer Duration Constants](1585641-timer_duration_constants.md) for a list of constants you can use to specify the wait interval.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

This function receives a message from the specified message queue. If no messages are currently available, the timeout specifies how long the function should wait for one. Tasks waiting on the queue are handled in a first in, first out manner; that is, the first task to wait on the queue receives the message from the  [MPNotifyQueue](1585699-mpnotifyqueue.md)  call. 

After calling this function, when a message appears, it is removed from the queue and the three fields, `param1`, `param2`, and `param3` are set to the values specified by the message text. Note these parameters are pointers to variables to be set with the message text.

If you call this function from a cooperative task, you should specify only `kDurationImmediate` for the timeout length; other waits will cause the task to block. 

Also see the function  [MPNotifyQueue](1585699-mpnotifyqueue.md).

## See Also

### Creating and Handling Message Queues

- [MPCreateQueue](1585694-mpcreatequeue.md): Deprecated. Creates a message queue.
- [MPDeleteQueue](1585571-mpdeletequeue.md): Deprecated. Deletes a message queue.
- [MPNotifyQueue](1585699-mpnotifyqueue.md): Deprecated. Sends a message to the specified message queue.
- [MPSetQueueReserve](1585671-mpsetqueuereserve.md): Deprecated. Reserves space for messages on a specified message queue.
