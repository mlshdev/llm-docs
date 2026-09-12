> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:namesofpromisedfilesdroppedatdestination:fordraggeditemsat:)-6yag4](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:namesofpromisedfilesdroppedatdestination:fordraggeditemsat:)-6yag4)

# collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.13)

Returns the names of the promised files that you created for a drag operation.

> Use NSFilePromiseReceiver objects instead

## Declaration

```swift
optional func collectionView(_ collectionView: NSCollectionView, namesOfPromisedFilesDroppedAtDestination dropURL: URL, forDraggedItemsAt indexPaths: Set<IndexPath>) -> [String]
```

## Parameters

- `collectionView`: The collection view asking you to provide the list of filenames.
- `dropURL`: The URL at which to create the promised files.
- `indexPaths`: The index paths of the dragged items.

<a id="return-value"></a>

## Return Value

An array of strings containing the filenames you created, or intend to create, at the specified URL.

<a id="Discussion"></a>

## Discussion

At the start of a drag operation, your app must provide the data that constitutes the items being dragged. If you specify a file promise, instead of the data itself, use this method to specify the names of the files you promised. If the files already exist, move them to the directory specified by the `dropURL` parameter. If you must create the files first, use this method to specify the names of the files you intend to provide and begin creating those files asynchronously on a background thread.

The filenames you return are made available from the [namesOfPromisedFilesDropped(atDestination:)](../nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md) method of the [NSDraggingInfo](../nsdragginginfo.md) object passed around during the drag operation.

For more information about how to use file promises when dragging content, see [Drag and Drop Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DragandDrop/DragandDrop.html#//apple_ref/doc/uid/10000069i).

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.13)

Returns the names of the promised files that you created for a drag operation.

> Use NSFilePromiseReceiver objects instead

## Declaration

```objectivec
- (NSArray<NSString *> *) collectionView:(NSCollectionView *) collectionView namesOfPromisedFilesDroppedAtDestination:(NSURL *) dropURL forDraggedItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `collectionView`: The collection view asking you to provide the list of filenames.
- `dropURL`: The URL at which to create the promised files.
- `indexPaths`: The index paths of the dragged items.

<a id="return-value"></a>

## Return Value

An array of strings containing the filenames you created, or intend to create, at the specified URL.

<a id="Discussion"></a>

## Discussion

At the start of a drag operation, your app must provide the data that constitutes the items being dragged. If you specify a file promise, instead of the data itself, use this method to specify the names of the files you promised. If the files already exist, move them to the directory specified by the `dropURL` parameter. If you must create the files first, use this method to specify the names of the files you intend to provide and begin creating those files asynchronously on a background thread.

The filenames you return are made available from the [namesOfPromisedFilesDroppedAtDestination:](../nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md) method of the [NSDraggingInfo](../nsdragginginfo.md) object passed around during the drag operation.

For more information about how to use file promises when dragging content, see [Drag and Drop Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DragandDrop/DragandDrop.html#//apple_ref/doc/uid/10000069i).

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
