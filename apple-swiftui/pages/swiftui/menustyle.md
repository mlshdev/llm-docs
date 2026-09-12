> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyle](https://developer.apple.com/documentation/swiftui/menustyle)

# MenuStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

A type that applies standard interaction behavior and a custom appearance to all menus within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol MenuStyle
```

<a id="overview"></a>

## Overview

To configure the current menu style for a view hierarchy, use the [menuStyle(\_:)](view/menustyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in menu styles

- [automatic](menustyle/automatic.md): Conforms when `Self` is `DefaultMenuStyle`. The default menu style, based on the menu’s context.
- [button](menustyle/button.md): Conforms when `Self` is `ButtonMenuStyle`. A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [borderedButton](menustyle/borderedbutton.md): Deprecated. Conforms when `Self` is `BorderedButtonMenuStyle`. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.
- [borderlessButton](menustyle/borderlessbutton.md): Deprecated. Conforms when `Self` is `BorderlessButtonMenuStyle`. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.

### Creating custom menu styles

- [makeBody(configuration:)](menustyle/makebody%28configuration_%29.md): Creates a view that represents the body of a menu.
- [MenuStyle.Configuration](menustyle/configuration.md): The properties of a menu.
- [Body](menustyle/body.md): A view that represents the body of a menu.

### Supporting types

- [DefaultMenuStyle](defaultmenustyle.md): The default menu style, based on the menu’s context.
- [ButtonMenuStyle](buttonmenustyle.md): A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [BorderlessButtonMenuStyle](borderlessbuttonmenustyle.md): Deprecated. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.
- [BorderedButtonMenuStyle](borderedbuttonmenustyle.md): Deprecated. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.

## Relationships

### Conforming Types

- [BorderedButtonMenuStyle](borderedbuttonmenustyle.md)
- [BorderlessButtonMenuStyle](borderlessbuttonmenustyle.md)
- [ButtonMenuStyle](buttonmenustyle.md)
- [DefaultMenuStyle](defaultmenustyle.md)

## See Also

### Styling menus

- [menuStyle(\_:)](view/menustyle%28__%29.md): Sets the style for menus within this view.
- [MenuStyleConfiguration](menustyleconfiguration.md): A configuration of a menu.
