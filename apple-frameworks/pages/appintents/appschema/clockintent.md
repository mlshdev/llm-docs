> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/clockintent](https://developer.apple.com/documentation/appintents/appschema/clockintent)

# AppSchema.ClockIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies intent schemas in the clock domain.

## Declaration

```swift
protocol ClockIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [cancelTimer](clockintent/canceltimer.md): An intent schema that cancels timers.
- [createAlarm](clockintent/createalarm.md): An intent schema that creates an alarm.
- [createTimer](clockintent/createtimer.md): An intent schema that creates a timer.
- [deleteAlarm](clockintent/deletealarm.md): An intent schema that deletes the alarms.
- [dismissAlarm](clockintent/dismissalarm.md): An intent schema that dismisses a firing or snoozed alarm.
- [lapStopwatch](clockintent/lapstopwatch.md): An intent schema that laps the stopwatch.
- [pauseTimer](clockintent/pausetimer.md): An intent schema that pauses a timer.
- [resetStopwatch](clockintent/resetstopwatch.md): An intent schema that resets the stopwatch.
- [resumeTimer](clockintent/resumetimer.md): An intent schema that resumes a timer.
- [snoozeAlarm](clockintent/snoozealarm.md): An intent schema that snoozes the firing alarm.
- [startStopwatch](clockintent/startstopwatch.md): An intent schema that starts the stopwatch.
- [stopStopwatch](clockintent/stopstopwatch.md): An intent schema that stops the stopwatch.
- [updateAlarm](clockintent/updatealarm.md): An intent schema that updates the alarm, for example, turn on / off the alarm, change the label, time, or repeating schedule.
- [updateTimer](clockintent/updatetimer.md): An intent schema that updates the timer’s attributes.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [cancelTimer](clockintent/canceltimer.md): An intent schema that cancels timers.
- [createAlarm](clockintent/createalarm.md): An intent schema that creates an alarm.
- [createTimer](clockintent/createtimer.md): An intent schema that creates a timer.
- [deleteAlarm](clockintent/deletealarm.md): An intent schema that deletes the alarms.
- [dismissAlarm](clockintent/dismissalarm.md): An intent schema that dismisses a firing or snoozed alarm.
- [pauseTimer](clockintent/pausetimer.md): An intent schema that pauses a timer.
- [resumeTimer](clockintent/resumetimer.md): An intent schema that resumes a timer.
- [snoozeAlarm](clockintent/snoozealarm.md): An intent schema that snoozes the firing alarm.
- [updateAlarm](clockintent/updatealarm.md): An intent schema that updates the alarm, for example, turn on / off the alarm, change the label, time, or repeating schedule.
- [updateTimer](clockintent/updatetimer.md): An intent schema that updates the timer’s attributes.
