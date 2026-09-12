> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate)

# AlarmPresentationState

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The system managed content state of an alarm Live Activity.

## Declaration

```swift
struct AlarmPresentationState
```

<a id="overview"></a>

## Overview

A Live Activity consists of two components: static attributes and dynamic content. Using a sports game as an example, the static attributes represent the team names, while the dynamic content represents the current score that updates throughout the game.

For alarms, these components serve distinct purposes:

- **Static attributes**: Your app provides this content through [AlarmAttributes](alarmattributes.md), including information such as tint color and button labels that remain constant.
- **Dynamic content**: AlarmKit provides this content through [AlarmPresentationState](alarmpresentationstate.md), including system-managed information such as the alarm [fireDate](alarmpresentationstate/mode-swift.enum/countdown/firedate.md) and current presentation mode.

The system automatically updates the [AlarmPresentationState](alarmpresentationstate.md) as the alarm transitions between different states, such as [Alarm.State.countdown](alarm/state-swift.enum/countdown.md), [Alarm.State.alerting](alarm/state-swift.enum/alerting.md), and [Alarm.State.paused](alarm/state-swift.enum/paused.md).

## Topics

### Creating an alarm state

- [init(alarmID:mode:)](alarmpresentationstate/init%28alarmid_mode_%29.md): Creates an instance of an alarm state.
- [alarmID](alarmpresentationstate/alarmid.md): The unique ID of the alarm.
- [mode](alarmpresentationstate/mode-swift.property.md): The specific state of the alarm, either alerting, countdown, or paused.
- [AlarmPresentationState.Mode](alarmpresentationstate/mode-swift.enum.md): A list of all modes the alarm can be in: either alert, countdown, or paused.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [AlarmPresentation](alarmpresentation.md): An object that describes the content required for the alarm UI.
- [AlarmAttributes](alarmattributes.md): An object that contains all information necessary for the alarm UI.
- [AlarmMetadata](alarmmetadata.md): A metadata object that contains information about an alarm.
