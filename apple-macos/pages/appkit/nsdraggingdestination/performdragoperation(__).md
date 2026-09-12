> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/performdragoperation(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/performdragoperation(_:))

# performDragOperation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.

## Declaration

```swift
@MainActor optional func performDragOperation(_ sender: any NSDraggingInfo) -> Bool
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

If the destination accepts the data, it returns [true](https://developer.apple.com/documentation/swift/true); otherwise it returns [false](https://developer.apple.com/documentation/swift/false). The default is to return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For this method to be invoked, the previous [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md) message must have returned [true](https://developer.apple.com/documentation/swift/true). The destination should implement this method to do the real work of importing the pasteboard data represented by the image.

If the sender object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) was set to [true](https://developer.apple.com/documentation/swift/true) in [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md), then setup any animation to arrange space for the drag items to animate to. Also at this time, enumerate through the dragging items to set their destination frames and destination images.

## See Also

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation(\_:)](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [concludeDragOperation(\_:)](concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

# performDragOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.

## Declaration

```objectivec
- (BOOL) performDragOperation:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="return-value"></a>

## Return Value

If the destination accepts the data, it returns [true](https://developer.apple.com/documentation/swift/true); otherwise it returns [false](https://developer.apple.com/documentation/swift/false). The default is to return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For this method to be invoked, the previous [prepareForDragOperation:](preparefordragoperation%28__%29.md) message must have returned [true](https://developer.apple.com/documentation/swift/true). The destination should implement this method to do the real work of importing the pasteboard data represented by the image.

If the sender object’s [animatesToDestination](../nsdragginginfo/animatestodestination.md) was set to [true](https://developer.apple.com/documentation/swift/true) in [prepareForDragOperation:](preparefordragoperation%28__%29.md), then setup any animation to arrange space for the drag items to animate to. Also at this time, enumerate through the dragging items to set their destination frames and destination images.

## See Also

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation:](preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [concludeDragOperation:](concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.
