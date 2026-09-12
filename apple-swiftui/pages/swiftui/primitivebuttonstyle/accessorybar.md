> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/primitivebuttonstyle/accessorybar](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle/accessorybar)

# accessoryBar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 14.0+

A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.

## Declaration

```swift
@MainActor @preconcurrency static var accessoryBar: AccessoryBarButtonStyle { get }
```

<a id="discussion"></a>

## Discussion

This is the default button style for views in accessory toolbars, created with `ToolbarItemPlacement.init(id:_)`, and for searchable scopes.

This style will also affect button style `Toggle`s, as well as button style `Picker`s and `Menu`s.

```swift
HStack(alignment: .firstTextBaseline) {
    Button("Button") {}

    Toggle("Toggle", isOn: $isToggleOn)
        .toggleStyle(.button)

    Picker("Picker", selection: $selection) {
        Text("Option 1").tag(0)
        Text("Option 2").tag(1)
    }

    Picker("Inline Picker", selection: $selection) {
        Text("Option 1").tag(0)
        Text("Option 2").tag(1)
    }
    .pickerStyle(.inline)

    Menu("Menu") {
        Button("Item") {}
    }
}
.buttonStyle(.accessoryBar)
```

## See Also

### Getting built-in button styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultButtonStyle`. The default button style, based on the button’s context.
- [accessoryBarAction](accessorybaraction.md): Conforms when `Self` is `AccessoryBarActionButtonStyle`. A button style that you use for extra actions in an accessory toolbar.
- [bordered](bordered.md): Conforms when `Self` is `BorderedButtonStyle`. A button style that applies the standard border style based on the button’s context.
- [borderedProminent](borderedprominent.md): Conforms when `Self` is `BorderedProminentButtonStyle`. A button style that applies the standard bordered prominent style based on the button’s context.
- [borderless](borderless.md): Conforms when `Self` is `BorderlessButtonStyle`. A button style that doesn’t apply a border.
- [card](card.md): Conforms when `Self` is `CardButtonStyle`. A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.
- [glass](glass.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a Liquid Glass effect based on the button’s context.
- [glassProminent](glassprominent.md): Conforms when `Self` is `GlassProminentButtonStyle`. A button style that applies a prominent Liquid Glass effect based on the button’s context.
- [glass(\_:)](glass%28__%29.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a configurable Liquid Glass effect based on the button’s context.
- [link](link.md): Conforms when `Self` is `LinkButtonStyle`. A button style for buttons that emulate links.
- [plain](plain.md): Conforms when `Self` is `PlainButtonStyle`. A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
