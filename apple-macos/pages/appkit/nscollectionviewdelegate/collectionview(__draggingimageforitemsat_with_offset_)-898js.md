> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingimageforitemsat:with:offset:)-898js](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingimageforitemsat:with:offset:)-898js)

# collectionView(\_:draggingImageForItemsAt:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates and returns a drag image to represent the specified items during a drag.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, draggingImageForItemsAt indexPaths: Set<IndexPath>, with event: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The index paths of the items being dragged.
- `event`: The mouse-down event that began the drag operation. You can use the mouse location when determining what value to return in the `dragImageOffset` parameter.
- `dragImageOffset`: The offset value to use when positioning the image. On input, the point is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which centers the returned image under the mouse. Your method can return a different point that repositions the drag image by the specified offset values.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should create an appropriate image to use during the drag operation.  The collection view places the center of your image at the current mouse location. Update the value in the `dragImageOffset` parameter to shift the position of your image by the specified amount.

If you do not implement this method, the collection view uses the drag image returned by the [draggingImageForItems(at:with:offset:)](../nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md) method instead.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates and returns a drag image to represent the specified items during a drag.

## Declaration

```objectivec
- (NSImage *) collectionView:(NSCollectionView *) collectionView draggingImageForItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The index paths of the items being dragged.
- `event`: The mouse-down event that began the drag operation. You can use the mouse location when determining what value to return in the `dragImageOffset` parameter.
- `dragImageOffset`: The offset value to use when positioning the image. On input, the point is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which centers the returned image under the mouse. Your method can return a different point that repositions the drag image by the specified offset values.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should create an appropriate image to use during the drag operation.  The collection view places the center of your image at the current mouse location. Update the value in the `dragImageOffset` parameter to shift the position of your image by the specified amount.

If you do not implement this method, the collection view uses the drag image returned by the [draggingImageForItemsAtIndexPaths:withEvent:offset:](../nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md) method instead.

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
