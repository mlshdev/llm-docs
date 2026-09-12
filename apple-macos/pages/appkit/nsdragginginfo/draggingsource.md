> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggingsource](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggingsource)

# draggingSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The source, or owner, of the dragged data.

## Declaration

```swift
@MainActor var draggingSource: Any? { get }
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the source is not in the same application as the destination. The dragging source implements methods from the NSDraggingSource protocol.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# draggingSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The source, or owner, of the dragged data.

## Declaration

```objectivec
@property (readonly, nullable) id draggingSource;
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the source is not in the same application as the destination. The dragging source implements methods from the NSDraggingSource protocol.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
