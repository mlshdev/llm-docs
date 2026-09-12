> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingsession:endedat:dragoperation:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingsession:endedat:dragoperation:))

# collectionView(\_:draggingSession:endedAt:dragOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies your delegate that a drag session ended.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, draggingSession session: NSDraggingSession, endedAt screenPoint: NSPoint, dragOperation operation: NSDragOperation)
```

## Parameters

- `collectionView`: The collection view notifying your delegate object.
- `session`: The dragging session that ended.
- `screenPoint`: The end point (in screen coordinates) for the drag operation.
- `operation`: The operation that was performed. Use this value to determine how the operation ended. For example, for content that was dragged to the trash, the operation type would be [delete](../nsdragoperation/delete.md).

<a id="Discussion"></a>

## Discussion

You can use this method to perform tasks related to the ending of a drag session.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:draggingSession:endedAtPoint:dragOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies your delegate that a drag session ended.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView draggingSession:(NSDraggingSession *) session endedAtPoint:(NSPoint) screenPoint dragOperation:(NSDragOperation) operation;
```

## Parameters

- `collectionView`: The collection view notifying your delegate object.
- `session`: The dragging session that ended.
- `screenPoint`: The end point (in screen coordinates) for the drag operation.
- `operation`: The operation that was performed. Use this value to determine how the operation ended. For example, for content that was dragged to the trash, the operation type would be [NSDragOperationDelete](../nsdragoperation/delete.md).

<a id="Discussion"></a>

## Discussion

You can use this method to perform tasks related to the ending of a drag session.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
