> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/primitivebuttonstyle/glass](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle/glass)

# glass

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A button style that applies a Liquid Glass effect based on the button’s context.

## Declaration

```swift
@export(implementation) nonisolated static var glass: GlassButtonStyle { get }
```

## Mentioned In

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md)

<a id="discussion"></a>

## Discussion

In tvOS, this button style applies a Liquid Glass effect regardless of whether the button has focus.

To apply this style to a button, or to a view that contains buttons, use the [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) modifier.

## See Also

### Getting built-in button styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultButtonStyle`. The default button style, based on the button’s context.
- [accessoryBar](accessorybar.md): Conforms when `Self` is `AccessoryBarButtonStyle`. A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.
- [accessoryBarAction](accessorybaraction.md): Conforms when `Self` is `AccessoryBarActionButtonStyle`. A button style that you use for extra actions in an accessory toolbar.
- [bordered](bordered.md): Conforms when `Self` is `BorderedButtonStyle`. A button style that applies the standard border style based on the button’s context.
- [borderedProminent](borderedprominent.md): Conforms when `Self` is `BorderedProminentButtonStyle`. A button style that applies the standard bordered prominent style based on the button’s context.
- [borderless](borderless.md): Conforms when `Self` is `BorderlessButtonStyle`. A button style that doesn’t apply a border.
- [card](card.md): Conforms when `Self` is `CardButtonStyle`. A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.
- [glassProminent](glassprominent.md): Conforms when `Self` is `GlassProminentButtonStyle`. A button style that applies a prominent Liquid Glass effect based on the button’s context.
- [glass(\_:)](glass%28__%29.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a configurable Liquid Glass effect based on the button’s context.
- [link](link.md): Conforms when `Self` is `LinkButtonStyle`. A button style for buttons that emulate links.
- [plain](plain.md): Conforms when `Self` is `PlainButtonStyle`. A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
