> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:updatedraggingitemsfordrag:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:updatedraggingitemsfordrag:))

# collectionView(\_:updateDraggingItemsForDrag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks your delegate to update the dragging items during a drag operation.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, updateDraggingItemsForDrag draggingInfo: any NSDraggingInfo)
```

## Parameters

- `collectionView`: The collection view asking you to update the dragging items.
- `draggingInfo`: The current information for the drag operation. Use this object to iterate over the dragging items.

<a id="Discussion"></a>

## Discussion

You can use this method to update the current drag items while a drag is in progress. Updating the drag items is optional, but you might use this method to change the image for an item. For example, you might change the image when the mouse hovers over a particular part of the collection view. Use the [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) method of the `draggingInfo` parameter to iterate over the drag items and update them as appropriate.

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
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:updateDraggingItemsForDrag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks your delegate to update the dragging items during a drag operation.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView updateDraggingItemsForDrag:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `collectionView`: The collection view asking you to update the dragging items.
- `draggingInfo`: The current information for the drag operation. Use this object to iterate over the dragging items.

<a id="Discussion"></a>

## Discussion

You can use this method to update the current drag items while a drag is in progress. Updating the drag items is optional, but you might use this method to change the image for an item. For example, you might change the image when the mouse hovers over a particular part of the collection view. Use the [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) method of the `draggingInfo` parameter to iterate over the drag items and update them as appropriate.

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
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
