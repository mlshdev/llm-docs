> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggingsourceoperationmask](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggingsourceoperationmask)

# draggingSourceOperationMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Information about the dragging operation and the data it contains.

## Declaration

```swift
@MainActor var draggingSourceOperationMask: NSDragOperation { get }
```

<a id="Discussion"></a>

## Discussion

The dragging source ([NSDraggingSource](../nsdraggingsource.md)) declares the dragging operation mask through [draggingSession(\_:sourceOperationMaskFor:)](../nsdraggingsource/draggingsession%28__sourceoperationmaskfor_%29.md).

If the source doesn’t permit dragging operations, the value of the dragging source operation mask is [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md), or the empty option set in Swift (`[]`). If the source permits dragging operations, the value of the dragging source operation mask is the result of a bitwise OR operation on one or more of the [NSDragOperation](../nsdragoperation.md) constants in Objective-C, or an option set containing one or more of the [NSDragOperation](../nsdragoperation.md) constants in Swift.

If the user holds down a modifier key during the dragging session and the dragging source allows modifier keys to affect the drag operation, the system combines the dragging source operation mask with the value that corresponds to the modifier key. You control whether the modifier keys can affect the drag operation using the dragging source’s [ignoreModifierKeys(for:)](../nsdraggingsource/ignoremodifierkeys%28for_%29.md) method.

| Modifier Key | Dragging Operation |
| --- | --- |
| Option | [copy](../nsdragoperation/copy.md) |
| Command | [move](../nsdragoperation/move.md) |
| Option and Command | [link](../nsdragoperation/link.md) |

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

# draggingSourceOperationMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Information about the dragging operation and the data it contains.

## Declaration

```objectivec
@property (readonly) NSDragOperation draggingSourceOperationMask;
```

<a id="Discussion"></a>

## Discussion

The dragging source ([NSDraggingSource](../nsdraggingsource.md)) declares the dragging operation mask through [draggingSession:sourceOperationMaskForDraggingContext:](../nsdraggingsource/draggingsession%28__sourceoperationmaskfor_%29.md).

If the source doesn’t permit dragging operations, the value of the dragging source operation mask is [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md), or the empty option set in Swift (`[]`). If the source permits dragging operations, the value of the dragging source operation mask is the result of a bitwise OR operation on one or more of the [NSDragOperation](../nsdragoperation.md) constants in Objective-C, or an option set containing one or more of the [NSDragOperation](../nsdragoperation.md) constants in Swift.

If the user holds down a modifier key during the dragging session and the dragging source allows modifier keys to affect the drag operation, the system combines the dragging source operation mask with the value that corresponds to the modifier key. You control whether the modifier keys can affect the drag operation using the dragging source’s [ignoreModifierKeysForDraggingSession:](../nsdraggingsource/ignoremodifierkeys%28for_%29.md) method.

| Modifier Key | Dragging Operation |
| --- | --- |
| Option | [NSDragOperationCopy](../nsdragoperation/copy.md) |
| Command | [NSDragOperationMove](../nsdragoperation/move.md) |
| Option and Command | [NSDragOperationLink](../nsdragoperation/link.md) |

## See Also

### Obtaining information about the dragging session

- [draggingPasteboard](draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](draggingsource.md): The source, or owner, of the dragged data.
- [draggingLocation](dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.
