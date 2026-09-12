> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/buttonbordershape(_:)](https://developer.apple.com/documentation/swiftui/view/buttonbordershape(_:))

# buttonBorderShape(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the border shape for buttons in this view.

## Declaration

```swift
nonisolated func buttonBorderShape(_ shape: ButtonBorderShape) -> some View

```

## Parameters

- `shape`: The shape to use.

<a id="discussion"></a>

## Discussion

The border shape is used to draw the platter for a bordered button.

The border shape affects buttons of the [bordered](../primitivebuttonstyle/bordered.md) and [borderedProminent](../primitivebuttonstyle/borderedprominent.md) styles.

> **Note**

> In macOS 15 and earlier, some border shapes are only applicable to bordered buttons in widgets.

## See Also

### Creating buttons

- [Button](../button.md): A control that initiates an action.
- [buttonStyle(\_:)](buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [ButtonBorderShape](../buttonbordershape.md): A shape used to draw a button’s border.
- [buttonRepeatBehavior(\_:)](buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [ButtonRepeatBehavior](../buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonRepeatBehavior](../environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [buttonSizing(\_:)](buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](../buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
- [ButtonRole](../buttonrole.md): A value that describes the purpose of a button.
