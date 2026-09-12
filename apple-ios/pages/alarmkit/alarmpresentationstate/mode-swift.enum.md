> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum)

# AlarmPresentationState.Mode

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A list of all modes the alarm can be in: either alert, countdown, or paused.

## Declaration

```swift
enum Mode
```

<a id="overview"></a>

## Overview

This value is sent as part of [AlarmPresentationState](../alarmpresentationstate.md) to the widget extension, so that it can produce the appropriate UI for the current state of the alarm.

## Topics

### Creating a countdown

- [AlarmPresentationState.Mode.Countdown](mode-swift.enum/countdown.md): An object that specifies a countdown is in progress.
- [AlarmPresentationState.Mode.countdown(\_:)](mode-swift.enum/countdown%28__%29.md): A mode indicating the alarm timer is active.

### Creating an alert

- [AlarmPresentationState.Mode.Alert](mode-swift.enum/alert.md): A value that indicates the current state of an alarm.
- [AlarmPresentationState.Mode.alert(\_:)](mode-swift.enum/alert%28__%29.md): A mode indicating an alarm emits an alert.

### Pausing an alarm

- [AlarmPresentationState.Mode.Paused](mode-swift.enum/paused.md): An object that specifies the current state of the alarm has paused.
- [AlarmPresentationState.Mode.paused(\_:)](mode-swift.enum/paused%28__%29.md): A mode indicating the alarm isn’t active.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an alarm state

- [init(alarmID:mode:)](init%28alarmid_mode_%29.md): Creates an instance of an alarm state.
- [alarmID](alarmid.md): The unique ID of the alarm.
- [mode](mode-swift.property.md): The specific state of the alarm, either alerting, countdown, or paused.
