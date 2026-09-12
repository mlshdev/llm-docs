> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenelaunchbehavior](https://developer.apple.com/documentation/swiftui/scenelaunchbehavior)

# SceneLaunchBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+ · visionOS 26.0+

The launch behavior for a scene.

## Declaration

```swift
struct SceneLaunchBehavior
```

<a id="overview"></a>

## Overview

Use the [defaultLaunchBehavior(\_:)](scene/defaultlaunchbehavior%28__%29.md) modifier to apply a value of this type to a [Scene](scene.md) you specify in your [App](app.md). The value you specify determines how the system will present the scene in the absense of any previously restored scenes on launch of your application.

For example, you may wish to present a welcome window on launch of your app when there are no previous document windows being restored:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: MyDocument()) { configuration in
            DocumentEditor(configuration.$document)
        }

        Window("Welcome to My App", id: "welcome") {
            WelcomeView()
        }
        .defaultLaunchBehavior(.presented)
    }
}
```

## Topics

### Type Properties

- [automatic](scenelaunchbehavior/automatic.md): The automatic behavior.
- [presented](scenelaunchbehavior/presented.md): The presented behavior. The scene will present itself in the absence of any previously restored scenes.
- [suppressed](scenelaunchbehavior/suppressed.md): The suppressed behavior. The scene will not present itself in the absence of any previously restored scenes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring window visibility

- [WindowVisibilityToggle](windowvisibilitytoggle.md): A specialized button for toggling the visibility of a window.
- [defaultLaunchBehavior(\_:)](scene/defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](scene/restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneRestorationBehavior](scenerestorationbehavior.md): The restoration behavior for a scene.
- [persistentSystemOverlays(\_:)](scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [WindowToolbarFullScreenVisibility](windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.
