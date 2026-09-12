> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/registereddraggedtypes](https://developer.apple.com/documentation/appkit/nsview/registereddraggedtypes)

# registeredDraggedTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of pasteboard drag types that the view can accept.

## Declaration

```swift
var registeredDraggedTypes: [NSPasteboard.PasteboardType] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which corresponds to a [Uniform Type Identifier](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/UniformTypeIdentifier.html#//apple_ref/doc/uid/TP40008195-CH60). The array elements are in no particular order, but the array is guaranteed not to contain duplicate entries. To register your view’s drag types, use the [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md) method.

## See Also

### Dragging Operations

- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSession(items:gesture:source:)](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

# registeredDraggedTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of pasteboard drag types that the view can accept.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * registeredDraggedTypes;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which corresponds to a [Uniform Type Identifier](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/UniformTypeIdentifier.html#//apple_ref/doc/uid/TP40008195-CH60). The array elements are in no particular order, but the array is guaranteed not to contain duplicate entries. To register your view’s drag types, use the [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md) method.

## See Also

### Dragging Operations

- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSessionWithItems:gesture:source:](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
