> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesettimernextfiretime(_:timer:firetime:flags:)](https://developer.apple.com/documentation/coremedia/cmtimebasesettimernextfiretime(_:timer:firetime:flags:))

# CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time on the timebase’s timeline at which the timer should fire next.

## Declaration

```swift
func CMTimebaseSetTimerNextFireTime(_ timebase: CMTimebase, timer: CFRunLoopTimer, fireTime: CMTime, flags: UInt32) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The timer must be on the list of timers the timebase manages. The timebase continues to update the timer’s “NextFireDate” according to time jumps and effective rate changes. If `fireTime` is not numeric, or if the timebase is not moving, the “NextFireDate” is set to a future date.

Due to the way that `CFRunLoopTimers` are implemented, if a timer passes through a state in which it is due to fire, it may fire even if its rescheduled before the runloop runs again.  Clients should take care to avoid temporarily scheduling timers in the past.  For example, set the timebase’s rate or time before you set the timer’s next fire time, if you are doing both at once. If setting the timebase’s rate or time might put the timer’s fire time in the past, you may need to set the fire time to `kCMTimeInvalid` across the timebase change.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer(\_:timer:runloop:)](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource(\_:timerSource:)](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer(\_:timer:)](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource(\_:timerSource:)](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerToFireImmediately(\_:timer:)](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately(\_:timerSource:)](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

# CMTimebaseSetTimerNextFireTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time on the timebase’s timeline at which the timer should fire next.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetTimerNextFireTime(CMTimebaseRef timebase, CFRunLoopTimerRef timer, CMTime fireTime, uint32_t flags);
```

<a id="Discussion"></a>

## Discussion

The timer must be on the list of timers the timebase manages. The timebase continues to update the timer’s “NextFireDate” according to time jumps and effective rate changes. If `fireTime` is not numeric, or if the timebase is not moving, the “NextFireDate” is set to a future date.

Due to the way that `CFRunLoopTimers` are implemented, if a timer passes through a state in which it is due to fire, it may fire even if its rescheduled before the runloop runs again.  Clients should take care to avoid temporarily scheduling timers in the past.  For example, set the timebase’s rate or time before you set the timer’s next fire time, if you are doing both at once. If setting the timebase’s rate or time might put the timer’s fire time in the past, you may need to set the fire time to `kCMTimeInvalid` across the timebase change.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerToFireImmediately](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.
