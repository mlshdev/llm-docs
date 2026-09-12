> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyle/automatic](https://developer.apple.com/documentation/swiftui/menustyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The default menu style, based on the menu’s context.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var automatic: DefaultMenuStyle { get }
```

<a id="discussion"></a>

## Discussion

The default menu style can vary by platform. By default, macOS uses the bordered button style.

If you create a menu inside a container, the style resolves to the recommended style for menus inside that container for that specific platform. For example, a menu nested within another menu will resolve to a submenu:

```swift
Menu("Edit") {
    Menu("Arrange") {
        Button("Bring to Front", action: moveSelectionToFront)
        Button("Send to Back", action: moveSelectionToBack)
    }
    Button("Delete", action: deleteSelection)
}
```

You can override a menu’s style. To apply the default style to a menu, or to a view that contains a menu, use the [menuStyle(\_:)](../view/menustyle%28__%29.md) modifier.

## See Also

### Getting built-in menu styles

- [button](button.md): Conforms when `Self` is `ButtonMenuStyle`. A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [borderedButton](borderedbutton.md): Deprecated. Conforms when `Self` is `BorderedButtonMenuStyle`. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.
- [borderlessButton](borderlessbutton.md): Deprecated. Conforms when `Self` is `BorderlessButtonMenuStyle`. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.
