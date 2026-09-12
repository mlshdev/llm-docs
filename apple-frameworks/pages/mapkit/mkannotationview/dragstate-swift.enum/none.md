> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/dragstate-swift.enum/none](https://developer.apple.com/documentation/mapkit/mkannotationview/dragstate-swift.enum/none)

# MKAnnotationView.DragState.none (Swift)

**Framework:** MapKit  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

An annotation view that doesn’t have a drag operation.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

The view isn’t involved in a drag operation. The annotation view is responsible for returning itself to this state when a drag ends or cancels.

## See Also

### Constants

- [MKAnnotationView.DragState.starting](starting.md): An annotation view begins dragging.
- [MKAnnotationView.DragState.dragging](dragging.md): An annotation view is actively dragging.
- [MKAnnotationView.DragState.canceling](canceling.md): An annotation view cancels drag operation.
- [MKAnnotationView.DragState.ending](ending.md): An annotation view ends dragging.

# MKAnnotationViewDragStateNone (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

An annotation view that doesn’t have a drag operation.

## Declaration

```objectivec
MKAnnotationViewDragStateNone
```

<a id="Discussion"></a>

## Discussion

The view isn’t involved in a drag operation. The annotation view is responsible for returning itself to this state when a drag ends or cancels.

## See Also

### Constants

- [MKAnnotationViewDragStateStarting](starting.md): An annotation view begins dragging.
- [MKAnnotationViewDragStateDragging](dragging.md): An annotation view is actively dragging.
- [MKAnnotationViewDragStateCanceling](canceling.md): An annotation view cancels drag operation.
- [MKAnnotationViewDragStateEnding](ending.md): An annotation view ends dragging.
