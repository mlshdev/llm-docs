> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture](https://developer.apple.com/documentation/swiftui/draggesture)

# DragGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A dragging motion that invokes an action as the drag-event sequence changes.

## Declaration

```swift
@MainActor @preconcurrency struct DragGesture
```

## Mentioned In

- [Composing SwiftUI gestures](composing-swiftui-gestures.md)

<a id="overview"></a>

## Overview

To recognize a drag gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier.

Add a drag gesture to a [Circle](circle.md) and change its color while the user performs the drag gesture:

```swift
struct DragGestureView: View {
    @State private var isDragging = false

    var drag: some Gesture {
        DragGesture()
            .onChanged { _ in self.isDragging = true }
            .onEnded { _ in self.isDragging = false }
    }

    var body: some View {
        Circle()
            .fill(self.isDragging ? Color.red : Color.blue)
            .frame(width: 100, height: 100, alignment: .center)
            .gesture(drag)
    }
}
```

## Topics

### Creating a drag gesture

- [init(minimumDistance:coordinateSpace:)](draggesture/init%28minimumdistance_coordinatespace_%29-8ffe5.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:)](draggesture/init%28minimumdistance_coordinatespace_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace3D:)](draggesture/init%28minimumdistance_coordinatespace3d_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:inputKinds:)](draggesture/init%28minimumdistance_coordinatespace_inputkinds_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [minimumDistance](draggesture/minimumdistance.md): The minimum dragging distance before the gesture succeeds.
- [coordinateSpace](draggesture/coordinatespace.md): The coordinate space in which to receive location values.

### Getting the gesture’s value

- [DragGesture.Value](draggesture/value.md): The attributes of a drag gesture.

### Deprecated initializers

- [init(minimumDistance:coordinateSpace:)](draggesture/init%28minimumdistance_coordinatespace_%29-3804h.md): Deprecated. Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Recognizing gestures that change over time

- [gesture(\_:)](view/gesture%28__%29.md): Attaches an [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md) to the view.
- [gesture(\_:isEnabled:)](view/gesture%28__isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:name:isEnabled:)](view/gesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [gesture(\_:including:)](view/gesture%28__including_%29.md): Attaches a gesture to the view with a lower precedence than gestures defined by the view.
- [WindowDragGesture](windowdraggesture.md): A gesture that recognizes the motion of and handles dragging a window.
- [MagnifyGesture](magnifygesture.md): A gesture that recognizes a magnification motion and tracks the amount of magnification.
- [RotateGesture](rotategesture.md): A gesture that recognizes a rotation motion and tracks the angle of the rotation.
- [RotateGesture3D](rotategesture3d.md): A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.
- [GestureMask](gesturemask.md): Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.
