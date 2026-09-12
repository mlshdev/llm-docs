> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessorybarbuttonstyle](https://developer.apple.com/documentation/swiftui/accessorybarbuttonstyle)

# AccessoryBarButtonStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 14.0+

A button style that you use for actions in an accessory toolbar that narrow the focus of a search or other operation.

## Declaration

```swift
nonisolated struct AccessoryBarButtonStyle
```

<a id="overview"></a>

## Overview

This is the default button style for views in accessory toolbars, which you create with [init(id:)](toolbaritemplacement/init%28id_%29.md), and for searchable scopes. This style also affects other view types that you apply a button style to, like [Toggle](toggle.md), [Picker](picker.md), and [Menu](menu.md) instances.

Use [accessoryBar](primitivebuttonstyle/accessorybar.md) to construct this style.

## Topics

### Creating the button style

- [init()](accessorybarbuttonstyle/init%28%29.md): Creates an accessory toolbar style

### Supporting types

- [makeBody(configuration:)](accessorybarbuttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.

## Relationships

### Conforms To

- [PrimitiveButtonStyle](primitivebuttonstyle.md)

## See Also

### Supporting types

- [DefaultButtonStyle](defaultbuttonstyle.md): The default button style, based on the button’s context.
- [AccessoryBarActionButtonStyle](accessorybaractionbuttonstyle.md): A button style that you use for extra actions in an accessory toolbar.
- [BorderedButtonStyle](borderedbuttonstyle.md): A button style that applies standard border artwork based on the button’s context.
- [BorderedProminentButtonStyle](borderedprominentbuttonstyle.md): A button style that applies standard border prominent artwork based on the button’s context.
- [BorderlessButtonStyle](borderlessbuttonstyle.md): A button style that doesn’t apply a border.
- [CardButtonStyle](cardbuttonstyle.md): A button style that doesn’t pad the content, and applies a motion effect when a button has focus.
- [LinkButtonStyle](linkbuttonstyle.md): A button style for buttons that emulate links.
- [PlainButtonStyle](plainbuttonstyle.md): A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
