> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/state-swift.enum](https://developer.apple.com/documentation/alarmkit/alarm/state-swift.enum)

# Alarm.State

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An enum that lists all possible states of an alarm.

## Declaration

```swift
enum State
```

## Topics

### Setting alarm states

- [Alarm.State.alerting](state-swift.enum/alerting.md): The alarm is currently firing.
- [Alarm.State.countdown](state-swift.enum/countdown.md): The alarm is counting down to its alert time.
- [Alarm.State.paused](state-swift.enum/paused.md): A person paused the countdown.
- [Alarm.State.scheduled](state-swift.enum/scheduled.md): The alarm is scheduled and ready to alert at the appropriate time.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining a countdown duration

- [Alarm.CountdownDuration](countdownduration-swift.struct.md): An object that defines the durations used in an alarm that has a countdown.
- [countdownDuration](countdownduration-swift.property.md): The time left before an alert, in seconds.
- [id](id.md): The unique identifier of the alarm.
- [state](state-swift.property.md): The current state of the alarm.
