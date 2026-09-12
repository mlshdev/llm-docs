> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/verticalmotioncanbegindrag](https://developer.apple.com/documentation/appkit/nstableview/verticalmotioncanbegindrag)

# verticalMotionCanBeginDrag (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether vertical motion is treated as a drag or selection change.

## Declaration

```swift
var verticalMotionCanBeginDrag: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which indicates that a vertical drag motion begins a drag. In this case a vertical drag will drag-select rows. Most often, you would want to disable vertical dragging when it’s expected that horizontal dragging is the natural motion.

> **Note**

>  Horizontal motion is always a valid motion to begin a drag.

## See Also

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRows(with:at:)](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow(\_:dropOperation:)](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

# verticalMotionCanBeginDrag (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether vertical motion is treated as a drag or selection change.

## Declaration

```objectivec
@property BOOL verticalMotionCanBeginDrag;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which indicates that a vertical drag motion begins a drag. In this case a vertical drag will drag-select rows. Most often, you would want to disable vertical dragging when it’s expected that horizontal dragging is the natural motion.

> **Note**

>  Horizontal motion is always a valid motion to begin a drag.

## See Also

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRowsWithIndexes:atPoint:](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md): The feedback style displayed when the user drags over the table view.
- [setDropRow:dropOperation:](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.
