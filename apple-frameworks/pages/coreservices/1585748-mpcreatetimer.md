> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585748-mpcreatetimer](https://developer.apple.com/documentation/coreservices/1585748-mpcreatetimer)

# MPCreateTimer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a timer.

## Declaration

```objectivec
OSStatus MPCreateTimer(MPTimerID *timerID);
```

## Parameters

- `timerID`: On return, the `timerID` contains the ID of the newly created timer.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

You can use a timer to notify an event, queue, or semaphore after a specified amount of time has elapsed. 

Timer objects are created from dynamically-allocated internal resources. Other tasks may be competing for these resources so it is possible this function may not be able to create one.

To specify the notification mechanism to signal, use the function  [MPSetTimerNotify](1585726-mpsettimernotify.md).

Also see the functions  [MPDeleteTimer](1585761-mpdeletetimer.md)  and  [MPArmTimer](1585612-mparmtimer.md).

## See Also

### Timer Services Functions

- [MPArmTimer](1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCancelTimer](1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPDelayUntil](1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPDeleteTimer](1585761-mpdeletetimer.md): Deprecated. Removes a timer.
- [MPSetTimerNotify](1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.
