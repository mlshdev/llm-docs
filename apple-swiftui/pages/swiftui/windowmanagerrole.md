> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowmanagerrole](https://developer.apple.com/documentation/swiftui/windowmanagerrole)

# WindowManagerRole

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.

## Declaration

```swift
struct WindowManagerRole
```

<a id="overview"></a>

## Overview

Use values of this type in conjunction with the [windowManagerRole(\_:)](scene/windowmanagerrole%28__%29.md) modifier to override the default system behavior.

For example, you can specify that a secondary `Window` scene should use the principal role for full screen and Stage Manager:

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

## Topics

### Type Properties

- [associated](windowmanagerrole/associated.md): The associated role. Windows derived from this scene can be shown alongside windows with a `.principal` role in either full screen or Stage Manager, but do not participate in those modes on their own.
- [automatic](windowmanagerrole/automatic.md): The automatic role. The type and configuration of the scene will be used to determine how its windows behave in full screen and Stage Manager.
- [principal](windowmanagerrole/principal.md): The principal role. Windows derived from this scene will show in full screen, if enabled, or in Stage Manager.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing window behavior

- [windowManagerRole(\_:)](scene/windowmanagerrole%28__%29.md): Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.
- [WindowInteractionBehavior](windowinteractionbehavior.md): Options for enabling and disabling window interaction behaviors.
- [windowDismissBehavior(\_:)](view/windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](view/windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowMinimizeBehavior(\_:)](view/windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](view/windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [windowBackgroundDragBehavior(\_:)](scene/windowbackgrounddragbehavior%28__%29.md): Configures the behavior of dragging a window by its background.
- [allowsWindowActivationEvents()](view/allowswindowactivationevents%28%29.md): Configures gestures in this view hierarchy to handle events that activate the containing window.
- [allowsWindowActivationEvents(\_:)](view/allowswindowactivationevents%28__%29.md): Configures whether gestures in this view hierarchy can handle events that activate the containing window.
