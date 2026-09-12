> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggingpasteboard](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggingpasteboard)

# draggingPasteboard (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pasteboard object that holds the dragged data.

## Declaration

```swift
@MainActor var draggingPasteboard: NSPasteboard { get }
```

<a id="Discussion"></a>

## Discussion

The dragging operation that is ultimately performed utilizes this pasteboard data and not the image returned by the [draggedImage](draggedimage.md) method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Obtaining information about the dragging session

- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# draggingPasteboard (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pasteboard object that holds the dragged data.

## Declaration

```objectivec
@property (readonly) NSPasteboard * draggingPasteboard;
```

<a id="Discussion"></a>

## Discussion

The dragging operation that is ultimately performed utilizes this pasteboard data and not the image returned by the [draggedImage](draggedimage.md) method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Obtaining information about the dragging session

- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
