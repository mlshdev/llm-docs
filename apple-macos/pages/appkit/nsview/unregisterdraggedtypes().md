> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/unregisterdraggedtypes()](https://developer.apple.com/documentation/appkit/nsview/unregisterdraggedtypes())

# unregisterDraggedTypes() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unregisters the view as a possible destination in a dragging session.

## Declaration

```swift
func unregisterDraggedTypes()
```

## See Also

### Dragging Operations

- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSession(items:gesture:source:)](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

# unregisterDraggedTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unregisters the view as a possible destination in a dragging session.

## Declaration

```objectivec
- (void) unregisterDraggedTypes;
```

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.

### Dragging Operations

- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSessionWithItems:gesture:source:](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
