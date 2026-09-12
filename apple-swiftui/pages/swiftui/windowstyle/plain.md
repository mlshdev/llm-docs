> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowstyle/plain](https://developer.apple.com/documentation/swiftui/windowstyle/plain)

# plain

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+ · visionOS 1.0+

The plain window style.

## Declaration

```swift
@export(implementation) static var plain: PlainWindowStyle { get }
```

<a id="discussion"></a>

## Discussion

Unlike [automatic](automatic.md), a plain window does not receive a glass background in visionOS or window chrome in macOS. Use this style if you want more control over how these elements are used in your window.

## See Also

### Getting built-in window styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultWindowStyle`. The default window style.
- [hiddenTitleBar](hiddentitlebar.md): Conforms when `Self` is `HiddenTitleBarWindowStyle`. A window style which hides both the window’s title and the backing of the titlebar area, allowing more of the window’s content to show.
- [titleBar](titlebar.md): Conforms when `Self` is `TitleBarWindowStyle`. A window style which displays the title bar section of the window.
- [volumetric](volumetric.md): Conforms when `Self` is `VolumetricWindowStyle`. A window style that creates a 3D volumetric window.
