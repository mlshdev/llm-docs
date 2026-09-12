> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/newitem(forrepresentedobject:)](https://developer.apple.com/documentation/appkit/nscollectionview/newitem(forrepresentedobject:))

# newItem(forRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the collection view item that is used for the specified object.

> Use -\[NSCollectionViewDataSource collectionView:itemForRepresentedObjectAtIndexPath:\] instead

## Declaration

```swift
func newItem(forRepresentedObject object: Any) -> NSCollectionViewItem
```

## Parameters

- `object`: The content object that the collection view item will represent.

<a id="return-value"></a>

## Return Value

An initialized collection view item with the specified object and the appropriate view set. The collection view item should not be autoreleased.

<a id="Discussion"></a>

## Discussion

Whenever possible, register classes or nib files for your items instead of using this property. For more information, see Creating Collection View Items.

Subclasses can override this method if the collection view items are not generated from a prototype or if the prototype view needs to be modified. The subclass is responsible for setting the `view`  and representedObject of the new collection view item.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [item(at:)](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItem(at:)](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItem(at:withNumberOfItems:)](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# newItemForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the collection view item that is used for the specified object.

> Use -\[NSCollectionViewDataSource collectionView:itemForRepresentedObjectAtIndexPath:\] instead

## Declaration

```objectivec
- (NSCollectionViewItem *) newItemForRepresentedObject:(id) object;
```

## Parameters

- `object`: The content object that the collection view item will represent.

<a id="return-value"></a>

## Return Value

An initialized collection view item with the specified object and the appropriate view set. The collection view item should not be autoreleased.

<a id="Discussion"></a>

## Discussion

Whenever possible, register classes or nib files for your items instead of using this property. For more information, see Creating Collection View Items.

Subclasses can override this method if the collection view items are not generated from a prototype or if the prototype view needs to be modified. The subclass is responsible for setting the `view`  and representedObject of the new collection view item.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [itemAtIndex:](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItemAtIndex:](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItemAtIndex:withNumberOfItems:](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
