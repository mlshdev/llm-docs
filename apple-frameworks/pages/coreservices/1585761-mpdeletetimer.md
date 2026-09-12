> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585761-mpdeletetimer](https://developer.apple.com/documentation/coreservices/1585761-mpdeletetimer)

# MPDeleteTimer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Removes a timer.

## Declaration

```objectivec
OSStatus MPDeleteTimer(MPTimerID timerID);
```

## Parameters

- `timerID`: The ID of the timer you want to remove.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

After deletion, the timer ID becomes invalid, and all internal resources associated with the timer are reclaimed.

Also see the function  [MPCreateTimer](1585748-mpcreatetimer.md).

## See Also

### Timer Services Functions

- [MPArmTimer](1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCancelTimer](1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPCreateTimer](1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDelayUntil](1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPSetTimerNotify](1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.
