> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/drag(_:at:offset:event:pasteboard:source:slideback:)](https://developer.apple.com/documentation/appkit/nswindow/drag(_:at:offset:event:pasteboard:source:slideback:))

# drag(\_:at:offset:event:pasteboard:source:slideBack:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Begins a dragging session.

> Use -\[NSWindow beginDraggingSessionWithItems:event:source:\] instead.

## Declaration

```swift
func drag(_ image: NSImage, at baseLocation: NSPoint, offset initialOffset: NSSize, event: NSEvent, pasteboard pboard: NSPasteboard, source sourceObj: Any, slideBack slideFlag: Bool)
```

## Parameters

- `image`: The object to be dragged.
- `baseLocation`: Location of the image’s bottom-left corner in the window’s coordinate system. It determines the placement of the dragged image under the pointer.
- `initialOffset`: The pointer’s location relative to the mouse-down location. Not used in macOS 10.4 and later.
- `event`: The left-mouse down event that triggered the dragging operation.
- `pboard`: The pasteboard that holds the data to be transferred to the destination.
- `sourceObj`: The object serving as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol.
- `slideFlag`: Specifies whether the drag image should slide back to `baseLocation` if it’s rejected by the drag destination. Pass [true](https://developer.apple.com/documentation/swift/true) to specify slide back behavior or [false](https://developer.apple.com/documentation/swift/false) to specify that it should not.

<a id="Discussion"></a>

## Discussion

This method should be invoked only from within a view’s implementation of the [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md) or [mouseDragged(with:)](../nsresponder/mousedragged%28with_%29.md) methods (which overrides the version defined in `NSResponder` class). Essentially the same as the `NSView` method of the same name, except that `baseLocation` is given in the `NSWindow` object’s base coordinate system.

## See Also

### Dragging Items

- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.
- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.

# dragImage:at:offset:event:pasteboard:source:slideBack: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Begins a dragging session.

> Use -\[NSWindow beginDraggingSessionWithItems:event:source:\] instead.

## Declaration

```objectivec
- (void) dragImage:(NSImage *) image at:(NSPoint) baseLocation offset:(NSSize) initialOffset event:(NSEvent *) event pasteboard:(NSPasteboard *) pboard source:(id) sourceObj slideBack:(BOOL) slideFlag;
```

## Parameters

- `image`: The object to be dragged.
- `baseLocation`: Location of the image’s bottom-left corner in the window’s coordinate system. It determines the placement of the dragged image under the pointer.
- `initialOffset`: The pointer’s location relative to the mouse-down location. Not used in macOS 10.4 and later.
- `event`: The left-mouse down event that triggered the dragging operation.
- `pboard`: The pasteboard that holds the data to be transferred to the destination.
- `sourceObj`: The object serving as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol.
- `slideFlag`: Specifies whether the drag image should slide back to `baseLocation` if it’s rejected by the drag destination. Pass [true](https://developer.apple.com/documentation/swift/true) to specify slide back behavior or [false](https://developer.apple.com/documentation/swift/false) to specify that it should not.

<a id="Discussion"></a>

## Discussion

This method should be invoked only from within a view’s implementation of the [mouseDown:](../nsresponder/mousedown%28with_%29.md) or [mouseDragged:](../nsresponder/mousedragged%28with_%29.md) methods (which overrides the version defined in `NSResponder` class). Essentially the same as the `NSView` method of the same name, except that `baseLocation` is given in the `NSWindow` object’s base coordinate system.

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](../nsview/dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.

### Dragging Items

- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.
- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.
