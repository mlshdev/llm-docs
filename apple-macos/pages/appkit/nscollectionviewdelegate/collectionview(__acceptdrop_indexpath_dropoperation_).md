> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:acceptdrop:indexpath:dropoperation:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:acceptdrop:indexpath:dropoperation:))

# collectionView(\_:acceptDrop:indexPath:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Incorporates the dropped content into the collection view.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, acceptDrop draggingInfo: any NSDraggingInfo, indexPath: IndexPath, dropOperation: NSCollectionView.DropOperation) -> Bool
```

## Parameters

- `collectionView`: The collection view receiving the dropped content.
- `draggingInfo`: The information about the drag operation.
- `indexPath`: The index path at which the drop occurred. Use this location as the insertion point for the content.
- `dropOperation`: The type of drop operation to perform.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drop operation should be accepted or [false](https://developer.apple.com/documentation/swift/false) if it should be rejected.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user releases the mouse button while it is over a valid drop target. This method is called after the [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md) method validates that dropping the content at the specified location is possible. You must implement this method to accept the dropped content and incorporate it into the collection view.

In your implementation, use the information in the `draggingInfo` parameter to retrieve the data, update your data source object, and insert the appropriate items into the collection view. The dropped data is stored in the [draggingPasteboard](../nsdragginginfo/draggingpasteboard.md) property of the dragging information object.

If the [animatesToDestination](../nsdragginginfo/animatestodestination.md) property of the dragging information is [true](https://developer.apple.com/documentation/swift/true), update the image and frame for each dragged item to its new location in the collection view.  You can enumerate the list of dragged items using the [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) method of the dragging information object.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.

# collectionView:acceptDrop:indexPath:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Incorporates the dropped content into the collection view.

## Declaration

```objectivec
- (BOOL) collectionView:(NSCollectionView *) collectionView acceptDrop:(id<NSDraggingInfo>) draggingInfo indexPath:(NSIndexPath *) indexPath dropOperation:(NSCollectionViewDropOperation) dropOperation;
```

## Parameters

- `collectionView`: The collection view receiving the dropped content.
- `draggingInfo`: The information about the drag operation.
- `indexPath`: The index path at which the drop occurred. Use this location as the insertion point for the content.
- `dropOperation`: The type of drop operation to perform.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drop operation should be accepted or [false](https://developer.apple.com/documentation/swift/false) if it should be rejected.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user releases the mouse button while it is over a valid drop target. This method is called after the [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md) method validates that dropping the content at the specified location is possible. You must implement this method to accept the dropped content and incorporate it into the collection view.

In your implementation, use the information in the `draggingInfo` parameter to retrieve the data, update your data source object, and insert the appropriate items into the collection view. The dropped data is stored in the [draggingPasteboard](../nsdragginginfo/draggingpasteboard.md) property of the dragging information object.

If the [animatesToDestination](../nsdragginginfo/animatestodestination.md) property of the dragging information is [true](https://developer.apple.com/documentation/swift/true), update the image and frame for each dragged item to its new location in the collection view.  You can enumerate the list of dragged items using the [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) method of the dragging information object.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
