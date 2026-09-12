> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/frameforitem(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/frameforitem(at:))

# frameForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the frame of the collection view item at the specified index.

## Declaration

```swift
func frameForItem(at index: Int) -> NSRect
```

## Parameters

- `index`: The index of the collection view item.

<a id="return-value"></a>

## Return Value

The frame calculated by the receiver where it intends to place the subview for the [NSCollectionViewItem](../nscollectionviewitem.md) at the given index. The rectangle is returned in the collection view’s coordinate system.

<a id="Discussion"></a>

## Discussion

You can use this method in the [collectionView(\_:draggingImageForItemsAt:with:offset:)](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) method to determine which views are in the visible portion of the enclosing scroll view.

Overriding this method will have no effect on the collection view’s subview layout.

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
- [frameForItem(at:withNumberOfItems:)](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# frameForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the frame of the collection view item at the specified index.

## Declaration

```objectivec
- (NSRect) frameForItemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the collection view item.

<a id="return-value"></a>

## Return Value

The frame calculated by the receiver where it intends to place the subview for the [NSCollectionViewItem](../nscollectionviewitem.md) at the given index. The rectangle is returned in the collection view’s coordinate system.

<a id="Discussion"></a>

## Discussion

You can use this method in the [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md) method to determine which views are in the visible portion of the enclosing scroll view.

Overriding this method will have no effect on the collection view’s subview layout.

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
- [frameForItemAtIndex:withNumberOfItems:](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
