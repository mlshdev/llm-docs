> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowmanagerrole(_:)](https://developer.apple.com/documentation/swiftui/scene/windowmanagerrole(_:))

# windowManagerRole(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.

## Declaration

```swift
nonisolated func windowManagerRole(_ role: WindowManagerRole) -> some Scene

```

<a id="discussion"></a>

## Discussion

By default, the type of `Scene` and its placement within the app’s definition will determine the behavior of its windows within a window management context.

You can use this modifier to override the default behaivor.

For example, you can specify that a secondary `Window` scene should use the principal behavior for full screen and Stage Manager:

```swift
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        Window("Organizer", id: "organizer") {
            OrganizerView()
        }
        .windowManagerRole(.principal)
    }
}
```

## See Also

### Managing window behavior

- [WindowManagerRole](../windowmanagerrole.md): Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.
- [WindowInteractionBehavior](../windowinteractionbehavior.md): Options for enabling and disabling window interaction behaviors.
- [windowDismissBehavior(\_:)](../view/windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](../view/windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowMinimizeBehavior(\_:)](../view/windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](../view/windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [windowBackgroundDragBehavior(\_:)](windowbackgrounddragbehavior%28__%29.md): Configures the behavior of dragging a window by its background.
- [allowsWindowActivationEvents()](../view/allowswindowactivationevents%28%29.md): Configures gestures in this view hierarchy to handle events that activate the containing window.
- [allowsWindowActivationEvents(\_:)](../view/allowswindowactivationevents%28__%29.md): Configures whether gestures in this view hierarchy can handle events that activate the containing window.
