> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonsizing](https://developer.apple.com/documentation/swiftui/buttonsizing)

# ButtonSizing

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The sizing behavior of `Button`s and other button-like controls.

## Declaration

```swift
struct ButtonSizing
```

## Topics

### Type Properties

- [automatic](buttonsizing/automatic.md): The default button sizing behavior appropriate for the button’s contextual placement and platform.
- [fitted](buttonsizing/fitted.md): Sizes a button along its primary axis to fit its inner content, compressing if necessary.
- [flexible](buttonsizing/flexible.md): Sizes a button flexibly along its primary axis, filling its available space by expanding or compressing beyond its ideal size.

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
- [ButtonRepeatBehavior](buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonRepeatBehavior](environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonRole](buttonrole.md): A value that describes the purpose of a button.
