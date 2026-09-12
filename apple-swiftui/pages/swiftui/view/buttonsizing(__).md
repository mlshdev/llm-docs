> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/buttonsizing(_:)](https://developer.apple.com/documentation/swiftui/view/buttonsizing(_:))

# buttonSizing(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The preferred sizing behavior of buttons in the view hierarchy.

## Declaration

```swift
nonisolated func buttonSizing(_ sizing: ButtonSizing) -> some View

```

## Parameters

- `sizing`: A button sizing behavior that may be used to influence the primary axis size of buttons capable of adapting to it.

<a id="discussion"></a>

## Discussion

Views may use the specified button sizing when determining the size they choose to be in their primary axis within their parent view’s proposed size.

Many built-in controls that display as a button adapt to this view modifier. For example, you can make certain styles of [Button](../button.md), [Picker](../picker.md), [ControlGroup](../controlgroup.md), and [Toggle](../toggle.md) flexible by applying this modifier to them or their container.

This example creates a button that spans the width of its container, which you may want to do if the button is placed in a narrow context, like the sidebar of a welcome window.

```swift
Button("Open Document…", action: openDocument)
    .buttonSizing(.flexible)
```

Your own views and styles can adapt to this view modifier by reading the [buttonSizing](../environmentvalues/buttonsizing.md) environment value and applying an appropriate frame.

```swift
struct CustomButtonStyle: ButtonStyle {
    @Environment(\.buttonSizing) private var buttonSizing

    private var maxWidth: CGFloat {
        switch buttonSizing {
        case .flexible: .infinity
        case .fitted, _: nil
        }
    }

    func makeBody(configuration: Configuration) -> some View {
        configuration.content
            .frame(maxWidth: maxWidth)
            .background(.tint, in: Capsule())
    }
}
```

## See Also

### Creating buttons

- [Button](../button.md): A control that initiates an action.
- [buttonStyle(\_:)](buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonBorderShape(\_:)](buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [ButtonBorderShape](../buttonbordershape.md): A shape used to draw a button’s border.
- [buttonRepeatBehavior(\_:)](buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [ButtonRepeatBehavior](../buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonRepeatBehavior](../environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [ButtonSizing](../buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
- [ButtonRole](../buttonrole.md): A value that describes the purpose of a button.
