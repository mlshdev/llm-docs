> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowplacement](https://developer.apple.com/documentation/swiftui/windowplacement)

# WindowPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+ · visionOS 2.0+

A type which represents a preferred size and position for a window.

## Declaration

```swift
struct WindowPlacement
```

<a id="overview"></a>

## Overview

When using the `Scene.defaultWindowPlacement(_:)` modifier, you return an instance of a `WindowPlacement` in the closure you provide.

When constructing a window placement, many initial parameters are optional. Any value not specified will fall back to the scene’s default behavior and configuration for sizing and positioning it’s windows.

For example, you can use this to position a window 140 points from the bottom of the visible area of the screen:

```swift
Window("Status", id: "status") {
    StatusView()
}
.windowResizability(.contentSize)
.defaultWindowPlacement { content, context in
    let displayBounds = context.defaultDisplay.visibleRect
    let size = content.sizeThatFits(.unspecified)
    let position = CGPoint(
        x: displayBounds.midX - (size.width / 2),
        y: displayBounds.maxY - size.height - 140)
    return WindowPlacement(position: position, size: size)
}
```

## Topics

### Structures

- [WindowPlacement.Position](windowplacement/position.md): A semantic or positional value for the location of a window.

### Initializers

- [init(\_:)](windowplacement/init%28__%29.md): Creates a new window placement with an optional position.
- [init(\_:size3D:)](windowplacement/init%28__size3d_%29.md): Creates a new window placement with an optional position and 3D size. Depth is ignored on scenes that don’t support it.
- [init(\_:size:)](windowplacement/init%28__size_%29.md): Creates a new window placement with an absolute position and optional size.
- [init(\_:width:height:)](windowplacement/init%28__width_height_%29.md): Creates a new window placement with a display-relative position, with an optional width and height.
- [init(\_:width:height:depth:)](windowplacement/init%28__width_height_depth_%29.md): Creates a new window placement with an optional position and 3D size. Depth is ignored on scenes or platforms that don’t support it.
- [init(x:y:width:height:)](windowplacement/init%28x_y_width_height_%29.md): Creates a new window placement with an optional position and size.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](windowlevel.md): The level of a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](windowlayoutroot.md): A proxy which represents the root contents of a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.
