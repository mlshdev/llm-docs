> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:heightofrowbyitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:heightofrowbyitem:))

# outlineView(\_:heightOfRowByItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the height in points of the row containing `item`.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, heightOfRowByItem item: Any) -> CGFloat
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The row item.

<a id="return-value"></a>

## Return Value

The height of the row.

<a id="Discussion"></a>

## Discussion

Values returned by this method should not include intercell spacing and must be greater than `0`.

Implement this method to support an outline view with varying row heights.

For large tables in particular, you should make sure that this method is efficient. `NSOutlineView` may cache the values this method returns, so if you would like to change a row’s height make sure to invalidate the row height by calling [noteHeightOfRows(withIndexesChanged:)](../nstableview/noteheightofrows%28withindexeschanged_%29.md). `NSOutlineView` automatically invalidates its entire row height cache in [reloadData()](../nstableview/reloaddata%28%29.md) and [noteNumberOfRowsChanged()](../nstableview/notenumberofrowschanged%28%29.md).

If you call [view(atColumn:row:makeIfNecessary:)](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md) or [rowView(atRow:makeIfNecessary:)](../nstableview/rowview%28atrow_makeifnecessary_%29.md) within your implementation of this method, an exception is thrown.

> **Important**

>  To avoid the possibility of a hang due to unexpected recursion, don’t call geometry-calculating methods such as [bounds](../nsview/bounds.md), [rect(ofColumn:)](../nstableview/rect%28ofcolumn_%29.md), or any `NSTableView` method that calls [tile()](../nstableview/tile%28%29.md) within your implementation of this method.

## See Also

### Customizing Column and Row Sizes

- [outlineView(\_:sizeToFitWidthOfColumn:)](outlineview%28__sizetofitwidthofcolumn_%29.md): Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

# outlineView:heightOfRowByItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the height in points of the row containing `item`.

## Declaration

```objectivec
- (CGFloat) outlineView:(NSOutlineView *) outlineView heightOfRowByItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The row item.

<a id="return-value"></a>

## Return Value

The height of the row.

<a id="Discussion"></a>

## Discussion

Values returned by this method should not include intercell spacing and must be greater than `0`.

Implement this method to support an outline view with varying row heights.

For large tables in particular, you should make sure that this method is efficient. `NSOutlineView` may cache the values this method returns, so if you would like to change a row’s height make sure to invalidate the row height by calling [noteHeightOfRowsWithIndexesChanged:](../nstableview/noteheightofrows%28withindexeschanged_%29.md). `NSOutlineView` automatically invalidates its entire row height cache in [reloadData](../nstableview/reloaddata%28%29.md) and [noteNumberOfRowsChanged](../nstableview/notenumberofrowschanged%28%29.md).

If you call [viewAtColumn:row:makeIfNecessary:](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md) or [rowViewAtRow:makeIfNecessary:](../nstableview/rowview%28atrow_makeifnecessary_%29.md) within your implementation of this method, an exception is thrown.

> **Important**

>  To avoid the possibility of a hang due to unexpected recursion, don’t call geometry-calculating methods such as [bounds](../nsview/bounds.md), [rectOfColumn:](../nstableview/rect%28ofcolumn_%29.md), or any `NSTableView` method that calls [tile](../nstableview/tile%28%29.md) within your implementation of this method.

## See Also

### Customizing Column and Row Sizes

- [outlineView:sizeToFitWidthOfColumn:](outlineview%28__sizetofitwidthofcolumn_%29.md): Invoked to allow the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.
