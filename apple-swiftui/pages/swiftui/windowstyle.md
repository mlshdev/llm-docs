> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowstyle](https://developer.apple.com/documentation/swiftui/windowstyle)

# WindowStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 11.0+ · visionOS 1.0+

A specification for the appearance and interaction of a window.

## Declaration

```swift
protocol WindowStyle
```

## Topics

### Getting built-in window styles

- [automatic](windowstyle/automatic.md): Conforms when `Self` is `DefaultWindowStyle`. The default window style.
- [hiddenTitleBar](windowstyle/hiddentitlebar.md): Conforms when `Self` is `HiddenTitleBarWindowStyle`. A window style which hides both the window’s title and the backing of the titlebar area, allowing more of the window’s content to show.
- [plain](windowstyle/plain.md): Conforms when `Self` is `PlainWindowStyle`. The plain window style.
- [titleBar](windowstyle/titlebar.md): Conforms when `Self` is `TitleBarWindowStyle`. A window style which displays the title bar section of the window.
- [volumetric](windowstyle/volumetric.md): Conforms when `Self` is `VolumetricWindowStyle`. A window style that creates a 3D volumetric window.

### Supporting types

- [DefaultWindowStyle](defaultwindowstyle.md): The default window style.
- [HiddenTitleBarWindowStyle](hiddentitlebarwindowstyle.md): A window style which hides both the window’s title and the backing of the titlebar area, allowing more of the window’s content to show.
- [PlainWindowStyle](plainwindowstyle.md): The plain window style.
- [TitleBarWindowStyle](titlebarwindowstyle.md): A window style which displays the title bar section of the window.
- [VolumetricWindowStyle](volumetricwindowstyle.md): A window style that creates a 3D volumetric window.

## Relationships

### Conforming Types

- [DefaultWindowStyle](defaultwindowstyle.md)
- [HiddenTitleBarWindowStyle](hiddentitlebarwindowstyle.md)
- [PlainWindowStyle](plainwindowstyle.md)
- [TitleBarWindowStyle](titlebarwindowstyle.md)
- [VolumetricWindowStyle](volumetricwindowstyle.md)

## See Also

### Creating windows

- [WindowGroup](windowgroup.md): A scene that presents a group of identically structured windows.
- [Window](window.md): A scene that presents its content in a single, unique window.
- [UtilityWindow](utilitywindow.md): A specialized window scene that provides secondary utility to the content of the main scenes of an application.
- [windowStyle(\_:)](scene/windowstyle%28__%29.md): Sets the style for windows created by this scene.
