> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm](https://developer.apple.com/documentation/alarmkit/alarm)

# Alarm

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes an alarm that can alert once or on a repeating schedule.

## Declaration

```swift
struct Alarm
```

<a id="overview"></a>

## Overview

The following is an example of a 10 second timer:

```swift
let configuration = AlarmManager.AlarmConfiguration(
    countdownDuration: Alarm.CountdownDuration(preAlert: 10, postAlert: 10),
    schedule: nil,
    attributes: attributes,
    secondaryIntent: repeatIntent,
    sound: .default)
```

The following is an example of an alarm that includes a 9 minute snooze option and plays the default sound:

```swift
let configuration = AlarmManager.AlarmConfiguration(
    countdownDuration: Alarm.CountdownDuration(preAlert: nil, postAlert: 9 * 60),
    schedule: .relative(schedule),
    attributes: attributes,
    secondaryIntent: snoozeIntent,
    sound: .default)
```

## Topics

### Defining a countdown duration

- [Alarm.CountdownDuration](alarm/countdownduration-swift.struct.md): An object that defines the durations used in an alarm that has a countdown.
- [countdownDuration](alarm/countdownduration-swift.property.md): The time left before an alert, in seconds.
- [id](alarm/id.md): The unique identifier of the alarm.
- [Alarm.State](alarm/state-swift.enum.md): An enum that lists all possible states of an alarm.
- [state](alarm/state-swift.property.md): The current state of the alarm.

### Setting an alarm schedule

- [Alarm.Schedule](alarm/schedule-swift.enum.md): A list of all types of schedules that the framework supports.
- [schedule](alarm/schedule-swift.property.md): The schedule determines when the alarm alerts.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Alarm management

- [Scheduling an alarm with AlarmKit](scheduling-an-alarm-with-alarmkit.md): Create prominent alerts at specified dates for your iOS app.
- [AlarmManager](alarmmanager.md): An object that exposes functions to work with alarms: scheduling, snoozing, cancelling.
