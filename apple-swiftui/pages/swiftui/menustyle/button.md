> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyle/button](https://developer.apple.com/documentation/swiftui/menustyle/button)

# button

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

A menu style that displays a button that toggles the display of the menu’s contents when pressed.

## Declaration

```swift
@export(implementation) nonisolated static var button: ButtonMenuStyle { get }
```

<a id="discussion"></a>

## Discussion

On macOS, the button displays an arrow to indicate that it presents a menu.

Pressing and then dragging into the contents activates the selected action on release.

## See Also

### Getting built-in menu styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultMenuStyle`. The default menu style, based on the menu’s context.
- [borderedButton](borderedbutton.md): Deprecated. Conforms when `Self` is `BorderedButtonMenuStyle`. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.
- [borderlessButton](borderlessbutton.md): Deprecated. Conforms when `Self` is `BorderlessButtonMenuStyle`. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.
