> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowtoolbarfullscreenvisibility](https://developer.apple.com/documentation/swiftui/windowtoolbarfullscreenvisibility)

# WindowToolbarFullScreenVisibility

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The visibility of the window toolbar with respect to full screen mode.

## Declaration

```swift
struct WindowToolbarFullScreenVisibility
```

<a id="overview"></a>

## Overview

Use values of this type in conjunction with the [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md) modifier to configure how the window toolbar displays itself when the window enters full screen mode.

For example, you can specify that the window toolbar should be hidden by default, and only show when the mouse moves into the area occupied by the menu bar:

```swift
struct RootView: View {
    var body: some View {
        ContentView()
            .toolbar {
                ...
            }
            .windowToolbarFullScreenVisibility(.onHover)
    }
}
```

## Topics

### Type Properties

- [automatic](windowtoolbarfullscreenvisibility/automatic.md): The window toolbar visibility will be defined by the system default behavior.
- [onHover](windowtoolbarfullscreenvisibility/onhover.md): Hide the window toolbar in full screen mode by default. It will reveal itself when the mouse moves into the area occupied by the menu bar.
- [visible](windowtoolbarfullscreenvisibility/visible.md): Prefer to show window toolbar when the window is in full screen mode.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring window visibility

- [WindowVisibilityToggle](windowvisibilitytoggle.md): A specialized button for toggling the visibility of a window.
- [defaultLaunchBehavior(\_:)](scene/defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](scene/restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneLaunchBehavior](scenelaunchbehavior.md): The launch behavior for a scene.
- [SceneRestorationBehavior](scenerestorationbehavior.md): The restoration behavior for a scene.
- [persistentSystemOverlays(\_:)](scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
