> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/maxnumberofrows](https://developer.apple.com/documentation/appkit/nscollectionview/maxnumberofrows)

# maxNumberOfRows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

The maximum number of rows that the collection view displays.

> Use NSCollectionViewGridLayout as the receiver's collectionViewLayout, setting its maximumNumberOfRows instead

## Declaration

```swift
var maxNumberOfRows: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `0`, the collection view has no maximum number of rows. The default value of this property is `0`.

It is possible for a collection view to specify both a maximum number of rows and a maximum number of columns. If the number of content objects exceeds the number of displayable items (*n*=`maxNumberOfRows` \* `maxNumberOfColumns`) only the first *n* items of the content array are displayed.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItem(forRepresentedObject:)](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [item(at:)](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItem(at:)](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItem(at:withNumberOfItems:)](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

# maxNumberOfRows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

The maximum number of rows that the collection view displays.

> Use NSCollectionViewGridLayout as the receiver's collectionViewLayout, setting its maximumNumberOfRows instead

## Declaration

```objectivec
@property NSUInteger maxNumberOfRows;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `0`, the collection view has no maximum number of rows. The default value of this property is `0`.

It is possible for a collection view to specify both a maximum number of rows and a maximum number of columns. If the number of content objects exceeds the number of displayable items (*n*=`maxNumberOfRows` \* `maxNumberOfColumns`) only the first *n* items of the content array are displayed.

## See Also

### Legacy Collection View Support

- [itemPrototype](itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItemForRepresentedObject:](newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfColumns](maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [itemAtIndex:](item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItemAtIndex:](frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItemAtIndex:withNumberOfItems:](frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.
