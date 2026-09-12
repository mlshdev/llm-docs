> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/touchbaritempresence](https://developer.apple.com/documentation/swiftui/touchbaritempresence)

# TouchBarItemPresence

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Options that affect user customization of the Touch Bar.

## Declaration

```swift
enum TouchBarItemPresence
```

## Topics

### Getting presence options

- [TouchBarItemPresence.default(\_:)](touchbaritempresence/default%28__%29.md): The Touch Bar view is visible by default, but can be removed during customization.
- [TouchBarItemPresence.optional(\_:)](touchbaritempresence/optional%28__%29.md): The Touch Bar view isn’t visible by default, but appears in the customization palette.
- [TouchBarItemPresence.required(\_:)](touchbaritempresence/required%28__%29.md): The Touch Bar view is visible by default and cannot be removed during customization.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Touch Bar input

- [touchBar(content:)](view/touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](view/touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](view/touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](view/touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](view/touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](touchbar.md): A container for a view that you can show in the Touch Bar.
