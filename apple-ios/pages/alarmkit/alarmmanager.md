> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager](https://developer.apple.com/documentation/alarmkit/alarmmanager)

# AlarmManager

**Framework:** AlarmKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that exposes functions to work with alarms: scheduling, snoozing, cancelling.

## Declaration

```swift
class AlarmManager
```

<a id="overview"></a>

## Overview

Schedule your alarm alert using `AlarmManager`. The following example calls the `AlarmManager` schedule function by passing in the id and configuration.

```swift
Task {
    let _ = try? await AlarmManager.shared.schedule(id: id, configuration: configuration)
}
```

## Topics

### Creating a shared instance

- [shared](alarmmanager/shared.md): The singleton instance for interacting with the alarm system.

### Updating an alarm

- [AlarmManager.AlarmUpdates](alarmmanager/alarmupdates-swift.struct.md): An async sequence that publishes whenever an alarm changes.
- [alarmUpdates](alarmmanager/alarmupdates-swift.property.md): An asynchronous sequence that emits events when the set of alarms changes.
- [alarms](alarmmanager/alarms.md): Fetches all alarms from the daemon that belong to the current client.

### Scheduling an alarm

- [schedule(id:configuration:)](alarmmanager/schedule%28id_configuration_%29.md): Schedules a new alarm.
- [AlarmManager.AlarmConfiguration](alarmmanager/alarmconfiguration.md): An object that contains all the properties necessary to schedule an alarm.

### Requesting authorization

- [requestAuthorization()](alarmmanager/requestauthorization%28%29.md): Requests permission to use the alarm system if it hasn’t been requested before.

### Checking authorization status

- [AlarmManager.AlarmAuthorizationStateUpdates](alarmmanager/alarmauthorizationstateupdates.md): An asynchronous sequence that publishes a new value when authorization for the alarms and timers system changes.
- [authorizationUpdates](alarmmanager/authorizationupdates.md): An asynchronous sequence that emits events when authorization to use alarms changes.
- [AlarmManager.AuthorizationState](alarmmanager/authorizationstate-swift.enum.md): An enumeration describing all authorization states for the client process.
- [authorizationState](alarmmanager/authorizationstate-swift.property.md): Returns the current authorization state for this client.

### Changing an alarm state

- [cancel(id:)](alarmmanager/cancel%28id_%29.md): Cancels the alarm with the specified ID.
- [countdown(id:)](alarmmanager/countdown%28id_%29.md): Performs a countdown for the alarm with the specified ID if it’s currently alerting.
- [pause(id:)](alarmmanager/pause%28id_%29.md): Pauses the alarm with the specified ID if it’s in the countdown state.
- [resume(id:)](alarmmanager/resume%28id_%29.md): Resumes the alarm with the specified ID if it’s in the paused state.
- [stop(id:)](alarmmanager/stop%28id_%29.md): Stops the alarm with the specified ID.

### Throwing an error

- [AlarmManager.AlarmError](alarmmanager/alarmerror.md): An error that occurs when trying to schedule a timer.

## See Also

### Alarm management

- [Scheduling an alarm with AlarmKit](scheduling-an-alarm-with-alarmkit.md): Create prominent alerts at specified dates for your iOS app.
- [Alarm](alarm.md): An object that describes an alarm that can alert once or on a repeating schedule.
