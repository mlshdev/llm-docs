> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:writeitemsat:to:)-a1lk](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:writeitemsat:to:)-a1lk)

# collectionView(\_:writeItemsAt:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.15)

Invoked after it has been determined that a drag should begin, but before the drag has been started.

> Use -collectionView:pasteboardWriterForItemAtIndexPath: instead

## Declaration

```swift
optional func collectionView(_ collectionView: NSCollectionView, writeItemsAt indexes: IndexSet, to pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `collectionView`: The collection view that send the message.
- `indexes`: The indexes of the items to write to the pasteboard.
- `pasteboard`: The pasteboard containing the content from the dragged items.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to begin the drag, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

To start the drag, you must first declare the pasteboard types that are supported by sending `pasteboard` a [declareTypes(\_:owner:)](../nspasteboard/declaretypes%28__owner_%29.md) method. You then place the data for the items at the specified indexes on `pasteboard`, and return [true](https://developer.apple.com/documentation/swift/true) from the method.

The drag image and other drag related information will be set up and provided by the view once this call returns [true](https://developer.apple.com/documentation/swift/true).

You need to implement this method for your collection view to be a drag source.

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:writeItemsAtIndexes:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.15)

Invoked after it has been determined that a drag should begin, but before the drag has been started.

> Use -collectionView:pasteboardWriterForItemAtIndexPath: instead

## Declaration

```objectivec
- (BOOL) collectionView:(NSCollectionView *) collectionView writeItemsAtIndexes:(NSIndexSet *) indexes toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `collectionView`: The collection view that send the message.
- `indexes`: The indexes of the items to write to the pasteboard.
- `pasteboard`: The pasteboard containing the content from the dragged items.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to begin the drag, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

To start the drag, you must first declare the pasteboard types that are supported by sending `pasteboard` a [declareTypes:owner:](../nspasteboard/declaretypes%28__owner_%29.md) method. You then place the data for the items at the specified indexes on `pasteboard`, and return [true](https://developer.apple.com/documentation/swift/true) from the method.

The drag image and other drag related information will be set up and provided by the view once this call returns [true](https://developer.apple.com/documentation/swift/true).

You need to implement this method for your collection view to be a drag source.

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
