> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebaseaddtimer(_:timer:runloop:)](https://developer.apple.com/documentation/coremedia/cmtimebaseaddtimer(_:timer:runloop:))

# CMTimebaseAddTimer(\_:timer:runloop:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds the timer to the list of timers the timebase manages.

## Declaration

```swift
func CMTimebaseAddTimer(_ timebase: CMTimebase, timer: CFRunLoopTimer, runloop: CFRunLoop) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The timer must be a repeating runloop timer (with a very long interval at least as long as the constant [kCMTimebaseVeryLongCFTimeInterval](kcmtimebaseverylongcftimeinterval.md)) attached to a runloop. The timebase retains the timer, and maintains its “NextFireDate” according to the `CMTime` set using [CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:)](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md). Until the first call to `CMTimebaseSetTimerNextFireTime`, the system sets the “NextFireDate” to a future time. The function retains the  runloop you specify, which must be the runloop you attached to the timer when you created it. The system uses the retained runloop to call `CFRunLoopWakeUp`() when the timebase modifies the timer’s fire date.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimerDispatchSource(\_:timerSource:)](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer(\_:timer:)](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource(\_:timerSource:)](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:)](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately(\_:timer:)](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately(\_:timerSource:)](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

# CMTimebaseAddTimer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds the timer to the list of timers the timebase manages.

## Declaration

```objectivec
extern OSStatus CMTimebaseAddTimer(CMTimebaseRef timebase, CFRunLoopTimerRef timer, CFRunLoopRef runloop);
```

<a id="Discussion"></a>

## Discussion

The timer must be a repeating runloop timer (with a very long interval at least as long as the constant [kCMTimebaseVeryLongCFTimeInterval](kcmtimebaseverylongcftimeinterval.md)) attached to a runloop. The timebase retains the timer, and maintains its “NextFireDate” according to the `CMTime` set using [CMTimebaseSetTimerNextFireTime](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md). Until the first call to `CMTimebaseSetTimerNextFireTime`, the system sets the “NextFireDate” to a future time. The function retains the  runloop you specify, which must be the runloop you attached to the timer when you created it. The system uses the retained runloop to call `CFRunLoopWakeUp`() when the timebase modifies the timer’s fire date.

## See Also

### Interacting with Timers

- [CMTimebaseAddTimerDispatchSource](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.
