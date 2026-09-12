> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowidealsize](https://developer.apple.com/documentation/swiftui/windowidealsize)

# WindowIdealSize

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

A type which defines the size a window should use when zooming.

## Declaration

```swift
struct WindowIdealSize
```

<a id="overview"></a>

## Overview

Use this type in conjunction with the `Scene.windowIdealSize(_:)` modifier to override the default behavior for how windows behave when performing a zoom.

For example, you can define a window group where the window has an ideal width of 800 points and an ideal height of 600 points:

```swift
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(idealWidth: 800, idealHeight: 600)
        }
        .windowIdealSize(.fitToContent)
    }
}
```

## Topics

### Type Properties

- [automatic](windowidealsize/automatic.md): The automatic window ideal size. Windows will use the system behavior when determining the size to use when zooming.
- [fitToContent](windowidealsize/fittocontent.md): A window ideal size which uses the ideal size of the window’s contents.
- [maximum](windowidealsize/maximum.md): A window ideal size which uses the maximum size of the window’s contents.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(\_:)](scene/defaultsize%28__%29.md): Sets a default size for a window.
- [defaultSize(width:height:)](scene/defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](scene/defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(\_:in:)](scene/defaultsize%28__in_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](scene/defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [windowResizability(\_:)](scene/windowresizability%28__%29.md): Sets the kind of resizability to use for a window.
- [WindowResizability](windowresizability.md): The resizability of a window.
- [windowIdealSize(\_:)](scene/windowidealsize%28__%29.md): Specifies how windows derived form this scene should determine their size when zooming.
