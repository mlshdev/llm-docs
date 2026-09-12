> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowstyle/titlebar](https://developer.apple.com/documentation/swiftui/windowstyle/titlebar)

# titleBar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 11.0+

A window style which displays the title bar section of the window.

## Declaration

```swift
@export(implementation) static var titleBar: TitleBarWindowStyle { get }
```

## See Also

### Getting built-in window styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultWindowStyle`. The default window style.
- [hiddenTitleBar](hiddentitlebar.md): Conforms when `Self` is `HiddenTitleBarWindowStyle`. A window style which hides both the window’s title and the backing of the titlebar area, allowing more of the window’s content to show.
- [plain](plain.md): Conforms when `Self` is `PlainWindowStyle`. The plain window style.
- [volumetric](volumetric.md): Conforms when `Self` is `VolumetricWindowStyle`. A window style that creates a 3D volumetric window.
