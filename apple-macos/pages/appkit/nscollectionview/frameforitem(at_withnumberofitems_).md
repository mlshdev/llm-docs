> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/frameforitem(at:withnumberofitems:)](https://developer.apple.com/documentation/appkit/nscollectionview/frameforitem(at:withnumberofitems:))

# frameForItem(at:withNumberOfItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the frame of an item based on the number of items in the collection view.

## Declaration

```swift
func frameForItem(at index: Int, withNumberOfItems numberOfItems: Int) -> NSRect
```

## Parameters

- `index`: The index of the item in the collection view.
- `numberOfItems`: The targeted number of items in the collection view. Use this parameter to specify the number of items you intend to have in the collection view, if that number is different than the actual number of items.

<a id="return-value"></a>

## Return Value

The frame rectangle that reflects where the collection view would place the item.

<a id="Discussion"></a>

## Discussion

Using the value in the `numberOfItems` parameter, this method calculates the frame rectangle of the item at the specified `index` in the collection view.

When the collection view is a drag destination, use this method (instead of the [content](content.md) method) to get the frame of items. Drag operations can change the number of items, which affects the layout of the item views.

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
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# frameForItemAtIndex:withNumberOfItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the frame of an item based on the number of items in the collection view.

## Declaration

```objectivec
- (NSRect) frameForItemAtIndex:(NSUInteger) index withNumberOfItems:(NSUInteger) numberOfItems;
```

## Parameters

- `index`: The index of the item in the collection view.
- `numberOfItems`: The targeted number of items in the collection view. Use this parameter to specify the number of items you intend to have in the collection view, if that number is different than the actual number of items.

<a id="return-value"></a>

## Return Value

The frame rectangle that reflects where the collection view would place the item.

<a id="Discussion"></a>

## Discussion

Using the value in the `numberOfItems` parameter, this method calculates the frame rectangle of the item at the specified `index` in the collection view.

When the collection view is a drag destination, use this method (instead of the [content](content.md) method) to get the frame of items. Drag operations can change the number of items, which affects the layout of the item views.

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
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
