> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/borderedbuttonmenustyle](https://developer.apple.com/documentation/swiftui/borderedbuttonmenustyle)

# BorderedButtonMenuStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 11.0+ (deprecated in 27.0)

A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.

> Use [menuStyle(\_:)](view/menustyle%28__%29.md) with [button](menustyle/button.md) and [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) with [bordered](primitivebuttonstyle/bordered.md).

## Declaration

```swift
nonisolated struct BorderedButtonMenuStyle
```

<a id="overview"></a>

## Overview

Use [borderedButton](menustyle/borderedbutton.md) to construct this style.

## Topics

### Creating a bordered button menu style

- [init()](borderedbuttonmenustyle/init%28%29.md): Deprecated. Creates a bordered button menu style.

## Relationships

### Conforms To

- [MenuStyle](menustyle.md)

## See Also

### Supporting types

- [DefaultMenuStyle](defaultmenustyle.md): The default menu style, based on the menu’s context.
- [ButtonMenuStyle](buttonmenustyle.md): A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [BorderlessButtonMenuStyle](borderlessbuttonmenustyle.md): Deprecated. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.
