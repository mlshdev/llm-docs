> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubutton](https://developer.apple.com/documentation/swiftui/menubutton)

# MenuButton

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A button that displays a menu containing a list of choices when pressed.

> Use [Menu](menu.md) instead.

## Declaration

```swift
nonisolated struct MenuButton<Label, Content> where Label : View, Content : View
```

## Topics

### Creating a menu button

- [init(\_:content:)](menubutton/init%28__content_%29.md): Deprecated. Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu button with the specified localized title and content.
- [init(label:content:)](menubutton/init%28label_content_%29.md): Deprecated. Creates a menu button with the specified label and content.

### Styling a menu button

- [menuButtonStyle(\_:)](view/menubuttonstyle%28__%29.md): Deprecated. Sets the style for menu buttons within this view.
- [MenuButtonStyle](menubuttonstyle.md): Deprecated. A custom specification for the appearance and interaction of a menu button.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Deprecated types

- [PullDownButton](pulldownbutton.md): Deprecated.
- [ContextMenu](contextmenu.md): Deprecated. A container for views that you present as menu items in a context menu.
