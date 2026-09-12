> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/alert-swift.struct](https://developer.apple.com/documentation/alarmkit/alarmpresentation/alert-swift.struct)

# AlarmPresentation.Alert

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes the UI of the alert that appears when an alarm fires.

## Declaration

```swift
struct Alert
```

<a id="overview"></a>

## Overview

`Alert` configures the title and buttons in the alarm UI. The system provides a stop button automatically. Use this object to optionally define a secondary button and its behavior. The code snippet below describes how to configure an `Alert` with a secondary button.

```swift
let alert = AlarmPresentation.Alert(title: "Eggs are ready!",
   secondaryButton: AlarmButton(text: "Repeat", textColor: .blue, systemImageName: "repeat"),
   secondaryButtonBehavior: .countdown)
```

## Topics

### Creating an alert

- [init(title:secondaryButton:secondaryButtonBehavior:)](alert-swift.struct/init%28title_secondarybutton_secondarybuttonbehavior_%29.md): Creates an alert for an alarm, with a system-provided stop control and optionally a second button.
- [title](alert-swift.struct/title.md): The title of the alert.

### Creating a second button

- [secondaryButton](alert-swift.struct/secondarybutton.md): The appearance of the secondary button.
- [secondaryButtonBehavior](alert-swift.struct/secondarybuttonbehavior-swift.property.md): The defined behavior of the second button.
- [AlarmPresentation.Alert.SecondaryButtonBehavior](alert-swift.struct/secondarybuttonbehavior-swift.enum.md): Describes the behaviour of the second button.

### Deprecated

- [init(title:stopButton:secondaryButton:secondaryButtonBehavior:)](alert-swift.struct/init%28title_stopbutton_secondarybutton_secondarybuttonbehavior_%29.md): Deprecated. Creates an alert for an alarm.
- [stopButton](alert-swift.struct/stopbutton.md): Deprecated. The appearance of the stop button.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing an alarm state

- [AlarmPresentation.Countdown](countdown-swift.struct.md): An object that describes the content required for the countdown UI.
- [AlarmPresentation.Paused](paused-swift.struct.md): An object that configures the UI for a paused timer state.
