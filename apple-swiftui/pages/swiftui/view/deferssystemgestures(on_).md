> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/deferssystemgestures(on:)](https://developer.apple.com/documentation/swiftui/view/deferssystemgestures(on:))

# defersSystemGestures(on:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the screen edge from which you want your gesture to take precedence over the system gesture.

## Declaration

```swift
nonisolated func defersSystemGestures(on edges: Edge.Set) -> some View

```

## Parameters

- `edges`: A value that indicates the screen edge from which you want your gesture to take precedence over the system gesture.

<a id="discussion"></a>

## Discussion

The following code defers the vertical screen edges system gestures of a given canvas.

```swift
struct DeferredView: View {
    var body: some View {
        Canvas()
            .defersSystemGestures(on: .vertical)
    }
}
```

## See Also

### Defining custom gestures

- [highPriorityGesture(\_:including:)](highprioritygesture%28__including_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:isEnabled:)](highprioritygesture%28__isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:name:isEnabled:)](highprioritygesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [handGestureShortcut(\_:isEnabled:)](handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [Gesture](../gesture.md): An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.
- [AnyGesture](../anygesture.md): A type-erased gesture.
- [HandActivationBehavior](../handactivationbehavior.md): An activation behavior specific to hand-driven input.
- [HandGestureShortcut](../handgestureshortcut.md): Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.
