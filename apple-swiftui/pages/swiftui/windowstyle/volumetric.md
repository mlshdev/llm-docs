> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowstyle/volumetric](https://developer.apple.com/documentation/swiftui/windowstyle/volumetric)

# volumetric

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A window style that creates a 3D volumetric window.

## Declaration

```swift
static var volumetric: VolumetricWindowStyle { get }
```

<a id="discussion"></a>

## Discussion

Use a volumetric window — or a *volume* — to display 3D content within a bounded region. For example, [Hello World](https://developer.apple.com/documentation/visionos/world) uses a volume to present a `Globe` model that people can pick up and move around the Shared Space using the window bar:

```swift
WindowGroup(id: Module.globe.name) {
    Globe()
        .environment(model)
}
.windowStyle(.volumetric)
.defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)
```

A volume enables someone to view content from all angles, unlike other windows which fade out as people move around the window. Also unlike other windows, a volume uses fixed scale, which means that objects in the volume appear smaller when the volume is farther away, like real objects would. For a comparison of fixed and dynamic scale, see [Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout) in the Human Interface Guidelines.

You can specify a size for the volume using one of the default size scene modifiers, like [defaultSize(width:height:depth:in:)](../scene/defaultsize%28width_height_depth_in_%29.md). Because volumes use fixed scale, it’s typically convenient to specify a size in physical units — like meters, as the above code demonstrates. People can’t change the size of the volume after it appears.

For design guidance, see [Windows](https://developer.apple.com/design/human-interface-guidelines/windows) in the Human Interface Guidelines. If you want to place 3D objects arbitrarily throughout the Shared Space or in a Full Space, use an [ImmersiveSpace](../immersivespace.md) instead.

## See Also

### Getting built-in window styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultWindowStyle`. The default window style.
- [hiddenTitleBar](hiddentitlebar.md): Conforms when `Self` is `HiddenTitleBarWindowStyle`. A window style which hides both the window’s title and the backing of the titlebar area, allowing more of the window’s content to show.
- [plain](plain.md): Conforms when `Self` is `PlainWindowStyle`. The plain window style.
- [titleBar](titlebar.md): Conforms when `Self` is `TitleBarWindowStyle`. A window style which displays the title bar section of the window.
