> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/touchbar](https://developer.apple.com/documentation/swiftui/touchbar)

# TouchBar

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+

A container for a view that you can show in the Touch Bar.

## Declaration

```swift
struct TouchBar<Content> where Content : View
```

## Topics

### Creating a Touch Bar view

- [init(content:)](touchbar/init%28content_%29.md): Creates a non-customizable Touch Bar view container.
- [init(id:content:)](touchbar/init%28id_content_%29.md): Creates a customizable Touch Bar view container with a globally unique identifier.

## See Also

### Managing Touch Bar input

- [touchBar(content:)](view/touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](view/touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](view/touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](view/touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](view/touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBarItemPresence](touchbaritempresence.md): Options that affect user customization of the Touch Bar.
