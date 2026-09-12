> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/namesofpromisedfilesdropped(atdestination:)](https://developer.apple.com/documentation/appkit/nsdragginginfo/namesofpromisedfilesdropped(atdestination:))

# namesOfPromisedFilesDropped(atDestination:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

> Use NSFilePromiseReceiver objects instead

## Declaration

```swift
func namesOfPromisedFilesDropped(atDestination dropDestination: URL) -> [String]?
```

## Parameters

- `dropDestination`: A URL object specifying the drop location for promised files.

<a id="return-value"></a>

## Return Value

An array of file names, which are not full paths.

<a id="Discussion"></a>

## Discussion

Drag destinations should invoke this method within their performDragOperation: method. The source may or may not have created the files by the time this method returns.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.

# namesOfPromisedFilesDroppedAtDestination: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

> Use NSFilePromiseReceiver objects instead

## Declaration

```objectivec
- (NSArray<NSString *> *) namesOfPromisedFilesDroppedAtDestination:(NSURL *) dropDestination;
```

## Parameters

- `dropDestination`: A URL object specifying the drop location for promised files.

<a id="return-value"></a>

## Return Value

An array of file names, which are not full paths.

<a id="Discussion"></a>

## Discussion

Drag destinations should invoke this method within their performDragOperation: method. The source may or may not have created the files by the time this method returns.

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
