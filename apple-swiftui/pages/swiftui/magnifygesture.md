> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/magnifygesture](https://developer.apple.com/documentation/swiftui/magnifygesture)

# MagnifyGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A gesture that recognizes a magnification motion and tracks the amount of magnification.

## Declaration

```swift
nonisolated struct MagnifyGesture
```

<a id="overview"></a>

## Overview

A magnify gesture tracks how a magnification event sequence changes. To recognize a magnify gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier.

Add a magnify gesture to a [Circle](circle.md) that changes its size while the user performs the gesture:

```swift
struct MagnifyGestureView: View {
    @GestureState private var magnifyBy = 1.0

    var magnification: some Gesture {
        MagnifyGesture()
            .updating($magnifyBy) { value, gestureState, transaction in
                gestureState = value.magnification
            }
    }

    var body: some View {
        Circle()
            .frame(width: 100, height: 100)
            .scaleEffect(magnifyBy)
            .gesture(magnification)
    }
}
```

## Topics

### Creating the gesture

- [init(minimumScaleDelta:)](magnifygesture/init%28minimumscaledelta_%29.md): Creates a magnify gesture with a given minimum delta for the gesture to start.
- [init(minimumScaleDelta:inputKinds:)](magnifygesture/init%28minimumscaledelta_inputkinds_%29.md): Creates a magnify gesture with a given minimum delta for the gesture to start, and the input kinds the gesture recognizes.
- [minimumScaleDelta](magnifygesture/minimumscaledelta.md): The minimum required delta before the gesture starts.

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
- [WindowDragGesture](windowdraggesture.md): A gesture that recognizes the motion of and handles dragging a window.
- [RotateGesture](rotategesture.md): A gesture that recognizes a rotation motion and tracks the angle of the rotation.
- [RotateGesture3D](rotategesture3d.md): A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.
- [GestureMask](gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
