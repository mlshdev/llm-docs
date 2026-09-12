> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonrole](https://developer.apple.com/documentation/swiftui/buttonrole)

# ButtonRole

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A value that describes the purpose of a button.

## Declaration

```swift
struct ButtonRole
```

<a id="overview"></a>

## Overview

A button role provides a description of a button’s purpose.  For example, the [destructive](buttonrole/destructive.md) role indicates that a button performs a destructive action, like delete user data:

```swift
Button("Delete", role: .destructive) { delete() }
```

## Topics

### Getting button roles

- [cancel](buttonrole/cancel.md): A role that indicates a button that cancels an operation.
- [destructive](buttonrole/destructive.md): A role that indicates a destructive button.

### Type Properties

- [close](buttonrole/close.md): A role that indicates a button that closes the current operation.
- [confirm](buttonrole/confirm.md): A role that indicates a button that confirms an operation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating buttons

- [Button](button.md): A control that initiates an action.
- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [ButtonBorderShape](buttonbordershape.md): A shape used to draw a button’s border.
- [buttonRepeatBehavior(\_:)](view/buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [ButtonRepeatBehavior](buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonRepeatBehavior](environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
