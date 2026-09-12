> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/dragimage:at:offset:event:pasteboard:source:slideback:](https://developer.apple.com/documentation/appkit/nsview/dragimage:at:offset:event:pasteboard:source:slideback:)

# dragImage:at:offset:event:pasteboard:source:slideBack:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.

> Use [beginDraggingSessionWithItems:event:source:](begindraggingsession%28with_event_source_%29.md) instead.

## Declaration

```objectivec
- (void) dragImage:(NSImage *) image at:(NSPoint) viewLocation offset:(NSSize) initialOffset event:(NSEvent *) event pasteboard:(NSPasteboard *) pboard source:(id) sourceObj slideBack:(BOOL) slideFlag;
```

## Parameters

- `image`: The [NSImage](../nsimage.md) object to be dragged.
- `viewLocation`: The location of the image’s lower-left corner, in the view’s coordinate system. It determines the placement of the dragged image under the cursor. When determining the image location you should use the mouse down coordinate, provided in `theEvent`, rather than the current mouse location.
- `initialOffset`: This parameter is ignored.
- `event`: The left mouse-down event that triggered the dragging operation (see discussion below).
- `pboard`: The pasteboard that holds the data to be transferred to the destination (see discussion below).
- `sourceObj`: An object that serves as the controller of the dragging operation. It must conform to the [NSDraggingSource](../nsdraggingsource.md) protocol and is typically the view itself or its [NSWindow](../nswindow.md) object.
- `slideFlag`: A Boolean that determines whether the drag image should slide back if it’s rejected. The image slides back to `imageLoc` if `slideBack` is [true](https://developer.apple.com/documentation/swift/true) and the image isn’t accepted by the dragging destination. If [false](https://developer.apple.com/documentation/swift/false) the image doesn’t slide back.

<a id="Discussion"></a>

## Discussion

This method must be invoked only within an implementation of the [mouseDown:](../nsresponder/mousedown%28with_%29.md) or [mouseDragged:](../nsresponder/mousedragged%28with_%29.md) methods.

Before invoking this method, you must place the data to be transferred on `pboard`. To do this, get the drag pasteboard object (`NSDragPboard`), declare the types of the data, and then put the data on the pasteboard. This code fragment initiates a dragging operation on an image itself (that is, the image is the data to be transferred):

```objc
- (void)mouseDown:(NSEvent *)theEvent
{
    NSSize dragOffset = NSMakeSize(0.0, 0.0);
    NSPasteboard *pboard;
 
    pboard = [NSPasteboard pasteboardWithName:NSDragPboard];
    [pboard declareTypes:[NSArray arrayWithObject:NSTIFFPboardType]  owner:self];
    [pboard setData:[[self image] TIFFRepresentation] forType:NSTIFFPboardType];
 
    [self dragImage:[self image] at:[self imageLocation] offset:dragOffset
        event:theEvent pasteboard:pboard source:self slideBack:YES];
 
    return;
}
```

See the [NSDraggingSource](../nsdraggingsource.md), [NSDraggingInfo](../nsdragginginfo.md), and [NSDraggingDestination](../nsdraggingdestination.md) protocol specifications for more information on dragging operations.

## See Also

### Related Documentation

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
