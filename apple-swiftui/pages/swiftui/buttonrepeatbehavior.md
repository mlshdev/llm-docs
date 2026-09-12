> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonrepeatbehavior](https://developer.apple.com/documentation/swiftui/buttonrepeatbehavior)

# ButtonRepeatBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The options for controlling the repeatability of button actions.

## Declaration

```swift
struct ButtonRepeatBehavior
```

<a id="overview"></a>

## Overview

Use values of this type with the [buttonRepeatBehavior(\_:)](view/buttonrepeatbehavior%28__%29.md) modifier.

## Topics

### Getting repeat behaviors

- [automatic](buttonrepeatbehavior/automatic.md): The automatic repeat behavior.
- [enabled](buttonrepeatbehavior/enabled.md): Repeating button actions will be enabled.
- [disabled](buttonrepeatbehavior/disabled.md): Repeating button actions will be disabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating buttons

- [Button](button.md): A control that initiates an action.
- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [ButtonBorderShape](buttonbordershape.md): A shape used to draw a button’s border.
- [buttonRepeatBehavior(\_:)](view/buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [buttonRepeatBehavior](environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
- [ButtonRole](buttonrole.md): A value that describes the purpose of a button.
