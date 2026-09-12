> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/draggingimageforrows(with:incolumn:with:offset:)](https://developer.apple.com/documentation/appkit/nsbrowser/draggingimageforrows(with:incolumn:with:offset:))

# draggingImageForRows(with:inColumn:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Provides an image to represent dragged rows during a drag operation on the browser.

## Declaration

```swift
func draggingImageForRows(with rowIndexes: IndexSet, inColumn column: Int, with event: NSEvent, offset dragImageOffset: NSPointPointer?) -> NSImage?
```

## Parameters

- `rowIndexes`: Rows the user is dragging.
- `column`: Column with the rows the user is dragging.
- `event`: Mouse drag event.
- `dragImageOffset`: Offset for the returned image:

  - [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint): The image is centered under the pointer.

<a id="return-value"></a>

## Return Value

Image representing the visible cells identified by rowIndexes.

## See Also

### Related Documentation

- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](../nsbrowserdelegate/browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.

### Dragging

- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [canDragRows(with:inColumn:with:)](candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.

# draggingImageForRowsWithIndexes:inColumn:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Provides an image to represent dragged rows during a drag operation on the browser.

## Declaration

```objectivec
- (NSImage *) draggingImageForRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `rowIndexes`: Rows the user is dragging.
- `column`: Column with the rows the user is dragging.
- `event`: Mouse drag event.
- `dragImageOffset`: Offset for the returned image:

  - [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint): The image is centered under the pointer.

<a id="return-value"></a>

## Return Value

Image representing the visible cells identified by rowIndexes.

## See Also

### Related Documentation

- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](../nsbrowserdelegate/browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.

### Dragging

- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [canDragRowsWithIndexes:inColumn:withEvent:](candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.
