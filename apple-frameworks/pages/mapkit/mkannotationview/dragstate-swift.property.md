> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/dragstate-swift.property](https://developer.apple.com/documentation/mapkit/mkannotationview/dragstate-swift.property)

# dragState (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

The drag state of the annotation view.

## Declaration

```swift
var dragState: MKAnnotationView.DragState { get set }
```

<a id="Discussion"></a>

## Discussion

If your app runs in iOS 4.2 or later, override the [setDragState(\_:animated:)](setdragstate%28__animated_%29.md) method and use it to manage the drag state instead.

To support drag operations, override the implementation of this property and update the drag state at the following times:

- When the drag state changes to [MKAnnotationView.DragState.starting](dragstate-swift.enum/starting.md), set the state to [MKAnnotationView.DragState.dragging](dragstate-swift.enum/dragging.md). If you perform an animation to indicate the beginning of a drag, perform that animation before changing the state. Changing the state to the new value lets the map know when your animations complete.
- When the state changes to either [MKAnnotationView.DragState.canceling](dragstate-swift.enum/canceling.md) or [MKAnnotationView.DragState.ending](dragstate-swift.enum/ending.md), set the state to [MKAnnotationView.DragState.none](dragstate-swift.enum/none.md). If you perform an animation at the end of a drag, perform that animation before changing the state.

Changing the state to the [MKAnnotationView.DragState.dragging](dragstate-swift.enum/dragging.md) or [MKAnnotationView.DragState.none](dragstate-swift.enum/none.md) value is the way to signal to the map view when you finish performing animations. For example, when a drag operation begins for an annotation, the class executes an animation to lift the view off the map. Similarly, when the user drops the annotation, the class performs a drop animation. Even if you don’t perform any animations, it’s best practice to change the value of this property to reflect the correct state.

Don’t try to stop a new drag operation by changing the state from `starting` to `none`. If you don’t want your annotation view to be draggable, set the [isDraggable](isdraggable.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting drag operations

- [isDraggable](isdraggable.md): A Boolean value that indicates whether the annotation view is draggable.
- [setDragState(\_:animated:)](setdragstate%28__animated_%29.md): Sets the drag state for the annotation view.

# dragState (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

The drag state of the annotation view.

## Declaration

```objectivec
@property (nonatomic) MKAnnotationViewDragState dragState;
```

<a id="Discussion"></a>

## Discussion

If your app runs in iOS 4.2 or later, override the [setDragState:animated:](setdragstate%28__animated_%29.md) method and use it to manage the drag state instead.

To support drag operations, override the implementation of this property and update the drag state at the following times:

- When the drag state changes to [MKAnnotationViewDragStateStarting](dragstate-swift.enum/starting.md), set the state to [MKAnnotationViewDragStateDragging](dragstate-swift.enum/dragging.md). If you perform an animation to indicate the beginning of a drag, perform that animation before changing the state. Changing the state to the new value lets the map know when your animations complete.
- When the state changes to either [MKAnnotationViewDragStateCanceling](dragstate-swift.enum/canceling.md) or [MKAnnotationViewDragStateEnding](dragstate-swift.enum/ending.md), set the state to [MKAnnotationViewDragStateNone](dragstate-swift.enum/none.md). If you perform an animation at the end of a drag, perform that animation before changing the state.

Changing the state to the [MKAnnotationViewDragStateDragging](dragstate-swift.enum/dragging.md) or [MKAnnotationViewDragStateNone](dragstate-swift.enum/none.md) value is the way to signal to the map view when you finish performing animations. For example, when a drag operation begins for an annotation, the class executes an animation to lift the view off the map. Similarly, when the user drops the annotation, the class performs a drop animation. Even if you don’t perform any animations, it’s best practice to change the value of this property to reflect the correct state.

Don’t try to stop a new drag operation by changing the state from `starting` to `none`. If you don’t want your annotation view to be draggable, set the [draggable](isdraggable.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting drag operations

- [draggable](isdraggable.md): A Boolean value that indicates whether the annotation view is draggable.
- [setDragState:animated:](setdragstate%28__animated_%29.md): Sets the drag state for the annotation view.
