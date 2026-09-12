> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/defaultsize(_:in:)](https://developer.apple.com/documentation/swiftui/scene/defaultsize(_:in:))

# defaultSize(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Sets a default size for a volumetric window.

## Declaration

```swift
nonisolated func defaultSize(_ size: Size3D, in unit: UnitLength) -> some Scene

```

## Parameters

- `unit`: The unit of length the dimensions of the window are specified in.

<a id="return-value"></a>

## Return Value

A scene that uses a default size for new windows.

<a id="discussion"></a>

## Discussion

Use this modifier to indicate the default initial size for a new 3D window created from a [Scene](../scene.md) using [VolumetricWindowStyle](../volumetricwindowstyle.md):

```swift
WindowGroup {
    ContentView()
}
.windowStyle(.volumetric)
.defaultSize(Size3D(width: 1, height: 1, depth: 0.5), in: .meters)
```

Each parameter is specified in the unit you provide. The size of a volumetric scene is immutable after creation.

This modifier affects only windows that have the volumetric style in visionOS.

## See Also

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(\_:)](defaultsize%28__%29.md): Sets a default size for a window.
- [defaultSize(width:height:)](defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [windowResizability(\_:)](windowresizability%28__%29.md): Sets the kind of resizability to use for a window.
- [WindowResizability](../windowresizability.md): The resizability of a window.
- [windowIdealSize(\_:)](windowidealsize%28__%29.md): Specifies how windows derived form this scene should determine their size when zooming.
- [WindowIdealSize](../windowidealsize.md): A type which defines the size a window should use when zooming.
