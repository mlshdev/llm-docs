> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmbutton](https://developer.apple.com/documentation/alarmkit/alarmbutton)

# AlarmButton

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A struct that defines the appearance of buttons.

## Declaration

```swift
struct AlarmButton
```

<a id="overview"></a>

## Overview

The following example uses `AlarmButton` to define the appearance of the alarm.

```swift
let alert = AlarmPresentation.Alert(
    title: "Eggs are ready!",
    secondaryButton: AlarmButton(text: "Repeat", textColor: .blue, systemImageName: "repeat"),
    secondaryButtonBehavior: .countdown)
```

## Topics

### Creating a button

- [init(text:textColor:systemImageName:)](alarmbutton/init%28text_textcolor_systemimagename_%29.md): Creates an alarm button.
- [systemImageName](alarmbutton/systemimagename.md): The name of the icon you use on the button.
- [textColor](alarmbutton/textcolor.md): The color for the text on the button.
- [text](alarmbutton/text.md): Text to show in a label on the button.

### Encoding and decoding

- [encode(to:)](alarmbutton/encode%28to_%29.md): Performs encoding to a given encoder.
- [init(from:)](alarmbutton/init%28from_%29.md): Creates an alarm button from a decoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
