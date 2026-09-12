> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:validatedrop:proposedindexpath:dropoperation:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:validatedrop:proposedindexpath:dropoperation:))

# collectionView(\_:validateDrop:proposedIndexPath:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Validates whether a drop operation is possible at the specified location.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, validateDrop draggingInfo: any NSDraggingInfo, proposedIndexPath proposedDropIndexPath: AutoreleasingUnsafeMutablePointer<NSIndexPath>, dropOperation proposedDropOperation: UnsafeMutablePointer<NSCollectionView.DropOperation>) -> NSDragOperation
```

## Parameters

- `collectionView`: The collection view asking you to validate the drop operation.
- `draggingInfo`: The information about the drag operation.
- `proposedDropIndexPath`: The index path at which the drop would occur. This parameter is passed by-reference and can be modified to change the proposed index path.
- `proposedDropOperation`: The type of drop operation being proposed. This parameter is passed by-reference and can be modified to change the drop operation type.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation to perform. Return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) to disallow a drop at the proposed location.

<a id="Discussion"></a>

## Discussion

Although implementation of this method is optional, you must implement it to support drops onto the associated collection view. You must also call the collection view’s [registerForDraggedTypes(\_:)](../nsview/registerfordraggedtypes%28__%29.md) method to register the types of drops it supports. If you do not perform both of these actions, the collection view does not accept drops.

When an interactive drag operation occurs, the collection view calls this method to determine whether the current mouse location is a valid place to drop the content. This method may be called many times during the course of the drag operation. Your implementation should look at the proposed location and return a constant that reflects how the drop would be handled.

While validating the drop location, you can suggest a better drop location by updating the values in the `proposedDropIndexPath` and `proposedDropOperation` parameters. For example, you might suggest dropping the content before the specified item instead of on it. The collection view sets the `proposedDropOperation` parameter to [NSCollectionView.DropOperation.on](../nscollectionview/dropoperation/on.md) when the mouse is closer to the middle of an item than to its edges; otherwise, it sets the parameter to [NSCollectionView.DropOperation.before](../nscollectionview/dropoperation/before.md).

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
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

# collectionView:validateDrop:proposedIndexPath:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Validates whether a drop operation is possible at the specified location.

## Declaration

```objectivec
- (NSDragOperation) collectionView:(NSCollectionView *) collectionView validateDrop:(id<NSDraggingInfo>) draggingInfo proposedIndexPath:(NSIndexPath **) proposedDropIndexPath dropOperation:(NSCollectionViewDropOperation *) proposedDropOperation;
```

## Parameters

- `collectionView`: The collection view asking you to validate the drop operation.
- `draggingInfo`: The information about the drag operation.
- `proposedDropIndexPath`: The index path at which the drop would occur. This parameter is passed by-reference and can be modified to change the proposed index path.
- `proposedDropOperation`: The type of drop operation being proposed. This parameter is passed by-reference and can be modified to change the drop operation type.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation to perform. Return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) to disallow a drop at the proposed location.

<a id="Discussion"></a>

## Discussion

Although implementation of this method is optional, you must implement it to support drops onto the associated collection view. You must also call the collection view’s [registerForDraggedTypes:](../nsview/registerfordraggedtypes%28__%29.md) method to register the types of drops it supports. If you do not perform both of these actions, the collection view does not accept drops.

When an interactive drag operation occurs, the collection view calls this method to determine whether the current mouse location is a valid place to drop the content. This method may be called many times during the course of the drag operation. Your implementation should look at the proposed location and return a constant that reflects how the drop would be handled.

While validating the drop location, you can suggest a better drop location by updating the values in the `proposedDropIndexPath` and `proposedDropOperation` parameters. For example, you might suggest dropping the content before the specified item instead of on it. The collection view sets the `proposedDropOperation` parameter to [NSCollectionViewDropOn](../nscollectionview/dropoperation/on.md) when the mouse is closer to the middle of an item than to its edges; otherwise, it sets the parameter to [NSCollectionViewDropBefore](../nscollectionview/dropoperation/before.md).

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
- [collectionView:acceptDrop:indexPath:dropOperation:](collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.
