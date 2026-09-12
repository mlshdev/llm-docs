> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenerestorationbehavior](https://developer.apple.com/documentation/swiftui/scenerestorationbehavior)

# SceneRestorationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The restoration behavior for a scene.

## Declaration

```swift
struct SceneRestorationBehavior
```

<a id="overview"></a>

## Overview

Use the [restorationBehavior(\_:)](scene/restorationbehavior%28__%29.md) scene modifier to apply a value of this type to a [Scene](scene.md) you define in your [App](app.md) declaration. The value you specify determines how the system will restore windows from a previous run of your application.

For example, you may have a scene that you do not wish to be restored on launch:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        Window(id: "network-test", "Network Connection Test") {
            NetworkTestView()
        }
        .restorationBehavior(.disabled)
    }
}
```

## Topics

### Type Properties

- [automatic](scenerestorationbehavior/automatic.md): The automatic behavior. The scene’s windows will be restored as defined by the underlying platform.
- [disabled](scenerestorationbehavior/disabled.md): The disabled behavior. The scene’s windows will not be restored.

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
- [persistentSystemOverlays(\_:)](scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [WindowToolbarFullScreenVisibility](windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.
