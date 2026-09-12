> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/clockintent/createalarm](https://developer.apple.com/documentation/appintents/appschema/clockintent/createalarm)

# createAlarm

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that creates an alarm.

## Declaration

```swift
var createAlarm: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `clock` domain and one of your app’s actions matches the `createAlarm` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .clock.createAlarm)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `createAlarm` schema:

```swift
@AppIntent(schema: .clock.createAlarm)
struct CreateAlarmIntent {
    var time: DateComponents
    var label: String?
    var recurrenceDays: Calendar.RecurrenceRule?
    var canSnooze: Bool

    func perform() async throws -> some ReturnsValue<<#AlarmEntity#>> {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [cancelTimer](canceltimer.md): An intent schema that cancels timers.
- [createTimer](createtimer.md): An intent schema that creates a timer.
- [deleteAlarm](deletealarm.md): An intent schema that deletes the alarms.
- [dismissAlarm](dismissalarm.md): An intent schema that dismisses a firing or snoozed alarm.
- [pauseTimer](pausetimer.md): An intent schema that pauses a timer.
- [resumeTimer](resumetimer.md): An intent schema that resumes a timer.
- [snoozeAlarm](snoozealarm.md): An intent schema that snoozes the firing alarm.
- [updateAlarm](updatealarm.md): An intent schema that updates the alarm, for example, turn on / off the alarm, change the label, time, or repeating schedule.
- [updateTimer](updatetimer.md): An intent schema that updates the timer’s attributes.
- [AppSchema.ClockIntent](../clockintent.md): Identifies intent schemas in the clock domain.
