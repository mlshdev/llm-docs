> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyleconfiguration](https://developer.apple.com/documentation/swiftui/menustyleconfiguration)

# MenuStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

A configuration of a menu.

## Declaration

```swift
struct MenuStyleConfiguration
```

<a id="overview"></a>

## Overview

Use the [init(\_:)](menu/init%28__%29.md) initializer of [Menu](menu.md) to create an instance using the current menu style, which you can modify to create a custom style.

For example, the following code creates a new, custom style that adds a red border to the current menu style:

```swift
struct RedBorderMenuStyle: MenuStyle {
    func makeBody(configuration: Configuration) -> some View {
        Menu(configuration)
            .border(Color.red)
    }
}
```

## Topics

### Setting the label and content

- [MenuStyleConfiguration.Label](menustyleconfiguration/label.md): A type-erased label of a menu.
- [MenuStyleConfiguration.Content](menustyleconfiguration/content.md): A type-erased content of a menu.

## See Also

### Styling menus

- [menuStyle(\_:)](view/menustyle%28__%29.md): Sets the style for menus within this view.
- [MenuStyle](menustyle.md): A type that applies standard interaction behavior and a custom appearance to all menus within a view hierarchy.
