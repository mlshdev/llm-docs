> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:heightofrow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:heightofrow:))

# tableView(\_:heightOfRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Asks the delegate for the height of the specified row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, heightOfRow row: Int) -> CGFloat
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The height of the row. The height doesn’t include intercell spacing and must be greater than zero.

<a id="Discussion"></a>

## Discussion

Implement this method if your table supports varying row heights.

Although table views may cache the returned values, you should ensure that this method is efficient. When you change a row’s height you must invalidate the existing row height by calling [noteHeightOfRows(withIndexesChanged:)](../nstableview/noteheightofrows%28withindexeschanged_%29.md).  [NSTableView](../nstableview.md) automatically invalidates its entire row height cache in response to calls to [reloadData()](../nstableview/reloaddata%28%29.md) or [noteNumberOfRowsChanged()](../nstableview/notenumberofrowschanged%28%29.md).

If you call [view(atColumn:row:makeIfNecessary:)](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md) or [rowView(atRow:makeIfNecessary:)](../nstableview/rowview%28atrow_makeifnecessary_%29.md) within your implementation of this method, the table view throws an exception.

> **Important**

>  To avoid the possibility of a hang due to unexpected recursion, don’t call geometry-calculating methods such as [bounds](../nsview/bounds.md),  [rect(ofColumn:)](../nstableview/rect%28ofcolumn_%29.md), or any [NSTableView](../nstableview.md) method that calls [tile()](../nstableview/tile%28%29.md) within your implementation of this method, such as [intercellSpacing](../nstableview/intercellspacing.md). To confirm your code isn’t inadvertently causing any calls to [tile()](../nstableview/tile%28%29.md), set a breakpoint on [tile()](../nstableview/tile%28%29.md) in Xcode.

## See Also

### Setting row and column size

- [tableView(\_:sizeToFitWidthOfColumn:)](tableview%28__sizetofitwidthofcolumn_%29.md): Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.

# tableView:heightOfRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the height of the specified row.

## Declaration

```objectivec
- (CGFloat) tableView:(NSTableView *) tableView heightOfRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The height of the row. The height doesn’t include intercell spacing and must be greater than zero.

<a id="Discussion"></a>

## Discussion

Implement this method if your table supports varying row heights.

Although table views may cache the returned values, you should ensure that this method is efficient. When you change a row’s height you must invalidate the existing row height by calling [noteHeightOfRowsWithIndexesChanged:](../nstableview/noteheightofrows%28withindexeschanged_%29.md).  [NSTableView](../nstableview.md) automatically invalidates its entire row height cache in response to calls to [reloadData](../nstableview/reloaddata%28%29.md) or [noteNumberOfRowsChanged](../nstableview/notenumberofrowschanged%28%29.md).

If you call [viewAtColumn:row:makeIfNecessary:](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md) or [rowViewAtRow:makeIfNecessary:](../nstableview/rowview%28atrow_makeifnecessary_%29.md) within your implementation of this method, the table view throws an exception.

> **Important**

>  To avoid the possibility of a hang due to unexpected recursion, don’t call geometry-calculating methods such as [bounds](../nsview/bounds.md),  [rectOfColumn:](../nstableview/rect%28ofcolumn_%29.md), or any [NSTableView](../nstableview.md) method that calls [tile](../nstableview/tile%28%29.md) within your implementation of this method, such as [intercellSpacing](../nstableview/intercellspacing.md). To confirm your code isn’t inadvertently causing any calls to [tile](../nstableview/tile%28%29.md), set a breakpoint on [tile](../nstableview/tile%28%29.md) in Xcode.

## See Also

### Setting row and column size

- [tableView:sizeToFitWidthOfColumn:](tableview%28__sizetofitwidthofcolumn_%29.md): Asks the delegate to provide custom sizing behavior when a column’s resize divider is double clicked.
