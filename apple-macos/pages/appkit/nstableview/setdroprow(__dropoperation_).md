> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/setdroprow(_:dropoperation:)](https://developer.apple.com/documentation/appkit/nstableview/setdroprow(_:dropoperation:))

# setDropRow(\_:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Retargets the proposed drop operation.

## Declaration

```swift
func setDropRow(_ row: Int, dropOperation: NSTableView.DropOperation)
```

## Parameters

- `row`: The target row index.
- `dropOperation`: The drop operation. Supported values are specified by [NSTableView.DropOperation](dropoperation.md).

<a id="Discussion"></a>

## Discussion

For example, to specify a drop on the second row, specify `row` as 1, and `operation` as `NSTableViewDropOn`. To specify a drop below the last row, specify `row` as `[self numberOfRows]` and `operation` as `NSTableViewDropAbove`.

Passing a value of `–1` for `row` and `NSTableViewDropOn` as the `operation` causes the entire table view to be highlighted rather than a specific row. This is useful if the data displayed by the table view does not allow the user to drop items at a specific row location.

## See Also

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRows(with:at:)](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.

# setDropRow:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Retargets the proposed drop operation.

## Declaration

```objectivec
- (void) setDropRow:(NSInteger) row dropOperation:(NSTableViewDropOperation) dropOperation;
```

## Parameters

- `row`: The target row index.
- `dropOperation`: The drop operation. Supported values are specified by [NSTableViewDropOperation](dropoperation.md).

<a id="Discussion"></a>

## Discussion

For example, to specify a drop on the second row, specify `row` as 1, and `operation` as `NSTableViewDropOn`. To specify a drop below the last row, specify `row` as `[self numberOfRows]` and `operation` as `NSTableViewDropAbove`.

Passing a value of `–1` for `row` and `NSTableViewDropOn` as the `operation` causes the entire table view to be highlighted rather than a specific row. This is useful if the data displayed by the table view does not allow the user to drop items at a specific row location.

## See Also

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRowsWithIndexes:atPoint:](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
