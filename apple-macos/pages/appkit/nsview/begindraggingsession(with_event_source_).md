> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/begindraggingsession(with:event:source:)](https://developer.apple.com/documentation/appkit/nsview/begindraggingsession(with:event:source:))

# beginDraggingSession(with:event:source:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Initiates a dragging session with a group of dragging items.

## Declaration

```swift
func beginDraggingSession(with items: [NSDraggingItem], event: NSEvent, source: any NSDraggingSource) -> NSDraggingSession
```

## Parameters

- `items`: The dragging items. The frame property of each `NSDraggingItem` must be in the view’s coordinate system.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.
- `source`: An object that serves as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol and is typically the view itself or its [NSWindow](../nswindow.md) object.

<a id="return-value"></a>

## Return Value

The dragging session for the drag, , or `nil` if the method can’t start the session.

<a id="Discussion"></a>

## Discussion

A basic drag starts by calling `beginDraggingSessionWithItems:event:source:`.

The caller can take the returned [NSDraggingSession](../nsdraggingsession.md) and continue to modify its properties. When the drag actually starts, the source is sent a [draggingSession(\_:willBeginAt:)](../nsdraggingsource/draggingsession%28__willbeginat_%29.md) message followed by multiple [draggingSession(\_:movedTo:)](../nsdraggingsource/draggingsession%28__movedto_%29.md) messages as the user drags.

Once the drag is ended or cancelled, the source receives a [draggingSession(\_:endedAt:operation:)](../nsdraggingsource/draggingsession%28__endedat_operation_%29.md) method and the drag is complete.

## See Also

### Dragging Operations

- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSession(items:gesture:source:)](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

# beginDraggingSessionWithItems:event:source: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Initiates a dragging session with a group of dragging items.

## Declaration

```objectivec
- (NSDraggingSession *) beginDraggingSessionWithItems:(NSArray<NSDraggingItem *> *) items event:(NSEvent *) event source:(id<NSDraggingSource>) source;
```

## Parameters

- `items`: The dragging items. The frame property of each `NSDraggingItem` must be in the view’s coordinate system.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.
- `source`: An object that serves as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol and is typically the view itself or its [NSWindow](../nswindow.md) object.

<a id="return-value"></a>

## Return Value

The dragging session for the drag, , or `nil` if the method can’t start the session.

<a id="Discussion"></a>

## Discussion

A basic drag starts by calling `beginDraggingSessionWithItems:event:source:`.

The caller can take the returned [NSDraggingSession](../nsdraggingsession.md) and continue to modify its properties. When the drag actually starts, the source is sent a [draggingSession:willBeginAtPoint:](../nsdraggingsource/draggingsession%28__willbeginat_%29.md) message followed by multiple [draggingSession:movedToPoint:](../nsdraggingsource/draggingsession%28__movedto_%29.md) messages as the user drags.

Once the drag is ended or cancelled, the source receives a [draggingSession:endedAtPoint:operation:](../nsdraggingsource/draggingsession%28__endedat_operation_%29.md) method and the drag is complete.

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.

### Dragging Operations

- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSessionWithItems:gesture:source:](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
