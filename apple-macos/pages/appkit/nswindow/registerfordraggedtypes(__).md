> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/registerfordraggedtypes(_:)](https://developer.apple.com/documentation/appkit/nswindow/registerfordraggedtypes(_:))

# registerForDraggedTypes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.

## Declaration

```swift
func registerForDraggedTypes(_ newTypes: [NSPasteboard.PasteboardType])
```

## Parameters

- `newTypes`: An array of the pasteboard types the window accepts as the destination of an image-dragging session.

<a id="Discussion"></a>

## Discussion

Registering an `NSWindow` object for dragged types automatically makes it a candidate destination object for a dragging session. `NSWindow` has a default implementation for many of the methods in the [NSDraggingDestination](../nsdraggingdestination.md) protocol. The default implementation forwards each message to the delegate if the delegate responds to the selector of the message. The messages forwarded this way are [draggingEntered(\_:)](../nsdraggingdestination/draggingentered%28__%29.md), [draggingUpdated(\_:)](../nsdraggingdestination/draggingupdated%28__%29.md), [draggingExited(\_:)](../nsdraggingdestination/draggingexited%28__%29.md), [prepareForDragOperation(\_:)](../nsdraggingdestination/preparefordragoperation%28__%29.md), [performDragOperation(\_:)](../nsdraggingdestination/performdragoperation%28__%29.md), and [concludeDragOperation(\_:)](../nsdraggingdestination/concludedragoperation%28__%29.md).

## See Also

### Dragging Items

- [drag(\_:at:offset:event:pasteboard:source:slideBack:)](drag%28__at_offset_event_pasteboard_source_slideback_%29.md): Deprecated. Begins a dragging session.
- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.

# registerForDraggedTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.

## Declaration

```objectivec
- (void) registerForDraggedTypes:(NSArray<NSString *> *) newTypes;
```

## Parameters

- `newTypes`: An array of the pasteboard types the window accepts as the destination of an image-dragging session.

<a id="Discussion"></a>

## Discussion

Registering an `NSWindow` object for dragged types automatically makes it a candidate destination object for a dragging session. `NSWindow` has a default implementation for many of the methods in the [NSDraggingDestination](../nsdraggingdestination.md) protocol. The default implementation forwards each message to the delegate if the delegate responds to the selector of the message. The messages forwarded this way are [draggingEntered:](../nsdraggingdestination/draggingentered%28__%29.md), [draggingUpdated:](../nsdraggingdestination/draggingupdated%28__%29.md), [draggingExited:](../nsdraggingdestination/draggingexited%28__%29.md), [prepareForDragOperation:](../nsdraggingdestination/preparefordragoperation%28__%29.md), [performDragOperation:](../nsdraggingdestination/performdragoperation%28__%29.md), and [concludeDragOperation:](../nsdraggingdestination/concludedragoperation%28__%29.md).

## See Also

### Dragging Items

- [dragImage:at:offset:event:pasteboard:source:slideBack:](drag%28__at_offset_event_pasteboard_source_slideback_%29.md): Deprecated. Begins a dragging session.
- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.
