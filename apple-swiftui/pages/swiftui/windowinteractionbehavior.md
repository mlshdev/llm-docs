> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowinteractionbehavior](https://developer.apple.com/documentation/swiftui/windowinteractionbehavior)

# WindowInteractionBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

Options for enabling and disabling window interaction behaviors.

## Declaration

```swift
struct WindowInteractionBehavior
```

<a id="overview"></a>

## Overview

Use values of this type in conjunction with the following view and scene modifiers to adjust the supported functionality for the window:

- [windowDismissBehavior(\_:)](view/windowdismissbehavior%28__%29.md)
- [windowMinimizeBehavior(\_:)](view/windowminimizebehavior%28__%29.md)
- [windowFullScreenBehavior(\_:)](view/windowfullscreenbehavior%28__%29.md)
- [windowResizeBehavior(\_:)](view/windowresizebehavior%28__%29.md)
- [windowBackgroundDragBehavior(\_:)](scene/windowbackgrounddragbehavior%28__%29.md)

For example, you can create a custom “About” window which only allows for dismissal:

```swift
struct MyApp: App {
    var body: some Scene {
        ...
        Window("About MyApp", id: "about") {
            AboutView()
                .windowMinimizeBehavior(.disabled)
                .windowResizeBehavior(.disabled)
        }
        .windowResizability(.contentSize)
    }
}
```

## Topics

### Type Properties

- [automatic](windowinteractionbehavior/automatic.md): The automatic behavior. The associated window behavior will be enabled or disabled depending on the configuration of the enclosing `Scene`.
- [disabled](windowinteractionbehavior/disabled.md): The disabled behavior. The associated window interaction behavior will be disabled.
- [enabled](windowinteractionbehavior/enabled.md): The enabled behavior. The associated window interaction behavior will be enabled.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing window behavior

- [WindowManagerRole](windowmanagerrole.md): Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.
- [windowManagerRole(\_:)](scene/windowmanagerrole%28__%29.md): Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.
- [windowDismissBehavior(\_:)](view/windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](view/windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowMinimizeBehavior(\_:)](view/windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](view/windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [windowBackgroundDragBehavior(\_:)](scene/windowbackgrounddragbehavior%28__%29.md): Configures the behavior of dragging a window by its background.
- [allowsWindowActivationEvents()](view/allowswindowactivationevents%28%29.md): Configures gestures in this view hierarchy to handle events that activate the containing window.
- [allowsWindowActivationEvents(\_:)](view/allowswindowactivationevents%28__%29.md): Configures whether gestures in this view hierarchy can handle events that activate the containing window.
