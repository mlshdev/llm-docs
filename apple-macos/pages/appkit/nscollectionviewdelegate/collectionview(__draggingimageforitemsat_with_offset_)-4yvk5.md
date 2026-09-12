> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingimageforitemsat:with:offset:)-4yvk5](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingimageforitemsat:with:offset:)-4yvk5)

# collectionView(\_:draggingImageForItemsAt:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates and returns a drag image to represent the specified items during a drag.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, draggingImageForItemsAt indexes: IndexSet, with event: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexes`: The indexes of the items being dragged.
- `event`: The mouse-down event that initiated the drag.
- `dragImageOffset`: An in/out parameter that is initially set to [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which causes the image to be centered under the mouse. The value can be modified to reposition the returned image.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the collection view uses the image returned by [draggingImageForItems(at:with:offset:)](../nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md).

You do not need to implement this method for your collection view to be a drag source.

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:draggingImageForItemsAtIndexes:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates and returns a drag image to represent the specified items during a drag.

## Declaration

```objectivec
- (NSImage *) collectionView:(NSCollectionView *) collectionView draggingImageForItemsAtIndexes:(NSIndexSet *) indexes withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexes`: The indexes of the items being dragged.
- `event`: The mouse-down event that initiated the drag.
- `dragImageOffset`: An in/out parameter that is initially set to [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which causes the image to be centered under the mouse. The value can be modified to reposition the returned image.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the collection view uses the image returned by [draggingImageForItemsAtIndexes:withEvent:offset:](../nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md).

You do not need to implement this method for your collection view to be a drag source.

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
