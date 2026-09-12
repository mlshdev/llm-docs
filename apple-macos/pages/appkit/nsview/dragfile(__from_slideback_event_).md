> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/dragfile(_:from:slideback:event:)](https://developer.apple.com/documentation/appkit/nsview/dragfile(_:from:slideback:event:))

# dragFile(\_:from:slideBack:event:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.

> Use [beginDraggingSession(with:event:source:)](begindraggingsession%28with_event_source_%29.md) instead.

## Declaration

```swift
func dragFile(_ filename: String, from rect: NSRect, slideBack flag: Bool, event: NSEvent) -> Bool
```

## Parameters

- `filename`: A string that specifies the absolute path for the file that is dragged.
- `rect`: A rectangle that describes the position of the icon in the view’s coordinate system.
- `flag`: A Boolean that indicates whether the icon being dragged should slide back to its position in the view if the file isn’t accepted. The icon slides back to `aRect` if `slideBack` is [true](https://developer.apple.com/documentation/swift/true), the file is not accepted by the dragging destination, and the user has not disabled icon animation; otherwise it simply disappears.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view successfully initiates the dragging operation (which doesn’t necessarily mean the dragging operation concluded successfully). Otherwise, this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method must be invoked only within an implementation of the [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md) method.

See the [NSDraggingSource](../nsdraggingsource.md), [NSDraggingInfo](../nsdragginginfo.md), and [NSDraggingDestination](../nsdraggingdestination.md) protocol specifications for more information on dragging operations.

## See Also

### Related Documentation

- [shouldDelayWindowOrdering(for:)](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

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
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

# dragFile:fromRect:slideBack:event: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.

> Use [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md) instead.

## Declaration

```objectivec
- (BOOL) dragFile:(NSString *) filename fromRect:(NSRect) rect slideBack:(BOOL) flag event:(NSEvent *) event;
```

## Parameters

- `filename`: A string that specifies the absolute path for the file that is dragged.
- `rect`: A rectangle that describes the position of the icon in the view’s coordinate system.
- `flag`: A Boolean that indicates whether the icon being dragged should slide back to its position in the view if the file isn’t accepted. The icon slides back to `aRect` if `slideBack` is [true](https://developer.apple.com/documentation/swift/true), the file is not accepted by the dragging destination, and the user has not disabled icon animation; otherwise it simply disappears.
- `event`: The mouse-down event object from which to initiate the drag operation. In particular, its mouse location is used for the offset of the icon being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view successfully initiates the dragging operation (which doesn’t necessarily mean the dragging operation concluded successfully). Otherwise, this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method must be invoked only within an implementation of the [mouseDown:](../nsresponder/mousedown%28with_%29.md) method.

See the [NSDraggingSource](../nsdraggingsource.md), [NSDraggingInfo](../nsdragginginfo.md), and [NSDraggingDestination](../nsdraggingdestination.md) protocol specifications for more information on dragging operations.

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.
- [shouldDelayWindowOrderingForEvent:](shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

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
