> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/persistentsystemoverlays(_:)](https://developer.apple.com/documentation/swiftui/scene/persistentsystemoverlays(_:))

# persistentSystemOverlays(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the preferred visibility of the non-transient system views overlaying the app.

## Declaration

```swift
nonisolated func persistentSystemOverlays(_ preferredVisibility: Visibility) -> some Scene

```

## Parameters

- `preferredVisibility`: A value that indicates the visibility of the non-transient system views overlaying the app.

<a id="discussion"></a>

## Discussion

Use this modifier to influence the appearance of system overlays in your app. The behavior varies by platform.

In iOS, the following example hides every persistent system overlay. In visionOS 2 and later, the SharePlay Indicator hides if the scene is shared through SharePlay, or not shared at all. During screen sharing, the indicator always remains visible. The Home indicator doesn’t appear without specific user intent when you set visibility to `hidden`. For a [WindowGroup](../windowgroup.md), the modifier affects the visibility of the window chrome. For an [ImmersiveSpace](../immersivespace.md), it affects the Home indicator.

```swift
struct ImmersiveView: View {
    var body: some View {
        Text("Maximum immersion")
            .persistentSystemOverlays(.hidden)
    }
}
```

> **Note**

> You can indicate a preference with this modifier, but the system might or might not be able to honor that preference.

Affected non-transient system views can include, but are not limited to:

- The Home indicator.
- The SharePlay indicator.
- The Multitasking Controls button and Picture in Picture on iPad.

## See Also

### Configuring window visibility

- [WindowVisibilityToggle](../windowvisibilitytoggle.md): A specialized button for toggling the visibility of a window.
- [defaultLaunchBehavior(\_:)](defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneLaunchBehavior](../scenelaunchbehavior.md): The launch behavior for a scene.
- [SceneRestorationBehavior](../scenerestorationbehavior.md): The restoration behavior for a scene.
- [windowToolbarFullScreenVisibility(\_:)](../view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [WindowToolbarFullScreenVisibility](../windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.
