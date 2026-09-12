> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture](https://developer.apple.com/documentation/swiftui/rotategesture)

# RotateGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A gesture that recognizes a rotation motion and tracks the angle of the rotation.

## Declaration

```swift
nonisolated struct RotateGesture
```

<a id="overview"></a>

## Overview

A rotate gesture tracks how a rotation event sequence changes. To recognize a rotate gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier.

Add a rotate gesture to a [Rectangle](rectangle.md) and apply a rotation effect:

```swift
struct RotateGestureView: View {
    @State private var angle = Angle(degrees: 0.0)

    var rotation: some Gesture {
        RotateGesture()
            .onChanged { value in
                angle = value.rotation
            }
    }

    var body: some View {
        Rectangle()
            .frame(width: 200, height: 200, alignment: .center)
            .rotationEffect(angle)
            .gesture(rotation)
    }
}
```

## Topics

### Creating the gesture

- [init(minimumAngleDelta:)](rotategesture/init%28minimumangledelta_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start.
- [init(minimumAngleDelta:inputKinds:)](rotategesture/init%28minimumangledelta_inputkinds_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start, and the input kinds the gesture recognizes.
- [minimumAngleDelta](rotategesture/minimumangledelta.md): The minimum delta required before the gesture succeeds.

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
- [MagnifyGesture](magnifygesture.md): A gesture that recognizes a magnification motion and tracks the amount of magnification.
- [RotateGesture3D](rotategesture3d.md): A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.
- [GestureMask](gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
