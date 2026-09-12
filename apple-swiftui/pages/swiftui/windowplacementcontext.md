> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowplacementcontext](https://developer.apple.com/documentation/swiftui/windowplacementcontext)

# WindowPlacementContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+ · visionOS 2.0+

A type which represents contextual information used for sizing and positioning windows.

## Declaration

```swift
struct WindowPlacementContext
```

<a id="overview"></a>

## Overview

The placement context provides information to be used when providing a new placement via the closure provided to the `defaultWindowPlacement(_:)` modifier.

## Topics

### Instance Properties

- [defaultDisplay](windowplacementcontext/defaultdisplay.md): The display on which new windows will be presented by default.
- [windows](windowplacementcontext/windows.md): The list of current active scenes

## See Also

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](windowlevel.md): The level of a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowProxy](windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.
