> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextrastyle](https://developer.apple.com/documentation/swiftui/menubarextrastyle)

# MenuBarExtraStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 13.0+

A specification for the appearance and behavior of a menu bar extra scene.

## Declaration

```swift
protocol MenuBarExtraStyle
```

## Topics

### Getting menu bar extra styles

- [automatic](menubarextrastyle/automatic.md): Conforms when `Self` is `AutomaticMenuBarExtraStyle`. The default menu bar extra style.
- [menu](menubarextrastyle/menu.md): Conforms when `Self` is `PullDownMenuBarExtraStyle`. A menu bar extra style that renders its contents as a menu that pulls down from the icon in the menu bar.
- [window](menubarextrastyle/window.md): Conforms when `Self` is `WindowMenuBarExtraStyle`. A menu bar extra style that renders its contents in a popover-like window.

### Supporting types

- [AutomaticMenuBarExtraStyle](automaticmenubarextrastyle.md): The default menu bar extra style. You can also use [automatic](menubarextrastyle/automatic.md) to construct this style.
- [PullDownMenuBarExtraStyle](pulldownmenubarextrastyle.md): A menu bar extra style that renders its contents as a menu that pulls down from the icon in the menu bar.
- [WindowMenuBarExtraStyle](windowmenubarextrastyle.md): A menu bar extra style that renders its contents in a popover-like window.

## Relationships

### Conforming Types

- [AutomaticMenuBarExtraStyle](automaticmenubarextrastyle.md)
- [PullDownMenuBarExtraStyle](pulldownmenubarextrastyle.md)
- [WindowMenuBarExtraStyle](windowmenubarextrastyle.md)

## See Also

### Creating a menu bar extra

- [MenuBarExtra](menubarextra.md): A scene that renders itself as a persistent control in the system menu bar.
- [menuBarExtraStyle(\_:)](scene/menubarextrastyle%28__%29.md): Sets the style for menu bar extra created by this scene.
