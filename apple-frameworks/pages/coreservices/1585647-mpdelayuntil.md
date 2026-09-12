> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585647-mpdelayuntil](https://developer.apple.com/documentation/coreservices/1585647-mpdelayuntil)

# MPDelayUntil

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Blocks the calling task until a specified time.

## Declaration

```objectivec
OSStatus MPDelayUntil(AbsoluteTime *expirationTime);
```

## Parameters

- `expirationTime`: The time to unblock the task.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

You cannot call this function from a cooperative task.

## See Also

### Timer Services Functions

- [MPArmTimer](1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCancelTimer](1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPCreateTimer](1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDeleteTimer](1585761-mpdeletetimer.md): Deprecated. Removes a timer.
- [MPSetTimerNotify](1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.
