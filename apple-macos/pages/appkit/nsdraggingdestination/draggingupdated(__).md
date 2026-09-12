> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/draggingupdated(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/draggingupdated(_:))

# draggingUpdated(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.

## Declaration

```swift
@MainActor optional func draggingUpdated(_ sender: any NSDraggingInfo) -> NSDragOperation
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

One (and only one) of the dragging operation constants described  in [NSDragOperation](../nsdragoperation.md) in the [NSDraggingInfo](../nsdragginginfo.md) reference. The default return value (if this method is not implemented by the destination) is the value returned by the previous [draggingEntered(\_:)](draggingentered%28__%29.md) message.

<a id="Discussion"></a>

## Discussion

For this to be invoked, the destination must have registered for the pasteboard data type involved in the drag operation. The messages continue until the image is either released or dragged out of the window or view.

This method provides the destination with an opportunity to modify the dragging operation depending on the position of the mouse pointer inside of the destination view or window object. For example, you may have several graphics or areas of text contained within the same view and wish to tailor the dragging operation, or to ignore the drag event completely, depending upon which object is underneath the mouse pointer at the time when the user releases the dragged image and the [performDragOperation(\_:)](performdragoperation%28__%29.md) method is invoked.

You typically examine the contents of the pasteboard in the [draggingEntered(\_:)](draggingentered%28__%29.md) method, where this examination is performed only once, rather than in the [draggingUpdated(\_:)](draggingupdated%28__%29.md) method, which is invoked multiple times.

Only one destination at a time receives a sequence of [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages. If the mouse pointer is within the bounds of two overlapping views that are both valid destinations, the uppermost view receives these messages until the image is either released or dragged out.

## See Also

### Related Documentation

- [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered(\_:)](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates()](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages.
- [draggingExited(\_:)](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded(\_:)](draggingended%28__%29.md): Called when a drag operation ends.

# draggingUpdated: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.

## Declaration

```objectivec
- (NSDragOperation) draggingUpdated:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

One (and only one) of the dragging operation constants described  in [NSDragOperation](../nsdragoperation.md) in the [NSDraggingInfo](../nsdragginginfo.md) reference. The default return value (if this method is not implemented by the destination) is the value returned by the previous [draggingEntered:](draggingentered%28__%29.md) message.

<a id="Discussion"></a>

## Discussion

For this to be invoked, the destination must have registered for the pasteboard data type involved in the drag operation. The messages continue until the image is either released or dragged out of the window or view.

This method provides the destination with an opportunity to modify the dragging operation depending on the position of the mouse pointer inside of the destination view or window object. For example, you may have several graphics or areas of text contained within the same view and wish to tailor the dragging operation, or to ignore the drag event completely, depending upon which object is underneath the mouse pointer at the time when the user releases the dragged image and the [performDragOperation:](performdragoperation%28__%29.md) method is invoked.

You typically examine the contents of the pasteboard in the [draggingEntered:](draggingentered%28__%29.md) method, where this examination is performed only once, rather than in the [draggingUpdated:](draggingupdated%28__%29.md) method, which is invoked multiple times.

Only one destination at a time receives a sequence of [draggingUpdated:](draggingupdated%28__%29.md) messages. If the mouse pointer is within the bounds of two overlapping views that are both valid destinations, the uppermost view receives these messages until the image is either released or dragged out.

## See Also

### Related Documentation

- [prepareForDragOperation:](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered:](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated:](draggingupdated%28__%29.md) messages.
- [draggingExited:](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded:](draggingended%28__%29.md): Called when a drag operation ends.
