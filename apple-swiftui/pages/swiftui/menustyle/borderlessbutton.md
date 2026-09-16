> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/menustyle/borderlessbutton

# borderlessButton

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · tvOS 17.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A menu style that displays a borderless button that toggles the display of the menu’s contents when pressed.

> Use [menuStyle(\_:)](../view/menustyle%28__%29.md) with [button](button.md) and [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) with [borderless](../primitivebuttonstyle/borderless.md).

## Declaration

```swift
@export(implementation) nonisolated static var borderlessButton: BorderlessButtonMenuStyle { get }
```

<a id="discussion"></a>

## Discussion

On macOS, the button optionally displays an arrow indicating that it presents a menu.

Pressing and then dragging into the contents triggers the chosen action on release.

## See Also

### Getting built-in menu styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultMenuStyle`. The default menu style, based on the menu’s context.
- [button](button.md): Conforms when `Self` is `ButtonMenuStyle`. A menu style that displays a button that toggles the display of the menu’s contents when pressed.
- [borderedButton](borderedbutton.md): Deprecated. Conforms when `Self` is `BorderedButtonMenuStyle`. A menu style that displays a bordered button that toggles the display of the menu’s contents when pressed.
