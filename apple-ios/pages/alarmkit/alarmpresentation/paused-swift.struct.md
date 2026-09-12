> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/paused-swift.struct](https://developer.apple.com/documentation/alarmkit/alarmpresentation/paused-swift.struct)

# AlarmPresentation.Paused

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that configures the UI for a paused timer state.

## Declaration

```swift
struct Paused
```

<a id="overview"></a>

## Overview

This is only applicable to timers that can be paused. To get back to a countdown state, you must provide a definition for a resume button. The following code snippet describes how to schedule a timer that can pause and resume.

```swift
let paused = AlarmPresentation.Paused(
    title: "Timer paused",
    resumeButton: AlarmButton(text: "Resume", textColor: .blue, systemImageName: "play.circle"))
```

## Topics

### Creating a resume button

- [init(title:resumeButton:)](paused-swift.struct/init%28title_resumebutton_%29.md): Creates a pause presentation with a resume button.
- [resumeButton](paused-swift.struct/resumebutton.md): The appearance of the resume button.
- [title](paused-swift.struct/title.md): The title of the paused UI.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing an alarm state

- [AlarmPresentation.Alert](alert-swift.struct.md): An object that describes the UI of the alert that appears when an alarm fires.
- [AlarmPresentation.Countdown](countdown-swift.struct.md): An object that describes the content required for the countdown UI.
