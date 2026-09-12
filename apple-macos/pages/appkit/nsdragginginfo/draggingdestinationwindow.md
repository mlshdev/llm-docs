> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggingdestinationwindow](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggingdestinationwindow)

# draggingDestinationWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The destination window for the dragging operation.

## Declaration

```swift
@MainActor var draggingDestinationWindow: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

Either this window is the destination itself, or it contains the view object that is the destination.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# draggingDestinationWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The destination window for the dragging operation.

## Declaration

```objectivec
@property (readonly, nullable) NSWindow * draggingDestinationWindow;
```

<a id="Discussion"></a>

## Discussion

Either this window is the destination itself, or it contains the view object that is the destination.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
