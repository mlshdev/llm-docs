> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585612-mparmtimer](https://developer.apple.com/documentation/coreservices/1585612-mparmtimer)

# MPArmTimer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Arms the timer to expire at a given time.

## Declaration

```objectivec
OSStatus MPArmTimer(MPTimerID timerID, AbsoluteTime *expirationTime, OptionBits options);
```

## Parameters

- `timerID`: The ID of the timer you want to arm.
- `expirationTime`: A pointer to a value that specifies when you want the timer to expire. Note that if you arm the timer with a time that has already passed, the timer expires immediately.
- `options`: Any optional actions. See [Timer Option Masks](1585611-timer_option_masks.md) for a list of possible values.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If the timer has already expired, the reset does not take place and the function returns `kMPInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

The expiration time is an absolute time, which you can generate by calling the Driver Services Library function `UpTime`. When the timer expires, a notification is sent to the notification mechanism specified in the last  [MPSetTimerNotify](1585726-mpsettimernotify.md)  call. If the specified notification ID has become invalid, no action is taken when the timer expires. The timer itself is deleted when it expires unless you specified the `kMPPreserveTimerID` option in the options parameter.

Also see the function  [MPCancelTimer](1585745-mpcanceltimer.md).

## See Also

### Timer Services Functions

- [MPCancelTimer](1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPCreateTimer](1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDelayUntil](1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPDeleteTimer](1585761-mpdeletetimer.md): Deprecated. Removes a timer.
- [MPSetTimerNotify](1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.
