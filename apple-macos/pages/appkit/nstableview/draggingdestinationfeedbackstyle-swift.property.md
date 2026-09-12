> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/draggingdestinationfeedbackstyle-swift.property](https://developer.apple.com/documentation/appkit/nstableview/draggingdestinationfeedbackstyle-swift.property)

# draggingDestinationFeedbackStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The feedback style displayed when the user drags over the table view.

## Declaration

```swift
var draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSTableView.DraggingDestinationFeedbackStyle.regular](draggingdestinationfeedbackstyle-swift.enum/regular.md). However, changing the selection highlight style to [NSTableView.SelectionHighlightStyle.sourceList](selectionhighlightstyle-swift.enum/sourcelist.md) automatically changes the value of this property to [NSTableView.DraggingDestinationFeedbackStyle.sourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md).

## See Also

### Dragging

- [dragImageForRows(with:tableColumns:event:offset:)](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRows(with:at:)](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [setDropRow(\_:dropOperation:)](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.

# draggingDestinationFeedbackStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The feedback style displayed when the user drags over the table view.

## Declaration

```objectivec
@property NSTableViewDraggingDestinationFeedbackStyle draggingDestinationFeedbackStyle;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSTableViewDraggingDestinationFeedbackStyleRegular](draggingdestinationfeedbackstyle-swift.enum/regular.md). However, changing the selection highlight style to [NSTableViewSelectionHighlightStyleSourceList](selectionhighlightstyle-swift.enum/sourcelist.md) automatically changes the value of this property to [NSTableViewDraggingDestinationFeedbackStyleSourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md).

## See Also

### Dragging

- [dragImageForRowsWithIndexes:tableColumns:event:offset:](dragimageforrows%28with_tablecolumns_event_offset_%29.md): Computes and returns an image to use for dragging.
- [canDragRowsWithIndexes:atPoint:](candragrows%28with_at_%29.md): Returns a Boolean value indicating whether the table view allows dragging the rows with the drag initiated at the specified point.
- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Sets the default operation mask returned by `draggingSourceOperationMaskForLocal:` to `mask`.
- [verticalMotionCanBeginDrag](verticalmotioncanbegindrag.md): A Boolean value indicating whether vertical motion is treated as a drag or selection change.
- [setDropRow:dropOperation:](setdroprow%28__dropoperation_%29.md): Retargets the proposed drop operation.
