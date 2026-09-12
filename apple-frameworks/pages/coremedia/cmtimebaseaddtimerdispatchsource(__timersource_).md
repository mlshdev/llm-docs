> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebaseaddtimerdispatchsource(_:timersource:)](https://developer.apple.com/documentation/coremedia/cmtimebaseaddtimerdispatchsource(_:timersource:))

# CMTimebaseAddTimerDispatchSource(\_:timerSource:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds the timer dispatch source to the list of timers the timebase manages.

## Declaration

```swift
func CMTimebaseAddTimerDispatchSource(_ timebase: CMTimebase, timerSource: dispatch_source_t) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

You must create the timer source by calling `dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER, 0, 0, some_dispatch_queue)` and associate an event handler with it from `dispatch_source_set_event_handler(timerSource, some_handler_block)` or `dispatch_source_set_event_handler_f(timerSource, some_handler_function)`. Call `dispatch_resume(timerSource)` because the system creates dispatch sources in a suspended state.

The timebase retains the timer source, and maintains its start time according to the `CMTime` set using [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md). Until the first call to [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md), the system sets the start time to `DISPATCH_TIME_FOREVER`.

For more information on dispatch sources, see [Dispatch Sources](http://developer.apple.com/library/mac/#DOCUMENTATION/General/Conceptual/ConcurrencyProgrammingGuide/GCDWorkQueues/GCDWorkQueues.html).

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer(\_:timer:runloop:)](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer(\_:timer:)](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource(\_:timerSource:)](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:)](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately(\_:timer:)](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately(\_:timerSource:)](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

# CMTimebaseAddTimerDispatchSource (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds the timer dispatch source to the list of timers the timebase manages.

## Declaration

```objectivec
extern OSStatus CMTimebaseAddTimerDispatchSource(CMTimebaseRef timebase, dispatch_source_t timerSource);
```

<a id="Discussion"></a>

## Discussion

You must create the timer source by calling `dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER, 0, 0, some_dispatch_queue)` and associate an event handler with it from `dispatch_source_set_event_handler(timerSource, some_handler_block)` or `dispatch_source_set_event_handler_f(timerSource, some_handler_function)`. Call `dispatch_resume(timerSource)` because the system creates dispatch sources in a suspended state.

The timebase retains the timer source, and maintains its start time according to the `CMTime` set using [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md). Until the first call to [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md), the system sets the start time to `DISPATCH_TIME_FOREVER`.

For more information on dispatch sources, see [Dispatch Sources](http://developer.apple.com/library/mac/#DOCUMENTATION/General/Conceptual/ConcurrencyProgrammingGuide/GCDWorkQueues/GCDWorkQueues.html).

## See Also

### Interacting with Timers

- [CMTimebaseAddTimer](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.
