> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/candragrows(with:incolumn:with:)](https://developer.apple.com/documentation/appkit/nsbrowser/candragrows(with:incolumn:with:))

# canDragRows(with:inColumn:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.

## Declaration

```swift
func canDragRows(with rowIndexes: IndexSet, inColumn column: Int, with event: NSEvent) -> Bool
```

## Parameters

- `rowIndexes`: Rows the user is dragging
- `column`: Column containing the rows the user is dragging.
- `event`: Mouse-drag event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when `rowIndexes` identifies at least one row and all the identified rows are enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [browser(\_:canDragRowsWith:inColumn:with:)](../nsbrowserdelegate/browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.

### Dragging

- [setDraggingSourceOperationMask(\_:forLocal:)](setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [draggingImageForRows(with:inColumn:with:offset:)](draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

# canDragRowsWithIndexes:inColumn:withEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.

## Declaration

```objectivec
- (BOOL) canDragRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column withEvent:(NSEvent *) event;
```

## Parameters

- `rowIndexes`: Rows the user is dragging
- `column`: Column containing the rows the user is dragging.
- `event`: Mouse-drag event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when `rowIndexes` identifies at least one row and all the identified rows are enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](../nsbrowserdelegate/browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.

### Dragging

- [setDraggingSourceOperationMask:forLocal:](setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.
