> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture3d](https://developer.apple.com/documentation/swiftui/rotategesture3d)

# RotateGesture3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.

## Declaration

```swift
nonisolated struct RotateGesture3D
```

<a id="overview"></a>

## Overview

You can constrain this gesture to recognize rotation about a specific 3D axis. For example, `RotateGesture3D(constrainedToAxis: .x)` creates a gesture that recognizes rotation only around the global X axis. The axis you provide will be normalized.

A rotation gesture tracks how a rotation event sequence changes. To recognize a rotation gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier.

## Topics

### Creating the gesture

- [init(constrainedToAxis:minimumAngleDelta:)](rotategesture3d/init%28constrainedtoaxis_minimumangledelta_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start and axis to constrain measurement of rotation.
- [init(constrainedToAxis:minimumAngleDelta:inputKinds:)](rotategesture3d/init%28constrainedtoaxis_minimumangledelta_inputkinds_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start, an axis to constrain measurement of rotation, and the input kinds the gesture should recognize.
- [minimumAngleDelta](rotategesture3d/minimumangledelta.md): The minimum angle delta before the gesture becomes active.
- [constrainedAxis](rotategesture3d/constrainedaxis.md): An axis around which the rotation is constrained.

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
- [RotateGesture](rotategesture.md): A gesture that recognizes a rotation motion and tracks the angle of the rotation.
- [GestureMask](gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
