> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/draggingimageforitems(at:with:offset:)-951w7](https://developer.apple.com/documentation/appkit/nscollectionview/draggingimageforitems(at:with:offset:)-951w7)

# draggingImageForItems(at:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

This method computes and returns an image to use for dragging.

## Declaration

```swift
func draggingImageForItems(at indexes: IndexSet, with event: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage
```

## Parameters

- `indexes`: The index set of the items to be dragged.
- `event`: Mouse drag event.
- `dragImageOffset`: An in/out parameter that will initially be set to [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint). it can be modified to reposition the returned image. A `dragImageOffset` of [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint) will cause the image to be centered under the mouse.

<a id="return-value"></a>

## Return Value

An image containing a rendering of the visible portions of the views for each item.

<a id="Discussion"></a>

## Discussion

You can override the default image by subclassing NSCollectionView and overriding this method, or by implementing the [collectionView(\_:draggingImageForItemsAt:with:offset:)](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) delegate method, it will be preferred over this method.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItem(forRepresentedObject:)](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [item(at:)](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItem(at:)](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItem(at:withNumberOfItems:)](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# draggingImageForItemsAtIndexes:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

This method computes and returns an image to use for dragging.

## Declaration

```objectivec
- (NSImage *) draggingImageForItemsAtIndexes:(NSIndexSet *) indexes withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `indexes`: The index set of the items to be dragged.
- `event`: Mouse drag event.
- `dragImageOffset`: An in/out parameter that will initially be set to [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint). it can be modified to reposition the returned image. A `dragImageOffset` of [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint) will cause the image to be centered under the mouse.

<a id="return-value"></a>

## Return Value

An image containing a rendering of the visible portions of the views for each item.

<a id="Discussion"></a>

## Discussion

You can override the default image by subclassing NSCollectionView and overriding this method, or by implementing the [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) delegate method, it will be preferred over this method.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItemForRepresentedObject:](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [itemAtIndex:](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItemAtIndex:](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItemAtIndex:withNumberOfItems:](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
