> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/dragimageforrows(with:tablecolumns:event:offset:)](https://developer.apple.com/documentation/appkit/nstableview/dragimageforrows(with:tablecolumns:event:offset:))

# dragImageForRows(with:tableColumns:event:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Computes and returns an image to use for dragging.

## Declaration

```swift
func dragImageForRows(with dragRows: IndexSet, tableColumns: [NSTableColumn], event dragEvent: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage
```

## Parameters

- `dragRows`: An index set containing the row indexes that should be in the image.
- `tableColumns`: An array of table columns that should be in the image.
- `dragEvent`: The event that initiated the drag.
- `dragImageOffset`: An in/out parameter specifying the offset of the cursor in the image, the default value is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint). Returning [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint) causes the cursor to be centered.

<a id="return-value"></a>

## Return Value

An `NSImage` containing a custom image for the specified rows and columns participating in the drag.

## See Also

### Dragging

- [canDragRows(with:at:)](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow(\_:dropOperation:)](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

# dragImageForRowsWithIndexes:tableColumns:event:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Computes and returns an image to use for dragging.

## Declaration

```objectivec
- (NSImage *) dragImageForRowsWithIndexes:(NSIndexSet *) dragRows tableColumns:(NSArray<NSTableColumn *> *) tableColumns event:(NSEvent *) dragEvent offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `dragRows`: An index set containing the row indexes that should be in the image.
- `tableColumns`: An array of table columns that should be in the image.
- `dragEvent`: The event that initiated the drag.
- `dragImageOffset`: An in/out parameter specifying the offset of the cursor in the image, the default value is [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint). Returning [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint) causes the cursor to be centered.

<a id="return-value"></a>

## Return Value

An `NSImage` containing a custom image for the specified rows and columns participating in the drag.

## See Also

### Dragging

- [canDragRowsWithIndexes:atPoint:](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow:dropOperation:](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.
