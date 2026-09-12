> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/preparefordragoperation(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/preparefordragoperation(_:))

# prepareForDragOperation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

## Declaration

```swift
@MainActor optional func prepareForDragOperation(_ sender: any NSDraggingInfo) -> Bool
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver agrees to perform the drag operation and [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

This method is invoked only if the most recent [draggingEntered(\_:)](draggingentered%28__%29.md) or [draggingUpdated(\_:)](draggingupdated%28__%29.md) message returned an acceptable drag-operation value.

If you want the drag items to animate from their current location on screen to their final location in your view, set the sender object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) property to [true](https://developer.apple.com/documentation/swift/true) in your implementation of this method.

## See Also

### Managing a Dragging Session After an Image Is Released

- [performDragOperation(\_:)](performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.
- [concludeDragOperation(\_:)](concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

# prepareForDragOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.

## Declaration

```objectivec
- (BOOL) prepareForDragOperation:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver agrees to perform the drag operation and [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

This method is invoked only if the most recent [draggingEntered:](draggingentered%28__%29.md) or [draggingUpdated:](draggingupdated%28__%29.md) message returned an acceptable drag-operation value.

If you want the drag items to animate from their current location on screen to their final location in your view, set the sender object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) property to [true](https://developer.apple.com/documentation/swift/true) in your implementation of this method.

## See Also

### Managing a Dragging Session After an Image Is Released

- [performDragOperation:](performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.
- [concludeDragOperation:](concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.
