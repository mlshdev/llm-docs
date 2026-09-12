> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/setdraggingsourceoperationmask(_:forlocal:)](https://developer.apple.com/documentation/appkit/nstableview/setdraggingsourceoperationmask(_:forlocal:))

# setDraggingSourceOperationMask(\_:forLocal:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.

## Declaration

```swift
func setDraggingSourceOperationMask(_ mask: NSDragOperation, forLocal isLocal: Bool)
```

## Parameters

- `mask`: The drag operation mask. See [NSDragOperation](../nsdragoperation.md) for the supported values.
- `isLocal`: [true](https://developer.apple.com/documentation/swift/true) if the destination is the same application, otherwise [false](https://developer.apple.com/documentation/swift/false). In either case the specified `mask` value is archived and used.

## See Also

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRows(with:at:)](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow(\_:dropOperation:)](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

# setDraggingSourceOperationMask:forLocal: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.

## Declaration

```objectivec
- (void) setDraggingSourceOperationMask:(NSDragOperation) mask forLocal:(BOOL) isLocal;
```

## Parameters

- `mask`: The drag operation mask. See [NSDragOperation](../nsdragoperation.md) for the supported values.
- `isLocal`: [true](https://developer.apple.com/documentation/swift/true) if the destination is the same application, otherwise [false](https://developer.apple.com/documentation/swift/false). In either case the specified `mask` value is archived and used.

## See Also

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRowsWithIndexes:atPoint:](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow:dropOperation:](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.
