> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:acceptdrop:index:dropoperation:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:acceptdrop:index:dropoperation:))

# collectionView(\_:acceptDrop:index:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the mouse is released over a collection view that previously allowed a drop.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, acceptDrop draggingInfo: any NSDraggingInfo, index: Int, dropOperation: NSCollectionView.DropOperation) -> Bool
```

## Parameters

- `collectionView`: The collection view that send the message.
- `draggingInfo`: An object that contains more information about this dragging operation.
- `index`: The index of the proposed drop item.
- `dropOperation`: The type of dragging operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drop operation should be accepted, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called when the mouse is released over a collection view that previously decided to allow a drop via the [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) method. At this time, the delegate should incorporate the data from the dragging pasteboard and update the collection view’s contents.

You must implement this method for your collection view to be a drag destination

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.

# collectionView:acceptDrop:index:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the mouse is released over a collection view that previously allowed a drop.

## Declaration

```objectivec
- (BOOL) collectionView:(NSCollectionView *) collectionView acceptDrop:(id<NSDraggingInfo>) draggingInfo index:(NSInteger) index dropOperation:(NSCollectionViewDropOperation) dropOperation;
```

## Parameters

- `collectionView`: The collection view that send the message.
- `draggingInfo`: An object that contains more information about this dragging operation.
- `index`: The index of the proposed drop item.
- `dropOperation`: The type of dragging operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drop operation should be accepted, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called when the mouse is released over a collection view that previously decided to allow a drop via the [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) method. At this time, the delegate should incorporate the data from the dragging pasteboard and update the collection view’s contents.

You must implement this method for your collection view to be a drag destination

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
