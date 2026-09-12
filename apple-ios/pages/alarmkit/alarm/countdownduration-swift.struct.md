> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/countdownduration-swift.struct](https://developer.apple.com/documentation/alarmkit/alarm/countdownduration-swift.struct)

# Alarm.CountdownDuration

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that defines the durations used in an alarm that has a countdown.

## Declaration

```swift
struct CountdownDuration
```

<a id="overview"></a>

## Overview

Provide the countdown duration in seconds.

```swift
Alarm.CountdownDuration(preAlert: 10, postAlert: 10)
```

## Topics

### Creating a countdown duration

- [init(preAlert:postAlert:)](countdownduration-swift.struct/init%28prealert_postalert_%29.md): Creates an instance of a countdown duration.
- [postAlert](countdownduration-swift.struct/postalert.md): The duration applied after the alarm has alerted at least once and moves back to the countdown state.
- [preAlert](countdownduration-swift.struct/prealert.md): The duration applied before the alarm fires.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining a countdown duration

- [countdownDuration](countdownduration-swift.property.md): The time left before an alert, in seconds.
- [id](id.md): The unique identifier of the alarm.
- [Alarm.State](state-swift.enum.md): An enum that lists all possible states of an alarm.
- [state](state-swift.property.md): The current state of the alarm.
