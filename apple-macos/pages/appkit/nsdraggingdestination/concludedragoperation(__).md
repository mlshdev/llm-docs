> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/concludedragoperation(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/concludedragoperation(_:))

# concludeDragOperation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

## Declaration

```swift
@MainActor optional func concludeDragOperation(_ sender: (any NSDraggingInfo)?)
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

For this method to be invoked, the previous [performDragOperation(\_:)](performdragoperation%28__%29.md) must have returned [true](https://developer.apple.com/documentation/swift/true).

The destination implements this method to perform any tidying up that it needs to do, such as updating its visual representation now that it has incorporated the dragged data. This message is the last message sent from `sender` to the destination during a dragging session.

If the `sender` object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) property was set to [true](https://developer.apple.com/documentation/swift/true) in [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md), then the drag image is still visible. At this point you should draw the final visual representation in the view. When this method returns, the drag image is removed form the screen. If your final visual representation matches the visual representation in the drag, this is a seamless transition.

## See Also

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [performDragOperation(\_:)](performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.

# concludeDragOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

## Declaration

```objectivec
- (void) concludeDragOperation:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

For this method to be invoked, the previous [performDragOperation:](performdragoperation%28__%29.md) must have returned [true](https://developer.apple.com/documentation/swift/true).

The destination implements this method to perform any tidying up that it needs to do, such as updating its visual representation now that it has incorporated the dragged data. This message is the last message sent from `sender` to the destination during a dragging session.

If the `sender` object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) property was set to [true](https://developer.apple.com/documentation/swift/true) in [prepareForDragOperation:](preparefordragoperation%28__%29.md), then the drag image is still visible. At this point you should draw the final visual representation in the view. When this method returns, the drag image is removed form the screen. If your final visual representation matches the visual representation in the drag, this is a seamless transition.

## See Also

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation:](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [performDragOperation:](performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.
