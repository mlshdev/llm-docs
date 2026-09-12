> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:candragitemsat:with:)-39rjh](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:candragitemsat:with:)-39rjh)

# collectionView(\_:canDragItemsAt:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean indicating whether the collection view can begin dragging the specified items.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, canDragItemsAt indexes: IndexSet, with event: NSEvent) -> Bool
```

## Parameters

- `collectionView`: The collection view containing the items to be dragged.
- `indexes`: The indexes of the items to be dragged.
- `event`: The mouse event that initiated the drag action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the collection view can begin the drag operation for the specified items or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Implement this method when you want selective control over the initiation of drag operations. In your implementation, use the provided information to determine whether the drag operation should occur and return the appropriate return value. For example, you might return [false](https://developer.apple.com/documentation/swift/false) if your interface does not allow the user to drag the specified items.

If you do not implement this method in your delegate object, the collection view assumes a return value of [true](https://developer.apple.com/documentation/swift/true) and begins the drag operation.

## See Also

### Legacy Collection View Support

- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:canDragItemsAtIndexes:withEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean indicating whether the collection view can begin dragging the specified items.

## Declaration

```objectivec
- (BOOL) collectionView:(NSCollectionView *) collectionView canDragItemsAtIndexes:(NSIndexSet *) indexes withEvent:(NSEvent *) event;
```

## Parameters

- `collectionView`: The collection view containing the items to be dragged.
- `indexes`: The indexes of the items to be dragged.
- `event`: The mouse event that initiated the drag action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the collection view can begin the drag operation for the specified items or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Implement this method when you want selective control over the initiation of drag operations. In your implementation, use the provided information to determine whether the drag operation should occur and return the appropriate return value. For example, you might return [false](https://developer.apple.com/documentation/swift/false) if your interface does not allow the user to drag the specified items.

If you do not implement this method in your delegate object, the collection view assumes a return value of [true](https://developer.apple.com/documentation/swift/true) and begins the drag operation.

## See Also

### Legacy Collection View Support

- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
