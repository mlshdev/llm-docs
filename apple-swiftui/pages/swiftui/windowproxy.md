> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowproxy](https://developer.apple.com/documentation/swiftui/windowproxy)

# WindowProxy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The proxy for an open window in the app.

## Declaration

```swift
struct WindowProxy
```

## Topics

### Instance Properties

- [id](windowproxy/id.md): The ID for the window, if one was provided.
- [phase](windowproxy/phase.md): The window’s current [ScenePhase](scenephase.md).

## See Also

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](windowlevel.md): The level of a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.
