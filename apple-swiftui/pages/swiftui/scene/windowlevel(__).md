> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowlevel(_:)](https://developer.apple.com/documentation/swiftui/scene/windowlevel(_:))

# windowLevel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Sets the window level of this scene.

## Declaration

```swift
nonisolated func windowLevel(_ level: WindowLevel) -> some Scene

```

## Parameters

- `level`: The desired window level

<a id="discussion"></a>

## Discussion

```swift
Window("Utility Window", id: "...") {
    UtilityContent()
}
.windowLevel(.floating)
```

## See Also

### Positioning a window

- [defaultPosition(\_:)](defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](../windowlevel.md): The level of a window.
- [WindowLayoutRoot](../windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](../windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](../windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](../windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](../displayproxy.md): A type which provides information about display hardware.
