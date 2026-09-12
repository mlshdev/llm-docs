> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/gesture(_:)](https://developer.apple.com/documentation/swiftui/view/gesture(_:))

# gesture(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Attaches an [NSGestureRecognizerRepresentable](../nsgesturerecognizerrepresentable.md) to the view.

## Declaration

```swift
nonisolated func gesture(_ representable: some NSGestureRecognizerRepresentable) -> some View

```

## Parameters

- `representable`: The [NSGestureRecognizerRepresentable](../nsgesturerecognizerrepresentable.md) that creates and manages a gesture recognizer.

<a id="return-value"></a>

## Return Value

A view with an [NSGestureRecognizerRepresentable](../nsgesturerecognizerrepresentable.md) attached.

## See Also

### Recognizing gestures that change over time

- [gesture(\_:isEnabled:)](gesture%28__isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:name:isEnabled:)](gesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:including:)](gesture%28__including_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [DragGesture](../draggesture.md): A dragging motion that invokes an action as the drag-event sequence changes.
- [WindowDragGesture](../windowdraggesture.md): A gesture that recognizes the motion of and handles dragging a window.
- [MagnifyGesture](../magnifygesture.md): A gesture that recognizes a magnification motion and tracks the amount of magnification.
- [RotateGesture](../rotategesture.md): A gesture that recognizes a rotation motion and tracks the angle of the rotation.
- [RotateGesture3D](../rotategesture3d.md): A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.
- [GestureMask](../gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
