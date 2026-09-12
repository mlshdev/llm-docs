> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585726-mpsettimernotify](https://developer.apple.com/documentation/coreservices/1585726-mpsettimernotify)

# MPSetTimerNotify

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the notification information associated with a timer.

## Declaration

```objectivec
OSStatus MPSetTimerNotify(MPTimerID timerID, MPOpaqueID anID, void *notifyParam1, void *notifyParam2, void *notifyParam3);
```

## Parameters

- `timerID`: The ID of the timer whose notification information you want to set.
- `notificationID`: The ID of the notification mechanism to associate with the timer. This value should be the ID of an event group, a message queue, or a semaphore.
- `notifyParam1`: If `anID` specifies an event group, this parameter should contain the flags to set in the event group when the timer expires. If `anID` specifies a message queue, this parameter should contain the first pointer-sized value of the message to be sent to the message queue when the timer expires.
- `notifyParam2`: If `anID` specifies a message queue, this parameter should contain the second pointer-sized value of the message to be sent to the message queue when the timer expires. Pass `NULL` if you don’t need this parameter.
- `notifyParam3`: If `anID` specifies a message queue, this parameter should contain the third pointer-sized value of the message sent to the message queue when the timer expires. Pass `NULL` if you don’t need this parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

When the timer expires, Multiprocessing Services checks the notification ID, and if it is valid, notifies the related notification mechanisms (that is, event groups, queues, or semaphores) you had specified in your  [MPSetTimerNotify](1585726-mpsettimernotify.md)  calls. 

You can specify multiple notification mechanisms by calling this function several times. For example, you can call `MPSetTimerNotify` to specify a message queue and then call it again to specify a semaphore. When the timer expires, a message is sent to the message queue and the appropriate semaphore is signaled. You cannot, however, specify more than one notification per notification mechanism (for example, if you call `MPSetTimerNotify` twice, specifying different messages or message queues in each call, the second call will overwrite the first). Note that if a call to `MPSetTimerNotify` returns an error, any previous calls specifying the same timer are still valid; previously set notifications will still be notified when the timer expires. 

You can set the notification information at any time. If the timer is armed, it will modify the notification parameters dynamically. If the timer is disarmed, it will modify the notification parameters to be used for the next  [MPArmTimer](1585612-mparmtimer.md)  call.

## See Also

### Timer Services Functions

- [MPArmTimer](1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCancelTimer](1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPCreateTimer](1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDelayUntil](1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPDeleteTimer](1585761-mpdeletetimer.md): Deprecated. Removes a timer.
