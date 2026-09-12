> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/dragpromisedfiles(oftypes:from:source:slideback:event:)](https://developer.apple.com/documentation/appkit/nsview/dragpromisedfiles(oftypes:from:source:slideback:event:))

# dragPromisedFiles(ofTypes:from:source:slideBack:event:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

> Use [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md) instead.

## Declaration

```swift
func dragPromisedFiles(ofTypes typeArray: [String], from rect: NSRect, source sourceObject: Any, slideBack flag: Bool, event: NSEvent) -> Bool
```

## Parameters

- `typeArray`: An array of file types being promised. The array elements can consist of file extensions and HFS types encoded with the [NSFileTypeForHFSTypeCode(\_:)](https://developer.apple.com/documentation/foundation/nsfiletypeforhfstypecode%28_:%29) function. If promising a directory of files, only include the top directory in the array.
- `rect`: A rectangle that describes the position of the icon in the view’s coordinate system.
- `sourceObject`: An object that serves as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol, and is typically the view itself or its [NSWindow](../nswindow.md) object.
- `flag`: A Boolean that indicates whether the icon being dragged should slide back to its position in the view if the file isn’t accepted. The icon slides back to `aRect` if `slideBack` is [true](https://developer.apple.com/documentation/swift/true), the promised files are not accepted by the dragging destination, and the user has not disabled icon animation; otherwise it simply disappears.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation is initiated successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method must be invoked only within an implementation of the [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md) method. As part of its implementation, this method invokes [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md).

Promised files are files that do not exist, yet, but that the drag source, `sourceObject`, promises to create at a file system location specified by the drag destination when the drag is successfully dropped.

See [Drag and Drop](../drag-and-drop.md) for more information on dragging operations.

## See Also

### Related Documentation

- [unregisterDraggedTypes()](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registerForDraggedTypes(\_:)](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
- [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.

### Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scroll(\_:by:)](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [shouldDrawColor()](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState()](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState()](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState()](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState()](renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.

# dragPromisedFilesOfTypes:fromRect:source:slideBack:event: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

> Use [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md) instead.

## Declaration

```objectivec
- (BOOL) dragPromisedFilesOfTypes:(NSArray<NSString *> *) typeArray fromRect:(NSRect) rect source:(id) sourceObject slideBack:(BOOL) flag event:(NSEvent *) event;
```

## Parameters

- `typeArray`: An array of file types being promised. The array elements can consist of file extensions and HFS types encoded with the [NSFileTypeForHFSTypeCode](https://developer.apple.com/documentation/foundation/nsfiletypeforhfstypecode%28_:%29) function. If promising a directory of files, only include the top directory in the array.
- `rect`: A rectangle that describes the position of the icon in the view’s coordinate system.
- `sourceObject`: An object that serves as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol, and is typically the view itself or its [NSWindow](../nswindow.md) object.
- `flag`: A Boolean that indicates whether the icon being dragged should slide back to its position in the view if the file isn’t accepted. The icon slides back to `aRect` if `slideBack` is [true](https://developer.apple.com/documentation/swift/true), the promised files are not accepted by the dragging destination, and the user has not disabled icon animation; otherwise it simply disappears.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation is initiated successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method must be invoked only within an implementation of the [mouseDown:](../nsresponder/mousedown%28with_%29.md) method. As part of its implementation, this method invokes [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md).

Promised files are files that do not exist, yet, but that the drag source, `sourceObject`, promises to create at a file system location specified by the drag destination when the drag is successfully dropped.

See [Drag and Drop](../drag-and-drop.md) for more information on dragging operations.

## See Also

### Related Documentation

- [unregisterDraggedTypes](unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.
- [registerForDraggedTypes:](registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
- [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.

### Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDrawInContext:](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scrollRect:by:](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [convertPointToBase:](convertpointtobase_.md): Deprecated. Converts the point from the view’s coordinate system to the base coordinate system.
- [convertPointFromBase:](convertpointfrombase_.md): Deprecated. Converts the point from the base coordinate system to the view’s coordinate system.
- [convertSizeToBase:](convertsizetobase_.md): Deprecated. Converts the size from the view’s coordinate system to the base coordinate system.
- [convertSizeFromBase:](convertsizefrombase_.md): Deprecated. Converts the size from the base coordinate system to the view’s coordinate system.
- [convertRectToBase:](convertrecttobase_.md): Deprecated. Converts the rectangle from the view’s coordinate system to the base coordinate system.
- [convertRectFromBase:](convertrectfrombase_.md): Deprecated. Converts the rectangle from the base coordinate system to the view’s coordinate system.
- [performMnemonic:](performmnemonic_.md): Deprecated. Implemented by subclasses to respond to mnemonics.
- [shouldDrawColor](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
