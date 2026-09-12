> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/numberofvaliditemsfordrop](https://developer.apple.com/documentation/appkit/nsdragginginfo/numberofvaliditemsfordrop)

# numberOfValidItemsForDrop (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The number of valid items for a drop operation.

## Declaration

```swift
@MainActor var numberOfValidItemsForDrop: Int { get set }
```

<a id="Discussion"></a>

## Discussion

During draggingEntered: or draggingUpdated:, you are responsible for returning the drag operation. In some cases, you may accept some, but not all items on the dragging pasteboard. (For example, your application may only accept image files.)

If you only accept some of the items, set this property to the number of items accepted so the drag manager can update the drag count badge.

When [updateDraggingItemsForDrag(\_:)](../nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md) is called, you should set the image of non-valid dragging items to `nil`. If none of the drag items are valid then you should not `updateItems:`, simply return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) from your implementation of draggingEntered: and, or draggingUpdated: and do not modify any drag item properties.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# numberOfValidItemsForDrop (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The number of valid items for a drop operation.

## Declaration

```objectivec
@property NSInteger numberOfValidItemsForDrop;
```

<a id="Discussion"></a>

## Discussion

During draggingEntered: or draggingUpdated:, you are responsible for returning the drag operation. In some cases, you may accept some, but not all items on the dragging pasteboard. (For example, your application may only accept image files.)

If you only accept some of the items, set this property to the number of items accepted so the drag manager can update the drag count badge.

When [updateDraggingItemsForDrag:](../nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md) is called, you should set the image of non-valid dragging items to `nil`. If none of the drag items are valid then you should not `updateItems:`, simply return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) from your implementation of draggingEntered: and, or draggingUpdated: and do not modify any drag item properties.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
