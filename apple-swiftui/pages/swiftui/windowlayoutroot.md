> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowlayoutroot](https://developer.apple.com/documentation/swiftui/windowlayoutroot)

# WindowLayoutRoot

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+ · visionOS 2.0+

A proxy which represents the root contents of a window.

## Declaration

```swift
struct WindowLayoutRoot
```

<a id="overview"></a>

## Overview

This type acts like a proxy for the contents of the window defined by a SwiftUI [Scene](scene.md). The `Scene.defaultWindowPlacement(_:)` modifier receives an instance of this type, representing the contents of the window being created.

Use this proxy to get information about the window’s contents, like it’s size.

## Topics

### Instance Methods

- [sizeThatFits(\_:)](windowlayoutroot/sizethatfits%28__%29.md): Asks the window’s content for its size.

## See Also

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](windowlevel.md): The level of a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowPlacement](windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.
