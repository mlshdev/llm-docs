> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585745-mpcanceltimer](https://developer.apple.com/documentation/coreservices/1585745-mpcanceltimer)

# MPCancelTimer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Cancels an armed timer.

## Declaration

```objectivec
OSStatus MPCancelTimer(MPTimerID timerID, AbsoluteTime *timeRemaining);
```

## Parameters

- `timerID`: The ID of the armed timer you want to cancel.
- `timeRemaining`: On return, the `timeRemaining` contains the time remaining before the timer would have expired.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If the timer has already expired, this function returns `kMPInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

Also see the function  [MPArmTimer](1585612-mparmtimer.md).

## See Also

### Timer Services Functions

- [MPArmTimer](1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCreateTimer](1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDelayUntil](1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPDeleteTimer](1585761-mpdeletetimer.md): Deprecated. Removes a timer.
- [MPSetTimerNotify](1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.
