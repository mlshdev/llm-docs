> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/handgestureshortcut(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/handgestureshortcut(_:isenabled:))

# handGestureShortcut(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · watchOS 11.0+

Assigns a hand gesture shortcut to the modified control.

## Declaration

```swift
nonisolated func handGestureShortcut(_ shortcut: HandGestureShortcut, isEnabled: Bool = true) -> some View

```

## Parameters

- `shortcut`: The shortcut to associate with this control.
- `isEnabled`: A Boolean value that indicates whether the shortcut is is enabled for this control.

<a id="discussion"></a>

## Discussion

Performing the control’s shortcut while the control is anywhere in the frontmost scene is equivalent to direct interaction with the control to perform its primary action.

The following example lets users of a watchOS music app toggle playback by double-tapping their thumb and index finger together:

```swift
struct PlaybackControls: View {
    let model: TrackModel

    var body: some View {
        HStack {
            Button("Skip Back") {
                model.skipBack()
            }

            Button("Play/Pause") {
                model.playPause()
            }
            .handGestureShortcut(.primaryAction)

            Button("Skip Forward") {
                model.skipForward()
            }
        }
    }
}
```

The target of a hand gesture shortcut is resolved in a leading-to-trailing traversal of the active scene.

## See Also

### Defining custom gestures

- [highPriorityGesture(\_:including:)](highprioritygesture%28__including_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:isEnabled:)](highprioritygesture%28__isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:name:isEnabled:)](highprioritygesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [defersSystemGestures(on:)](deferssystemgestures%28on_%29.md): Sets the screen edge from which you want your gesture to take precedence over the system gesture.
- [Gesture](../gesture.md): An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.
- [AnyGesture](../anygesture.md): A type-erased gesture.
- [HandActivationBehavior](../handactivationbehavior.md): An activation behavior specific to hand-driven input.
- [HandGestureShortcut](../handgestureshortcut.md): Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.
