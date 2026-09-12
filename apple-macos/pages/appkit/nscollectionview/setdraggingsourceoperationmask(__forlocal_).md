> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/setdraggingsourceoperationmask(_:forlocal:)](https://developer.apple.com/documentation/appkit/nscollectionview/setdraggingsourceoperationmask(_:forlocal:))

# setDraggingSourceOperationMask(\_:forLocal:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Configures the drag operation mask.

## Declaration

```swift
func setDraggingSourceOperationMask(_ dragOperationMask: NSDragOperation, forLocal localDestination: Bool)
```

## Parameters

- `dragOperationMask`: The types of drag operations allowed.
- `localDestination`: If [true](https://developer.apple.com/documentation/swift/true), mask applies when the drag destination object is in the same application as the receiver; if [false](https://developer.apple.com/documentation/swift/false), mask applies when the destination object is outside the receiver’s application.

<a id="Discussion"></a>

## Discussion

This method configures the default value returned from [draggingSourceOperationMaskForLocal:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/draggingsourceoperationmaskforlocal:). By default, this method returns [every](../nsdragoperation/every.md) when `localDestination` is [true](https://developer.apple.com/documentation/swift/true) and [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) when `localDestination` is [false](https://developer.apple.com/documentation/swift/false). `NSCollectionView` will save the values you set for each `localDestination` value.

You typically will invoke this method, and not override it.

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
- [draggingImageForItems(at:with:offset:)](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.

# setDraggingSourceOperationMask:forLocal: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Configures the drag operation mask.

## Declaration

```objectivec
- (void) setDraggingSourceOperationMask:(NSDragOperation) dragOperationMask forLocal:(BOOL) localDestination;
```

## Parameters

- `dragOperationMask`: The types of drag operations allowed.
- `localDestination`: If [true](https://developer.apple.com/documentation/swift/true), mask applies when the drag destination object is in the same application as the receiver; if [false](https://developer.apple.com/documentation/swift/false), mask applies when the destination object is outside the receiver’s application.

<a id="Discussion"></a>

## Discussion

This method configures the default value returned from [draggingSourceOperationMaskForLocal:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/draggingsourceoperationmaskforlocal:). By default, this method returns [NSDragOperationEvery](../nsdragoperation/every.md) when `localDestination` is [true](https://developer.apple.com/documentation/swift/true) and [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) when `localDestination` is [false](https://developer.apple.com/documentation/swift/false). `NSCollectionView` will save the values you set for each `localDestination` value.

You typically will invoke this method, and not override it.

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
- [draggingImageForItemsAtIndexes:withEvent:offset:](draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
