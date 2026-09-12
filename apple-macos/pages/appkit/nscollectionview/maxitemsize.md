> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/maxitemsize](https://developer.apple.com/documentation/appkit/nscollectionview/maxitemsize)

# maxItemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

The maximum size (in points) of items in the collection view grid.

> Use NSCollectionViewGridLayout as the receiver's collectionViewLayout, setting its maximumItemSize instead

## Declaration

```swift
var maxItemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the size to (`0`, `0`) means that there is no maximum grid size. The default value of this property is (`0`, `0`). If an item’s view  is resizable, set the value to the maximum size that the view should use.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItem(forRepresentedObject:)](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [item(at:)](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItem(at:)](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItem(at:withNumberOfItems:)](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# maxItemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

The maximum size (in points) of items in the collection view grid.

> Use NSCollectionViewGridLayout as the receiver's collectionViewLayout, setting its maximumItemSize instead

## Declaration

```objectivec
@property NSSize maxItemSize;
```

<a id="Discussion"></a>

## Discussion

Setting the size to (`0`, `0`) means that there is no maximum grid size. The default value of this property is (`0`, `0`). If an item’s view  is resizable, set the value to the maximum size that the view should use.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItemForRepresentedObject:](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [itemAtIndex:](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItemAtIndex:](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItemAtIndex:withNumberOfItems:](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
