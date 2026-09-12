> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/registerfordraggedtypes(_:)](https://developer.apple.com/documentation/appkit/nsview/registerfordraggedtypes(_:))

# registerForDraggedTypes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers the pasteboard types that the view will accept as the destination of an image-dragging session.

## Declaration

```swift
func registerForDraggedTypes(_ newTypes: [NSPasteboard.PasteboardType])
```

## Parameters

- `newTypes`: An array of [Uniform Type Identifier](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/UniformTypeIdentifier.html#//apple_ref/doc/uid/TP40008195-CH60). See [System-Declared Uniform Type Identifiers](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259) for descriptions of the pasteboard type identifiers.

<a id="Discussion"></a>

## Discussion

Registering an `NSView` object for dragged types automatically makes it a candidate destination object for a dragging session. As such, it must properly implement some or all of the `NSDraggingDestination` protocol methods. As a convenience, `NSView` provides default implementations of these methods. See the [NSDraggingDestination](../nsdraggingdestination.md) protocol specification for details.

## See Also

### Dragging Operations

- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSession(items:gesture:source:)](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

# registerForDraggedTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers the pasteboard types that the view will accept as the destination of an image-dragging session.

## Declaration

```objectivec
- (void) registerForDraggedTypes:(NSArray<NSString *> *) newTypes;
```

## Parameters

- `newTypes`: An array of [Uniform Type Identifier](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/UniformTypeIdentifier.html#//apple_ref/doc/uid/TP40008195-CH60). See [System-Declared Uniform Type Identifiers](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259) for descriptions of the pasteboard type identifiers.

<a id="Discussion"></a>

## Discussion

Registering an `NSView` object for dragged types automatically makes it a candidate destination object for a dragging session. As such, it must properly implement some or all of the `NSDraggingDestination` protocol methods. As a convenience, `NSView` provides default implementations of these methods. See the [NSDraggingDestination](../nsdraggingdestination.md) protocol specification for details.

## See Also

### Dragging Operations

- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSessionWithItems:gesture:source:](begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
