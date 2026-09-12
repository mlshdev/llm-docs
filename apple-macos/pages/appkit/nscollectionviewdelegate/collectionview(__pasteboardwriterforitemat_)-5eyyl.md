> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:pasteboardwriterforitemat:)-5eyyl](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:pasteboardwriterforitemat:)-5eyyl)

# collectionView(\_:pasteboardWriterForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Provides the pasteboard writer for the item at the specified index path.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, pasteboardWriterForItemAt indexPath: IndexPath) -> (any NSPasteboardWriting)?
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPath`: The index path of the item requiring a pasteboard writer.

<a id="return-value"></a>

## Return Value

The pasteboard writer object to use for managing the item data. Return `nil` to prevent the collection view from dragging the item.

<a id="Discussion"></a>

## Discussion

You must implement this method or the [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md) method to support drag operations. The collection view calls this method in preference over the [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md) method if both are implemented. If your app supports multi-image drag and drop, you must implement this method.

The collection view calls this method for each item involved in the drag operation after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should create and return the pasteboard writer—an object conforming to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol—to use for providing the item’s data. Using the object you provide, the collection view creates an [NSDraggingItem](../nsdraggingitem.md) object for you and configures its [draggingFrame](../nsdraggingitem/draggingframe.md) and [imageComponents](../nsdraggingitem/imagecomponents.md) properties for you using information from the item at the specified index path.

If you implement this method, the collection view does not call the [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md) of your delegate or the [draggingImageForItems(at:with:offset:)](../nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md) method of [NSCollectionView](../nscollectionview.md).

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:pasteboardWriterForItemAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Provides the pasteboard writer for the item at the specified index path.

## Declaration

```objectivec
- (id<NSPasteboardWriting>) collectionView:(NSCollectionView *) collectionView pasteboardWriterForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPath`: The index path of the item requiring a pasteboard writer.

<a id="return-value"></a>

## Return Value

The pasteboard writer object to use for managing the item data. Return `nil` to prevent the collection view from dragging the item.

<a id="Discussion"></a>

## Discussion

You must implement this method or the [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md) method to support drag operations. The collection view calls this method in preference over the [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md) method if both are implemented. If your app supports multi-image drag and drop, you must implement this method.

The collection view calls this method for each item involved in the drag operation after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should create and return the pasteboard writer—an object conforming to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol—to use for providing the item’s data. Using the object you provide, the collection view creates an [NSDraggingItem](../nsdraggingitem.md) object for you and configures its [draggingFrame](../nsdraggingitem/draggingframe.md) and [imageComponents](../nsdraggingitem/imagecomponents.md) properties for you using information from the item at the specified index path.

If you implement this method, the collection view does not call the [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md) of your delegate or the [draggingImageForItemsAtIndexPaths:withEvent:offset:](../nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md) method of [NSCollectionView](../nscollectionview.md).

## See Also

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](../supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
