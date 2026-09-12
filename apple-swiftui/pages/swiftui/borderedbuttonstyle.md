> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/borderedbuttonstyle](https://developer.apple.com/documentation/swiftui/borderedbuttonstyle)

# BorderedButtonStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A button style that applies standard border artwork based on the button’s context.

## Declaration

```swift
nonisolated struct BorderedButtonStyle
```

<a id="overview"></a>

## Overview

You can also use [bordered](primitivebuttonstyle/bordered.md) to construct this style.

## Topics

### Creating the button style

- [init()](borderedbuttonstyle/init%28%29.md): Creates a bordered button style.

### Supporting types

- [makeBody(configuration:)](borderedbuttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.

### Deprecated symbols

- [init(tint:)](borderedbuttonstyle/init%28tint_%29.md): Deprecated. Creates a bordered button style with a tint color.

## Relationships

### Conforms To

- [PrimitiveButtonStyle](primitivebuttonstyle.md)

## See Also

### Supporting types

- [DefaultButtonStyle](defaultbuttonstyle.md): The default button style, based on the button’s context.
- [AccessoryBarButtonStyle](accessorybarbuttonstyle.md): A button style that you use for actions in an accessory toolbar that narrow the focus of a search or other operation.
- [AccessoryBarActionButtonStyle](accessorybaractionbuttonstyle.md): A button style that you use for extra actions in an accessory toolbar.
- [BorderedProminentButtonStyle](borderedprominentbuttonstyle.md): A button style that applies standard border prominent artwork based on the button’s context.
- [BorderlessButtonStyle](borderlessbuttonstyle.md): A button style that doesn’t apply a border.
- [CardButtonStyle](cardbuttonstyle.md): A button style that doesn’t pad the content, and applies a motion effect when a button has focus.
- [LinkButtonStyle](linkbuttonstyle.md): A button style for buttons that emulate links.
- [PlainButtonStyle](plainbuttonstyle.md): A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.
