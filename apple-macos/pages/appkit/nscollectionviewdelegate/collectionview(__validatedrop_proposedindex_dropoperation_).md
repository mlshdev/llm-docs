> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:validatedrop:proposedindex:dropoperation:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:validatedrop:proposedindex:dropoperation:))

# collectionView(\_:validateDrop:proposedIndex:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Validates the specified location to see if it is a valid drop target.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, validateDrop draggingInfo: any NSDraggingInfo, proposedIndex proposedDropIndex: UnsafeMutablePointer<Int>, dropOperation proposedDropOperation: UnsafeMutablePointer<NSCollectionView.DropOperation>) -> NSDragOperation
```

## Parameters

- `collectionView`: The collection view that send the message.
- `draggingInfo`: An object containing details about this dragging operation.
- `proposedDropIndex`: The proposed drop index. This parameter is passed by-reference and can be modified retarget the drop operation.
- `proposedDropOperation`: The proposed drop operation. This parameter is passed by-reference and can be modified to change the drop operation.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation to perform. Return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) to disallow the drop.

<a id="Discussion"></a>

## Discussion

Based on the mouse position, the collection view will suggest a proposed index and drop operation. These values are in/out parameters and can be changed by the delegate to retarget the drop operation.

The collection view will propose `NSCollectionViewDropOn` when the dragging location is closer to the middle of the item than either of its edges. Otherwise, it will propose `NSCollectionViewDropBefore`. You may override this default behavior by changing `proposedDropOperation` or `proposedDropIndex`.

To receive drag messages, you must first send [registerForDraggedTypes(\_:)](../nsview/registerfordraggedtypes%28__%29.md) to the collection view with the drag types you want to support.

You must implement this method for your collection view to be a drag destination.

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:validateDrop:proposedIndex:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Validates the specified location to see if it is a valid drop target.

## Declaration

```objectivec
- (NSDragOperation) collectionView:(NSCollectionView *) collectionView validateDrop:(id<NSDraggingInfo>) draggingInfo proposedIndex:(NSInteger *) proposedDropIndex dropOperation:(NSCollectionViewDropOperation *) proposedDropOperation;
```

## Parameters

- `collectionView`: The collection view that send the message.
- `draggingInfo`: An object containing details about this dragging operation.
- `proposedDropIndex`: The proposed drop index. This parameter is passed by-reference and can be modified retarget the drop operation.
- `proposedDropOperation`: The proposed drop operation. This parameter is passed by-reference and can be modified to change the drop operation.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation to perform. Return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) to disallow the drop.

<a id="Discussion"></a>

## Discussion

Based on the mouse position, the collection view will suggest a proposed index and drop operation. These values are in/out parameters and can be changed by the delegate to retarget the drop operation.

The collection view will propose `NSCollectionViewDropOn` when the dragging location is closer to the middle of the item than either of its edges. Otherwise, it will propose `NSCollectionViewDropBefore`. You may override this default behavior by changing `proposedDropOperation` or `proposedDropIndex`.

To receive drag messages, you must first send [registerForDraggedTypes:](../nsview/registerfordraggedtypes%28__%29.md) to the collection view with the drag types you want to support.

You must implement this method for your collection view to be a drag destination.

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
