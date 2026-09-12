> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/windowtoolbarfullscreenvisibility(_:)](https://developer.apple.com/documentation/swiftui/view/windowtoolbarfullscreenvisibility(_:))

# windowToolbarFullScreenVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Configures the visibility of the window toolbar when the window enters full screen mode.

## Declaration

```swift
nonisolated func windowToolbarFullScreenVisibility(_ visibility: WindowToolbarFullScreenVisibility) -> some View

```

## Parameters

- `visibility`: The visibility to use for the window toolbar in full screen mode.

<a id="discussion"></a>

## Discussion

By default, the window toolbar will show at the top of the display, above the window’s contents.

You can use this modifier to override the default behavior.

For example, you can specify that the window toolbar should be hidden by default, and only show once the mouse moves into the area occupied by the menu bar:

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

## See Also

### Configuring window visibility

- [WindowVisibilityToggle](../windowvisibilitytoggle.md): A specialized button for toggling the visibility of a window.
- [defaultLaunchBehavior(\_:)](../scene/defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](../scene/restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneLaunchBehavior](../scenelaunchbehavior.md): The launch behavior for a scene.
- [SceneRestorationBehavior](../scenerestorationbehavior.md): The restoration behavior for a scene.
- [persistentSystemOverlays(\_:)](../scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [WindowToolbarFullScreenVisibility](../windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.
