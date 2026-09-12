> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/defaultsize(_:)](https://developer.apple.com/documentation/swiftui/scene/defaultsize(_:))

# defaultSize(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

Sets a default size for a window.

## Declaration

```swift
nonisolated func defaultSize(_ size: CGSize) -> some Scene

```

## Parameters

- `size`: The default size for new windows created from a scene.

<a id="return-value"></a>

## Return Value

A scene that uses a default size for new windows.

<a id="discussion"></a>

## Discussion

Use this scene modifier to indicate a default initial size for a new window that the system creates from a [Scene](../scene.md) declaration. For example, you can request that new windows that a [WindowGroup](../windowgroup.md) generates occupy 600 points in the x-dimension and 400 points in the y-dimension:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .defaultSize(CGSize(width: 600, height: 400))
    }
}
```

The size that you specify acts only as a default for when the window first appears. People can later resize the window using interface controls that the system provides. Also, during state restoration, the system restores windows to their most recent size rather than the default size.

If you specify a default size that’s outside the range of the window’s inherent resizability in one or both dimensions, the system clamps the affected dimension to keep it in range. You can configure the resizability of a scene using the [windowResizability(\_:)](windowresizability%28__%29.md) modifier.

The default size modifier affects any scene type that creates windows in macOS, namely:

- [WindowGroup](../windowgroup.md)
- [Window](../window.md)
- [DocumentGroup](../documentgroup.md)
- [Settings](../settings.md)

If you want to specify the input directly in terms of width and height, use [defaultSize(width:height:)](defaultsize%28width_height_%29.md) instead.

## See Also

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(width:height:)](defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(\_:in:)](defaultsize%28__in_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [windowResizability(\_:)](windowresizability%28__%29.md): Sets the kind of resizability to use for a window.
- [WindowResizability](../windowresizability.md): The resizability of a window.
- [windowIdealSize(\_:)](windowidealsize%28__%29.md): Specifies how windows derived form this scene should determine their size when zooming.
- [WindowIdealSize](../windowidealsize.md): A type which defines the size a window should use when zooming.
