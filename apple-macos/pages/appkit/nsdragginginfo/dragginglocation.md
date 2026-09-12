> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/dragginglocation](https://developer.apple.com/documentation/appkit/nsdragginginfo/dragginglocation)

# draggingLocation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the mouse pointer in the base coordinate system of the destination object’s window.

## Declaration

```swift
@MainActor var draggingLocation: NSPoint { get }
```

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# draggingLocation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the mouse pointer in the base coordinate system of the destination object’s window.

## Declaration

```objectivec
@property (readonly) NSPoint draggingLocation;
```

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
