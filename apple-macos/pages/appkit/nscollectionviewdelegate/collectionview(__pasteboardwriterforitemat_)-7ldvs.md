> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:pasteboardwriterforitemat:)-7ldvs](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:pasteboardwriterforitemat:)-7ldvs)

# collectionView(\_:pasteboardWriterForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Provides the pasteboard writer for the item at the specified index

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, pasteboardWriterForItemAt index: Int) -> (any NSPasteboardWriting)?
```

## Parameters

- `collectionView`: The collection view making the request.
- `index`: The index of the item requiring a pasteboard writer.

<a id="return-value"></a>

## Return Value

The pasteboard writer object to use for managing the item data. Return `nil` to prevent the collection view from dragging the item.

<a id="Discussion"></a>

## Discussion

The collection view calls this method for each item involved in the drag operation after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should create and return the pasteboard writer—an object conforming to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol—to use for providing the item’s data. Using the object you provide, the collection view creates an [NSDraggingItem](../nsdraggingitem.md) object for you and configures its [draggingFrame](../nsdraggingitem/draggingframe.md) and [imageComponents](../nsdraggingitem/imagecomponents.md) properties for you using information from the item at the specified index path.

If you implement this method, the collection view does not call the [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) of your delegate or the [draggingImageForItems(at:with:offset:)](../nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md) method of [NSCollectionView](../nscollectionview.md).

## See Also

### Legacy Collection View Support

- [collectionView(\_:canDragItemsAt:with:)](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:writeItemsAt:to:)](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

# collectionView:pasteboardWriterForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Provides the pasteboard writer for the item at the specified index

## Declaration

```objectivec
- (id<NSPasteboardWriting>) collectionView:(NSCollectionView *) collectionView pasteboardWriterForItemAtIndex:(NSUInteger) index;
```

## Parameters

- `collectionView`: The collection view making the request.
- `index`: The index of the item requiring a pasteboard writer.

<a id="return-value"></a>

## Return Value

The pasteboard writer object to use for managing the item data. Return `nil` to prevent the collection view from dragging the item.

<a id="Discussion"></a>

## Discussion

The collection view calls this method for each item involved in the drag operation after it has determined that a drag should begin but before the drag operation has started.  Your implementation of this method should create and return the pasteboard writer—an object conforming to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol—to use for providing the item’s data. Using the object you provide, the collection view creates an [NSDraggingItem](../nsdraggingitem.md) object for you and configures its [draggingFrame](../nsdraggingitem/draggingframe.md) and [imageComponents](../nsdraggingitem/imagecomponents.md) properties for you using information from the item at the specified index path.

If you implement this method, the collection view does not call the [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) of your delegate or the [draggingImageForItemsAtIndexes:withEvent:offset:](../nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md) method of [NSCollectionView](../nscollectionview.md).

## See Also

### Legacy Collection View Support

- [collectionView:canDragItemsAtIndexes:withEvent:](collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:writeItemsAtIndexes:toPasteboard:](collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.
