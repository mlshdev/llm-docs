> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/draggingimageforitems(at:with:offset:)-7rc4k](https://developer.apple.com/documentation/appkit/nscollectionview/draggingimageforitems(at:with:offset:)-7rc4k)

# draggingImageForItems(at:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns an image to use for dragging the specified items.

## Declaration

```swift
func draggingImageForItems(at indexPaths: Set<IndexPath>, with event: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage
```

## Parameters

- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items being dragged.
- `event`: The mouse-down event that began the drag operation.
- `dragImageOffset`: The offset value to use when positioning the image. On input, the point is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which centers the returned image under the mouse. Custom implementations can return a different point that repositions the drag image by the specified offset values.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an image using the visible portions of the dragged items. The resulting image is a snapshot of the dragged items as they currently appear in the collection view but rendered with additional transparency to indicate they are part of a drag operation. This method also updates the `dragImageOffset` parameter to an appropriate point for dragging the resulting image.

If the delegate implements the [collectionView(\_:draggingImageForItemsAt:with:offset:)](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md) method, the collection view method obtains the drag image from that method instead. If the delegate does not implement that method, the collection view uses the image returned by this method.

# draggingImageForItemsAtIndexPaths:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns an image to use for dragging the specified items.

## Declaration

```objectivec
- (NSImage *) draggingImageForItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items being dragged.
- `event`: The mouse-down event that began the drag operation.
- `dragImageOffset`: The offset value to use when positioning the image. On input, the point is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), which centers the returned image under the mouse. Custom implementations can return a different point that repositions the drag image by the specified offset values.

<a id="return-value"></a>

## Return Value

The image to use for the dragged items.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an image using the visible portions of the dragged items. The resulting image is a snapshot of the dragged items as they currently appear in the collection view but rendered with additional transparency to indicate they are part of a drag operation. This method also updates the `dragImageOffset` parameter to an appropriate point for dragging the resulting image.

If the delegate implements the [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](../nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md) method, the collection view method obtains the drag image from that method instead. If the delegate does not implement that method, the collection view uses the image returned by this method.
