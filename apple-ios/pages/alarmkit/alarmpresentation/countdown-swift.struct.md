> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/countdown-swift.struct](https://developer.apple.com/documentation/alarmkit/alarmpresentation/countdown-swift.struct)

# AlarmPresentation.Countdown

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes the content required for the countdown UI.

## Declaration

```swift
struct Countdown
```

<a id="overview"></a>

## Overview

The code snippet below describes how to configure a countdown UI with a pause and resume button.

```swift
let countdown = AlarmPresentation.Countdown(title: "Eggs are cooking")
let paused = AlarmPresentation.Paused(
    title: "Timer paused",
    resumeButton: AlarmButton(text: "Resume", textColor: .blue, systemImageName: "play.circle"))
```

## Topics

### Creates a pause button

- [init(title:pauseButton:)](countdown-swift.struct/init%28title_pausebutton_%29.md): Creates a countdown with an optional pause button.
- [pauseButton](countdown-swift.struct/pausebutton.md): The pause button for a countdown timer.
- [title](countdown-swift.struct/title.md): The title of the countdown.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing an alarm state

- [AlarmPresentation.Alert](alert-swift.struct.md): An object that describes the UI of the alert that appears when an alarm fires.
- [AlarmPresentation.Paused](paused-swift.struct.md): An object that configures the UI for a paused timer state.
