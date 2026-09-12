> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/cardbuttonstyle](https://developer.apple.com/documentation/swiftui/cardbuttonstyle)

# CardButtonStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** tvOS 14.0+

A button style that doesn’t pad the content, and applies a motion effect when a button has focus.

## Declaration

```swift
nonisolated struct CardButtonStyle
```

<a id="overview"></a>

## Overview

You can also use [card](primitivebuttonstyle/card.md) to construct this style.

## Topics

### Creating the button style

- [init()](cardbuttonstyle/init%28%29.md): Creates a style that doesn’t pad a button’s content and applies a motion effect to a focused button.

### Supporting types

- [makeBody(configuration:)](cardbuttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.

## Relationships

### Conforms To

- [PrimitiveButtonStyle](primitivebuttonstyle.md)

## See Also

### Related Documentation

- [TVCardView](https://developer.apple.com/documentation/tvuikit/tvcardview): A view that responds to focus interaction with a motion effect it applies to all of its subviews.

### Supporting types

- [DefaultButtonStyle](defaultbuttonstyle.md): The default button style, based on the button’s context.
- [AccessoryBarButtonStyle](accessorybarbuttonstyle.md): A button style that you use for actions in an accessory toolbar that narrow the focus of a search or other operation.
- [AccessoryBarActionButtonStyle](accessorybaractionbuttonstyle.md): A button style that you use for extra actions in an accessory toolbar.
- [BorderedButtonStyle](borderedbuttonstyle.md): A button style that applies standard border artwork based on the button’s context.
- [BorderedProminentButtonStyle](borderedprominentbuttonstyle.md): A button style that applies standard border prominent artwork based on the button’s context.
- [BorderlessButtonStyle](borderlessbuttonstyle.md): A button style that doesn’t apply a border.
- [LinkButtonStyle](linkbuttonstyle.md): A button style for buttons that emulate links.
- [PlainButtonStyle](plainbuttonstyle.md): A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
