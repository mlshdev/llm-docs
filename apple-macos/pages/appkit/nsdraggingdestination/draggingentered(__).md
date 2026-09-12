> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/draggingentered(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/draggingentered(_:))

# draggingEntered(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.

## Declaration

```swift
@MainActor optional func draggingEntered(_ sender: any NSDraggingInfo) -> NSDragOperation
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

One (and only one) of the dragging operation constants described  in [NSDragOperation](../nsdragoperation.md) in the [NSDraggingInfo](../nsdragginginfo.md) reference. The default return value (if this method is not implemented by the destination) is the value returned by the previous [draggingEntered(\_:)](draggingentered%28__%29.md) message.

<a id="Discussion"></a>

## Discussion

Invoked when a dragged image enters the destination but only if the destination has registered for the pasteboard data type involved in the drag operation. Specifically, this method is invoked when the mouse pointer enters the destination’s bounds rectangle (if it is a view object) or its frame rectangle (if it is a window object).

This method must return a value that indicates which dragging operation the destination will perform when the image is released. In deciding which dragging operation to return, the method should evaluate the overlap between both the dragging operations allowed by the source (obtained from `sender` with the [draggingSourceOperationMask](../nsdragginginfo/draggingsourceoperationmask.md) method) and the dragging operations and pasteboard data types the destination itself supports.

If none of the operations is appropriate, this method should return `NSDragOperationNone` (this is the default response if the method is not implemented by the destination). A destination will still receive [draggingUpdated(\_:)](draggingupdated%28__%29.md) and [draggingExited(\_:)](draggingexited%28__%29.md) even if `NSDragOperationNone` is returned by this method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

### Managing a Dragging Session Before an Image Is Released

- [wantsPeriodicDraggingUpdates()](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages.
- [draggingUpdated(\_:)](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited(\_:)](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded(\_:)](draggingended%28__%29.md): Called when a drag operation ends.

# draggingEntered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.

## Declaration

```objectivec
- (NSDragOperation) draggingEntered:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

One (and only one) of the dragging operation constants described  in [NSDragOperation](../nsdragoperation.md) in the [NSDraggingInfo](../nsdragginginfo.md) reference. The default return value (if this method is not implemented by the destination) is the value returned by the previous [draggingEntered:](draggingentered%28__%29.md) message.

<a id="Discussion"></a>

## Discussion

Invoked when a dragged image enters the destination but only if the destination has registered for the pasteboard data type involved in the drag operation. Specifically, this method is invoked when the mouse pointer enters the destination’s bounds rectangle (if it is a view object) or its frame rectangle (if it is a window object).

This method must return a value that indicates which dragging operation the destination will perform when the image is released. In deciding which dragging operation to return, the method should evaluate the overlap between both the dragging operations allowed by the source (obtained from `sender` with the [draggingSourceOperationMask](../nsdragginginfo/draggingsourceoperationmask.md) method) and the dragging operations and pasteboard data types the destination itself supports.

If none of the operations is appropriate, this method should return `NSDragOperationNone` (this is the default response if the method is not implemented by the destination). A destination will still receive [draggingUpdated:](draggingupdated%28__%29.md) and [draggingExited:](draggingexited%28__%29.md) even if `NSDragOperationNone` is returned by this method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [prepareForDragOperation:](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

### Managing a Dragging Session Before an Image Is Released

- [wantsPeriodicDraggingUpdates](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated:](draggingupdated%28__%29.md) messages.
- [draggingUpdated:](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited:](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded:](draggingended%28__%29.md): Called when a drag operation ends.
