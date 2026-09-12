> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowlevel](https://developer.apple.com/documentation/swiftui/windowlevel)

# WindowLevel

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

The level of a window.

## Declaration

```swift
struct WindowLevel
```

<a id="overview"></a>

## Overview

Use this in conjunction with the `.windowLevel(_:)` modifier to control window levels.

## Topics

### Type Properties

- [automatic](windowlevel/automatic.md): Automatic window level.
- [desktop](windowlevel/desktop.md): Desktop window level.
- [floating](windowlevel/floating.md): Floating window level.
- [normal](windowlevel/normal.md): Normal window level.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.
