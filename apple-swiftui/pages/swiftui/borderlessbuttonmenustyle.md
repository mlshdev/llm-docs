> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/borderlessbuttonmenustyle](https://developer.apple.com/documentation/swiftui/borderlessbuttonmenustyle)

# BorderlessButtonMenuStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.

> Use [menuStyle(\_:)](view/menustyle%28__%29.md) with [button](menustyle/button.md) and [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) with [borderless](primitivebuttonstyle/borderless.md).

## Declaration

```swift
nonisolated struct BorderlessButtonMenuStyle
```

<a id="overview"></a>

## Overview

Use [borderlessButton](menustyle/borderlessbutton.md) to construct this style.

## Topics

### Creating a bordeless button menu style

- [init()](borderlessbuttonmenustyle/init%28%29.md): Deprecated. Creates a borderless button menu style.
- [init(showsMenuIndicator:)](borderlessbuttonmenustyle/init%28showsmenuindicator_%29.md): Deprecated. Creates a borderless button menu style, specifying whether to show a visual menu indicator.

## Relationships

### Conforms To

- [MenuStyle](menustyle.md)

## See Also

### Supporting types

- [DefaultMenuStyle](defaultmenustyle.md): The default menu style, based on the menu’s context.
- [ButtonMenuStyle](buttonmenustyle.md): A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [BorderedButtonMenuStyle](borderedbuttonmenustyle.md): Deprecated. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.
