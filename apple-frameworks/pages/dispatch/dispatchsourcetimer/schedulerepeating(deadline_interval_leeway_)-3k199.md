> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourcetimer/schedulerepeating(deadline:interval:leeway:)-3k199](https://developer.apple.com/documentation/dispatch/dispatchsourcetimer/schedulerepeating(deadline:interval:leeway:)-3k199)

# scheduleRepeating(deadline:interval:leeway:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift  (deprecated in 4.0)

Schedules a repeating timer with the specified deadline, repeat interval, and leeway values.

> Use [schedule(deadline:repeating:leeway:)](schedule%28deadline_repeating_leeway_%29-hvhp.md) instead.

## Declaration

```swift
func scheduleRepeating(deadline: DispatchTime, interval: DispatchTimeInterval, leeway: DispatchTimeInterval = .nanoseconds(0))
```

## Parameters

- `deadline`: The Mach absolute time at which to execute the dispatch source’s event handler.
- `interval`: The repeat interval for the timer, specified as a [DispatchTimeInterval](../dispatchtimeinterval.md) value.
- `leeway`: The maximum amount of time after `deadline` by which the system may delay the delivery of the timer event.

<a id="Discussion"></a>

## Discussion

The system may defer the deliver of timer events to improve power consumption and system performance. The first time the timer fires, the maximum allowable delay is equal to the value in the `leeway` parameter. For subsequent firings, the timer fires at `deadline + (n * repeating)`, and the maximum delay is equal to `min(leeway, repeating/2)`—that is, the smaller of either the `leeway` value or half the value in the `repeating` parameter.

The system may fire a timer sooner than the value in the `deadline` parameter. If you created the timer with the [strict](../dispatchsource/timerflags/strict.md) flag, the system makes every effort to observe the provided `leeway` value, even if it is smaller than the current lower limit.

Calling this method on a cancelled dispatch source has no effect.

## See Also

### Deprecated

- [scheduleOneshot(deadline:leeway:)](scheduleoneshot%28deadline_leeway_%29.md): Deprecated. Schedules a timer to fire once with the specified deadline and leeway values.
- [scheduleOneshot(wallDeadline:leeway:)](scheduleoneshot%28walldeadline_leeway_%29.md): Deprecated. Schedules a timer to fire once with the specified deadline and leeway values.
- [scheduleRepeating(deadline:interval:leeway:)](schedulerepeating%28deadline_interval_leeway_%29-4wtot.md): Deprecated. Schedules a repeating timer with the specified deadline, repeat interval, and leeway values.
- [scheduleRepeating(wallDeadline:interval:leeway:)](schedulerepeating%28walldeadline_interval_leeway_%29-6fiox.md): Deprecated. Schedules a repeating timer with the specified time, repeat interval, and leeway values.
- [scheduleRepeating(wallDeadline:interval:leeway:)](schedulerepeating%28walldeadline_interval_leeway_%29-942p7.md): Deprecated. Schedules a repeating timer with the specified time, repeat interval, and leeway values.
