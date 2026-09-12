> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/windowfullscreenbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/windowfullscreenbehavior(_:))

# windowFullScreenBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Configures the full screen functionality for the window enclosing `self`.

## Declaration

```swift
nonisolated func windowFullScreenBehavior(_ behavior: WindowInteractionBehavior) -> some View

```

## Parameters

- `behavior`: The full screen behavior.

<a id="discussion"></a>

## Discussion

By default, the window full screen functionality is determined by the scene, as well as any modifiers applied to it. Additionally, when using the [windowResizability(\_:)](../scene/windowresizability%28__%29.md) modifier, the maximum size of the window’s contents will also determine whether a window can be made full screen.

You can use this modifier to override the default behavior.

For example, you can specify that a window cannot enter full screen mode:

```swift
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .windowFullScreenBehavior(.disabled)
        }
    }
}
```

## See Also

### Managing window behavior

- [WindowManagerRole](../windowmanagerrole.md): Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.
- [windowManagerRole(\_:)](../scene/windowmanagerrole%28__%29.md): Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.
- [WindowInteractionBehavior](../windowinteractionbehavior.md): Options for enabling and disabling window interaction behaviors.
- [windowDismissBehavior(\_:)](windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowMinimizeBehavior(\_:)](windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [windowBackgroundDragBehavior(\_:)](../scene/windowbackgrounddragbehavior%28__%29.md): Configures the behavior of dragging a window by its background.
- [allowsWindowActivationEvents()](allowswindowactivationevents%28%29.md): Configures gestures in this view hierarchy to handle events that activate the containing window.
- [allowsWindowActivationEvents(\_:)](allowswindowactivationevents%28__%29.md): Configures whether gestures in this view hierarchy can handle events that activate the containing window.
