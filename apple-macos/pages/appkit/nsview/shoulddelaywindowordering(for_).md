> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/shoulddelaywindowordering(for:)](https://developer.apple.com/documentation/appkit/nsview/shoulddelaywindowordering(for:))

# shouldDelayWindowOrdering(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

## Declaration

```swift
func shouldDelayWindowOrdering(for event: NSEvent) -> Bool
```

## Parameters

- `event`: An object representing an initial mouse-down event.

<a id="return-value"></a>

## Return Value

If this method returns [true](https://developer.apple.com/documentation/swift/true), the normal window-ordering and activation mechanism is delayed (not necessarily prevented) until the next mouse-up event. If it returns [false](https://developer.apple.com/documentation/swift/false), then normal ordering and activation occur.

<a id="Discussion"></a>

## Discussion

Never invoke this method directly; it’s invoked automatically for each mouse-down event directed at the NSView.

An `NSView` subclass that allows dragging should implement this method to return [true](https://developer.apple.com/documentation/swift/true) if `theEvent` is potentially the beginning of a dragging session or of some other context where window ordering isn’t appropriate. This method is invoked before a [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md) message for `theEvent` is sent. The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

If, after delaying window ordering, the view actually initiates a dragging session or similar operation, it should also send a [preventWindowOrdering()](../nsapplication/preventwindowordering%28%29.md) message to `NSApp`, which completely prevents the window from ordering forward and the activation from becoming active. [preventWindowOrdering()](../nsapplication/preventwindowordering%28%29.md) is sent automatically by the `dragImage:` and `dragFile:` methods of `NSView`.

## See Also

### Dragging Operations

- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSession(items:gesture:source:)](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.

# shouldDelayWindowOrderingForEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

## Declaration

```objectivec
- (BOOL) shouldDelayWindowOrderingForEvent:(NSEvent *) event;
```

## Parameters

- `event`: An object representing an initial mouse-down event.

<a id="return-value"></a>

## Return Value

If this method returns [true](https://developer.apple.com/documentation/swift/true), the normal window-ordering and activation mechanism is delayed (not necessarily prevented) until the next mouse-up event. If it returns [false](https://developer.apple.com/documentation/swift/false), then normal ordering and activation occur.

<a id="Discussion"></a>

## Discussion

Never invoke this method directly; it’s invoked automatically for each mouse-down event directed at the NSView.

An `NSView` subclass that allows dragging should implement this method to return [true](https://developer.apple.com/documentation/swift/true) if `theEvent` is potentially the beginning of a dragging session or of some other context where window ordering isn’t appropriate. This method is invoked before a [mouseDown:](../nsresponder/mousedown%28with_%29.md) message for `theEvent` is sent. The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

If, after delaying window ordering, the view actually initiates a dragging session or similar operation, it should also send a [preventWindowOrdering](../nsapplication/preventwindowordering%28%29.md) message to `NSApp`, which completely prevents the window from ordering forward and the activation from becoming active. [preventWindowOrdering](../nsapplication/preventwindowordering%28%29.md) is sent automatically by the `dragImage:` and `dragFile:` methods of `NSView`.

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.

### Dragging Operations

- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSessionWithItems:gesture:source:](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
