> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/candragrows(with:at:)](https://developer.apple.com/documentation/appkit/nstableview/candragrows(with:at:))

# canDragRows(with:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.

## Declaration

```swift
func canDragRows(with rowIndexes: IndexSet, at mouseDownPoint: NSPoint) -> Bool
```

## Parameters

- `rowIndexes`: The row indexes to drag.
- `mouseDownPoint`: The location where the drag was initiated.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to disallow the drag.

## See Also

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow(\_:dropOperation:)](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

# canDragRowsWithIndexes:atPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.

## Declaration

```objectivec
- (BOOL) canDragRowsWithIndexes:(NSIndexSet *) rowIndexes atPoint:(NSPoint) mouseDownPoint;
```

## Parameters

- `rowIndexes`: The row indexes to drag.
- `mouseDownPoint`: The location where the drag was initiated.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to disallow the drag.

## See Also

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow:dropOperation:](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.
