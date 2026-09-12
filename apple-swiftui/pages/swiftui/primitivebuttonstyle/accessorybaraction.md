> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/primitivebuttonstyle/accessorybaraction](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle/accessorybaraction)

# accessoryBarAction

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 14.0+

A button style that you use for extra actions in an accessory toolbar.

## Declaration

```swift
@MainActor @preconcurrency static var accessoryBarAction: AccessoryBarActionButtonStyle { get }
```

<a id="discussion"></a>

## Discussion

Use this style for buttons that perform extra actions relative to the accessory toolbar’s main functions, like adding or editing filters. This style also affects other view types that you apply a button style to, like [Toggle](../toggle.md), [Picker](../picker.md), and [Menu](../menu.md) instances.

## See Also

### Getting built-in button styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultButtonStyle`. The default button style, based on the button’s context.
- [accessoryBar](accessorybar.md): Conforms when `Self` is `AccessoryBarButtonStyle`. A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.
- [bordered](bordered.md): Conforms when `Self` is `BorderedButtonStyle`. A button style that applies the standard border style based on the button’s context.
- [borderedProminent](borderedprominent.md): Conforms when `Self` is `BorderedProminentButtonStyle`. A button style that applies the standard bordered prominent style based on the button’s context.
- [borderless](borderless.md): Conforms when `Self` is `BorderlessButtonStyle`. A button style that doesn’t apply a border.
- [card](card.md): Conforms when `Self` is `CardButtonStyle`. A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.
- [glass](glass.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a Liquid Glass effect based on the button’s context.
- [glassProminent](glassprominent.md): Conforms when `Self` is `GlassProminentButtonStyle`. A button style that applies a prominent Liquid Glass effect based on the button’s context.
- [glass(\_:)](glass%28__%29.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a configurable Liquid Glass effect based on the button’s context.
- [link](link.md): Conforms when `Self` is `LinkButtonStyle`. A button style for buttons that emulate links.
- [plain](plain.md): Conforms when `Self` is `PlainButtonStyle`. A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
