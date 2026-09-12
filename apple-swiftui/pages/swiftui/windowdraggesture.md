> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowdraggesture](https://developer.apple.com/documentation/swiftui/windowdraggesture)

# WindowDragGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

A gesture that recognizes the motion of and handles dragging a window.

## Declaration

```swift
nonisolated struct WindowDragGesture
```

<a id="overview"></a>

## Overview

To recognize a window drag gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:isEnabled:)](view/gesture%28__isenabled_%29.md) modifier. Consider also letting the gesture [handle events that activate the containing window](view/allowswindowactivationevents%28__%29.md) so that dragging the containing window works even when it’s inactive.

To add a window drag gesture to a [Circle](circle.md) and change its color while a user performs the window drag gesture:

```swift
struct MyView: View {
    @GestureState var isDraggingWindow = false

    var dragWindow: some Gesture {
        WindowDragGesture()
            .updating($isDraggingWindow) { _, state, _ in
                state = true
            }
    }

    var body: some View {
        Circle()
            .fill(isDraggingWindow ? Color.green : .blue)
            .frame(width: 50, height: 50)
            .gesture(dragWindow)
            .allowsWindowActivationEvents()
    }
}
```

## Topics

### Creating a window drag gesture

- [init()](windowdraggesture/init%28%29.md): Creates a window drag gesture.

### Getting the gesture’s value

- [WindowDragGesture.Value](windowdraggesture/value.md): The properties of a window drag gesture.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Recognizing gestures that change over time

- [gesture(\_:)](view/gesture%28__%29.md): Attaches an [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md) to the view.
- [gesture(\_:isEnabled:)](view/gesture%28__isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:name:isEnabled:)](view/gesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:including:)](view/gesture%28__including_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [DragGesture](draggesture.md): A dragging motion that invokes an action as the drag-event sequence changes.
- [MagnifyGesture](magnifygesture.md): A gesture that recognizes a magnification motion and tracks the amount of magnification.
- [RotateGesture](rotategesture.md): A gesture that recognizes a rotation motion and tracks the angle of the rotation.
- [RotateGesture3D](rotategesture3d.md): A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.
- [GestureMask](gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
