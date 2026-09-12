> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourcetimer](https://developer.apple.com/documentation/dispatch/dispatchsourcetimer)

# DispatchSourceTimer

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that submits the event handler block based on a timer.

## Declaration

```swift
protocol DispatchSourceTimer : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeTimerSource(flags:queue:)](dispatchsource/maketimersource%28flags_queue_%29.md) method to create an object that adopts this protocol.

## Topics

### Scheduling the Timer Trigger Conditions

- [schedule(deadline:repeating:leeway:)](dispatchsourcetimer/schedule%28deadline_repeating_leeway_%29-hvhp.md): Schedules a timer with the specified deadline, repeat interval, and leeway values.
- [schedule(deadline:repeating:leeway:)](dispatchsourcetimer/schedule%28deadline_repeating_leeway_%29-24w9r.md): Schedules a timer with the specified deadline, repeat interval, and leeway values.
- [schedule(wallDeadline:repeating:leeway:)](dispatchsourcetimer/schedule%28walldeadline_repeating_leeway_%29-7c4d7.md): Schedules a timer with the specified time, repeat interval, and leeway values.
- [schedule(wallDeadline:repeating:leeway:)](dispatchsourcetimer/schedule%28walldeadline_repeating_leeway_%29-21bay.md): Schedules a timer with the specified time, repeat interval, and leeway values.

### Deprecated

- [scheduleOneshot(deadline:leeway:)](dispatchsourcetimer/scheduleoneshot%28deadline_leeway_%29.md): Deprecated. Schedules a timer to fire once with the specified deadline and leeway values.
- [scheduleOneshot(wallDeadline:leeway:)](dispatchsourcetimer/scheduleoneshot%28walldeadline_leeway_%29.md): Deprecated. Schedules a timer to fire once with the specified deadline and leeway values.
- [scheduleRepeating(deadline:interval:leeway:)](dispatchsourcetimer/schedulerepeating%28deadline_interval_leeway_%29-3k199.md): Deprecated. Schedules a repeating timer with the specified deadline, repeat interval, and leeway values.
- [scheduleRepeating(deadline:interval:leeway:)](dispatchsourcetimer/schedulerepeating%28deadline_interval_leeway_%29-4wtot.md): Deprecated. Schedules a repeating timer with the specified deadline, repeat interval, and leeway values.
- [scheduleRepeating(wallDeadline:interval:leeway:)](dispatchsourcetimer/schedulerepeating%28walldeadline_interval_leeway_%29-6fiox.md): Deprecated. Schedules a repeating timer with the specified time, repeat interval, and leeway values.
- [scheduleRepeating(wallDeadline:interval:leeway:)](dispatchsourcetimer/schedulerepeating%28walldeadline_interval_leeway_%29-942p7.md): Deprecated. Schedules a repeating timer with the specified time, repeat interval, and leeway values.

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Timer Source

- [makeTimerSource(flags:queue:)](dispatchsource/maketimersource%28flags_queue_%29.md): Creates a new dispatch source object for monitoring timer events.
- [DispatchSource.TimerFlags](dispatchsource/timerflags.md): Flags to use when configuring a timer dispatch source.
