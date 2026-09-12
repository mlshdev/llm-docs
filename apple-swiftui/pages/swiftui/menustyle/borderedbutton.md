> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyle/borderedbutton](https://developer.apple.com/documentation/swiftui/menustyle/borderedbutton)

# borderedButton

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 11.0+ (deprecated in 27.0)

A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.

> Use [menuStyle(\_:)](../view/menustyle%28__%29.md) with [button](button.md) and [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) with [bordered](../primitivebuttonstyle/bordered.md).

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var borderedButton: BorderedButtonMenuStyle { get }
```

<a id="discussion"></a>

## Discussion

On macOS, the button displays an arrow indicating that it presents a menu.

Pressing and then dragging into the contents triggers the chosen action on release.

## See Also

### Getting built-in menu styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultMenuStyle`. The default menu style, based on the menu’s context.
- [button](button.md): Conforms when `Self` is `ButtonMenuStyle`. A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [borderlessButton](borderlessbutton.md): Deprecated. Conforms when `Self` is `BorderlessButtonMenuStyle`. A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.
