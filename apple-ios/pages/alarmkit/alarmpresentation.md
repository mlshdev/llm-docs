> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation](https://developer.apple.com/documentation/alarmkit/alarmpresentation)

# AlarmPresentation

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes the content required for the alarm UI.

## Declaration

```swift
struct AlarmPresentation
```

<a id="overview"></a>

## Overview

The following example shows how to set different views for an alarm using the `AlarmPresentation` model.

```swift
let alert = AlarmPresentation.Alert(
    title: "Eggs are ready!",
    secondaryButton: AlarmButton(text: "Repeat", textColor: .blue, systemImageName: "repeat"),
    secondaryButtonBehavior: .countdown)

let countdown = AlarmPresentation.Countdown(title: "Eggs are cooking")

let paused = AlarmPresentation.Paused(
    title: "Timer paused",
    resumeButton: AlarmButton(text: "Resume", textColor: .blue, systemImageName: "play.circle"))

let presentation = AlarmPresentation(alert: alert, countdown: countdown, paused: paused)
```

## Topics

### Defining the alarm UI

- [init(alert:countdown:paused:)](alarmpresentation/init%28alert_countdown_paused_%29.md): Configures an alert with an optional countdown and paused state.
- [alert](alarmpresentation/alert-swift.property.md): The content for the alert mode of the alarm.
- [countdown](alarmpresentation/countdown-swift.property.md): The content for the snooze or countdown mode of the alarm.
- [paused](alarmpresentation/paused-swift.property.md): The content for the pause mode of the alarm.

### Describing an alarm state

- [AlarmPresentation.Alert](alarmpresentation/alert-swift.struct.md): An object that describes the UI of the alert that appears when an alarm fires.
- [AlarmPresentation.Countdown](alarmpresentation/countdown-swift.struct.md): An object that describes the content required for the countdown UI.
- [AlarmPresentation.Paused](alarmpresentation/paused-swift.struct.md): An object that configures the UI for a paused timer state.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [AlarmPresentationState](alarmpresentationstate.md): The system managed content state of an alarm Live Activity.
- [AlarmAttributes](alarmattributes.md): An object that contains all information necessary for the alarm UI.
- [AlarmMetadata](alarmmetadata.md): A metadata object that contains information about an alarm.
