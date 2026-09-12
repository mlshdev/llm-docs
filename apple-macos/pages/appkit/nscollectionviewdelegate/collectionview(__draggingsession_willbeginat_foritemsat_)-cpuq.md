> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingsession:willbeginat:foritemsat:)-cpuq](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:draggingsession:willbeginat:foritemsat:)-cpuq)

# collectionView(\_:draggingSession:willBeginAt:forItemsAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies your delegate that a drag session is about to begin.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, draggingSession session: NSDraggingSession, willBeginAt screenPoint: NSPoint, forItemsAt indexes: IndexSet)
```

## Parameters

- `collectionView`: The collection view notifying your delegate object.
- `session`: The dragging session that is about to begin.
- `screenPoint`: The starting point (in screen coordinates) for the drag operation.
- `indexes`: The indexes of the items being dragged.

<a id="Discussion"></a>

## Discussion

You can use this method to modify the dragging session or to perform other tasks related to the beginning of a drag session.

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies your delegate that a drag session is about to begin.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView draggingSession:(NSDraggingSession *) session willBeginAtPoint:(NSPoint) screenPoint forItemsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `collectionView`: The collection view notifying your delegate object.
- `session`: The dragging session that is about to begin.
- `screenPoint`: The starting point (in screen coordinates) for the drag operation.
- `indexes`: The indexes of the items being dragged.

<a id="Discussion"></a>

## Discussion

You can use this method to modify the dragging session or to perform other tasks related to the beginning of a drag session.

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
