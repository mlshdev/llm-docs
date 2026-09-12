> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesettimerdispatchsourcetofireimmediately(_:timersource:)](https://developer.apple.com/documentation/coremedia/cmtimebasesettimerdispatchsourcetofireimmediately(_:timersource:))

# CMTimebaseSetTimerDispatchSourceToFireImmediately(\_:timerSource:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

## Declaration

```swift
func CMTimebaseSetTimerDispatchSourceToFireImmediately(_ timebase: CMTimebase, timerSource: dispatch_source_t) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The timer source you specify must be on the list of timers the timebase manages. This is equivalent to calling `dispatch_source_set_timer(timerSource, DISPATCH_TIME_NOW, 0, 0 )`; except that the timebase gets to know that it shouldn’t interfere.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer(\_:timer:runloop:)](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource(\_:timerSource:)](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer(\_:timer:)](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource(\_:timerSource:)](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:)](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately(\_:timer:)](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.

# CMTimebaseSetTimerDispatchSourceToFireImmediately (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetTimerDispatchSourceToFireImmediately(CMTimebaseRef timebase, dispatch_source_t timerSource);
```

<a id="Discussion"></a>

## Discussion

The timer source you specify must be on the list of timers the timebase manages. This is equivalent to calling `dispatch_source_set_timer(timerSource, DISPATCH_TIME_NOW, 0, 0 )`; except that the timebase gets to know that it shouldn’t interfere.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
