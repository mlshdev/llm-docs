> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowidealsize(_:)](https://developer.apple.com/documentation/swiftui/scene/windowidealsize(_:))

# windowIdealSize(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Specifies how windows derived form this scene should determine their size when zooming.

## Declaration

```swift
nonisolated func windowIdealSize(_ idealSize: WindowIdealSize) -> some Scene

```

## Parameters

- `idealSize`: A value which determines how windows derived from this scene should size themselves when zooming.

<a id="discussion"></a>

## Discussion

The default behavior will size the window to its maximum size, or the bounds of the display, whichever is smaller. By overriding this behavior, you can provide a size that is appropriate for the contents of your window.

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

## See Also

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(\_:)](defaultsize%28__%29.md): Sets a default size for a window.
- [defaultSize(width:height:)](defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(\_:in:)](defaultsize%28__in_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [windowResizability(\_:)](windowresizability%28__%29.md): Sets the kind of resizability to use for a window.
- [WindowResizability](../windowresizability.md): The resizability of a window.
- [WindowIdealSize](../windowidealsize.md): A type which defines the size a window should use when zooming.
