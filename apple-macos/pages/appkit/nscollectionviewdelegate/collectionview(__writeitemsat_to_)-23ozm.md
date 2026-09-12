> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:writeitemsat:to:)-23ozm](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:writeitemsat:to:)-23ozm)

# collectionView(\_:writeItemsAt:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.15)

Places the data for the drag operation on the pasteboard.

> Use -collectionView:pasteboardWriterForItemAtIndexPath: instead

## Declaration

```swift
optional func collectionView(_ collectionView: NSCollectionView, writeItemsAt indexPaths: Set<IndexPath>, to pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The index paths of the items being dragged.
- `pasteboard`: The pasteboard on which to place the drag data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation can continue or [false](https://developer.apple.com/documentation/swift/false) if you want to refuse the drag.

<a id="Discussion"></a>

## Discussion

You must implement this method or the [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method to support drag operations. The collection view calls the [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method in preference to this one if both are implemented. If your app supports multi-image drag and drop, you must implement the [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method.

The collection view calls this method after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should do the following:

1. Declare the pasteboard types you support using the [declareTypes(\_:owner:)](../nspasteboard/declaretypes%28__owner_%29.md) method of the provided `pasteboard` object.
2. Write data to the pasteboard for each type you declare.
3. Return [true](https://developer.apple.com/documentation/swift/true) from this method.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:writeItemsAtIndexPaths:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.15)

Places the data for the drag operation on the pasteboard.

> Use -collectionView:pasteboardWriterForItemAtIndexPath: instead

## Declaration

```objectivec
- (BOOL) collectionView:(NSCollectionView *) collectionView writeItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The index paths of the items being dragged.
- `pasteboard`: The pasteboard on which to place the drag data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation can continue or [false](https://developer.apple.com/documentation/swift/false) if you want to refuse the drag.

<a id="Discussion"></a>

## Discussion

You must implement this method or the [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method to support drag operations. The collection view calls the [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method in preference to this one if both are implemented. If your app supports multi-image drag and drop, you must implement the [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) method.

The collection view calls this method after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should do the following:

1. Declare the pasteboard types you support using the [declareTypes:owner:](../nspasteboard/declaretypes%28__owner_%29.md) method of the provided `pasteboard` object.
2. Write data to the pasteboard for each type you declare.
3. Return [true](https://developer.apple.com/documentation/swift/true) from this method.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
