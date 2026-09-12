> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/buttonrepeatbehavior](https://developer.apple.com/documentation/swiftui/environmentvalues/buttonrepeatbehavior)

# buttonRepeatBehavior

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.

## Declaration

```swift
var buttonRepeatBehavior: ButtonRepeatBehavior { get }
```

<a id="discussion"></a>

## Discussion

A value of `enabled` means that buttons will be able to repeatedly trigger their action, and `disabled` means they should not. A value of `automatic` means that buttons will defer to default behavior.

## See Also

### Creating buttons

- [Button](../button.md): A control that initiates an action.
- [buttonStyle(\_:)](../view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonBorderShape(\_:)](../view/buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [ButtonBorderShape](../buttonbordershape.md): A shape used to draw a button’s border.
- [buttonRepeatBehavior(\_:)](../view/buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [ButtonRepeatBehavior](../buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonSizing(\_:)](../view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](../buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
- [ButtonRole](../buttonrole.md): A value that describes the purpose of a button.
