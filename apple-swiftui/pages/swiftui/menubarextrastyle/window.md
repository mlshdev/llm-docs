> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextrastyle/window](https://developer.apple.com/documentation/swiftui/menubarextrastyle/window)

# window

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 13.0+

A menu bar extra style that renders its contents in a popover-like window.

## Declaration

```swift
static var window: WindowMenuBarExtraStyle { get }
```

<a id="discussion"></a>

## Discussion

The styling and layout of controls is similar to that when contained in a normal window, compared to the menu-like layout that the [menu](menu.md) style provides.

## See Also

### Getting menu bar extra styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticMenuBarExtraStyle`. The default menu bar extra style.
- [menu](menu.md): Conforms when `Self` is `PullDownMenuBarExtraStyle`. A menu bar extra style that renders its contents as a menu that pulls down from the icon in the menu bar.
