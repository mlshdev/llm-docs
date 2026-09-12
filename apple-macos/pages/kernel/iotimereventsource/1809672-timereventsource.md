> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iotimereventsource/1809672-timereventsource](https://developer.apple.com/documentation/kernel/iotimereventsource/1809672-timereventsource)

# timerEventSource

**Interface language:** Objective-C

**Framework:** Kernel

Allocates and returns an initialized timer instance.

## Declaration

```objectivec
static IOTimerEventSource * timerEventSource(
 OSObject *owner,
 Action action = 0); 
```

## Parameters

- `owner`:
- `action`:

## See Also

### Miscellaneous

- [cancelTimeout](1809565-canceltimeout.md): Disable any outstanding calls to this event source.
- [disable](1809571-disable.md): Disable a timed callout.
- [enable](1809577-enable.md): Enables a call to the action.
- [free](1809588-free.md): Sub-class implementation of free method, frees calloutEntry
- [init](1809597-init.md): Initializes the timer with an owner, and a handler to call when the timeout expires.
- [setTimeout(AbsoluteTime)](1809607-settimeout.md): Setup a callback at after the delay in decrementer ticks. See wakeAtTime(AbsoluteTime).
- [setTimeout(UInt32, UInt32)](1809617-settimeout.md): Setup a callback at after the delay in some unit. See wakeAtTime(AbsoluteTime).
- [setTimeoutFunc](1809624-settimeoutfunc.md): Set's timeout as the function of calloutEntry.
- [setTimeoutMS](1809629-settimeoutms.md): Setup a callback at after the delay in milliseconds. See wakeAtTime(AbsoluteTime).
- [setTimeoutTicks](1809639-settimeoutticks.md): Setup a callback at after the delay in scheduler ticks. See wakeAtTime(AbsoluteTime).
- [setTimeoutUS](1809649-settimeoutus.md): Setup a callback at after the delay in microseconds. See wakeAtTime(AbsoluteTime).
- [timeout](1809663-timeout.md): Function that routes the call from the OS' timeout mechanism into a work-loop context.
- [wakeAtTime(AbsoluteTime)](1809684-wakeattime.md): Setup a callback at this absolute time.
- [wakeAtTime(UInt32, UInt32)](1809694-wakeattime.md): Setup a callback at this absolute time. See wakeAtTime(AbsoluteTime).
- [wakeAtTimeMS](1809708-wakeattimems.md): Setup a callback at this absolute time. See wakeAtTime(AbsoluteTime).
- [wakeAtTimeTicks](1809720-wakeattimeticks.md): Setup a callback at this absolute time. See wakeAtTime(AbsoluteTime).
- [wakeAtTimeUS](1809737-wakeattimeus.md): Setup a callback at this absolute time. See wakeAtTime(AbsoluteTime).
