> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:datacellfor:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:datacellfor:item:))

# outlineView(\_:dataCellFor:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the cell to use in a given column for a given item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, dataCellFor tableColumn: NSTableColumn?, item: Any) -> NSCell?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column that requires the cell. This value can be `nil`.
- `item`: The item that requires the cell.

<a id="return-value"></a>

## Return Value

The cell to use in column `tableColumn` for item `item`, or `nil`. Because the outline view might copy the cell, the cell must properly implement [copyWithZone:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/copywithzone:).

<a id="Discussion"></a>

## Discussion

You can return a different data cell for any table column and item combination. Alternatively, you can return a full-width cell for the entire row.

If `tableColumn` is non-`nil`, you can return a cell. In most cases, however, you default to returning the result from [tableView(\_:dataCellFor:row:)](../nstableviewdelegate/tableview%28__datacellfor_row_%29.md).

At the time of drawing, the outline view calls each row identified by `item` with a `nil` value for `tableColumn`. At this point, you can return a cell that the system can use to draw the entire row, acting as a group.

If you return a cell for the `nil` table column, prepare the other corresponding data source implementations and delegate methods to accept a `nil` value for `tableColumn`. If you don’t return a cell for the `nil` table column, the outline view calls this method once for each column, as usual.

## See Also

### Displaying Cells

- [outlineView(\_:willDisplayCell:for:item:)](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView(\_:willDisplayOutlineCell:for:item:)](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView(\_:shouldShowOutlineCellForItem:)](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView(\_:shouldShowCellExpansionFor:item:)](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

# outlineView:dataCellForTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the cell to use in a given column for a given item.

## Declaration

```objectivec
- (NSCell *) outlineView:(NSOutlineView *) outlineView dataCellForTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column that requires the cell. This value can be `nil`.
- `item`: The item that requires the cell.

<a id="return-value"></a>

## Return Value

The cell to use in column `tableColumn` for item `item`, or `nil`. Because the outline view might copy the cell, the cell must properly implement [copyWithZone:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/copywithzone:).

<a id="Discussion"></a>

## Discussion

You can return a different data cell for any table column and item combination. Alternatively, you can return a full-width cell for the entire row.

If `tableColumn` is non-`nil`, you can return a cell. In most cases, however, you default to returning the result from [tableView:dataCellForTableColumn:row:](../nstableviewdelegate/tableview%28__datacellfor_row_%29.md).

At the time of drawing, the outline view calls each row identified by `item` with a `nil` value for `tableColumn`. At this point, you can return a cell that the system can use to draw the entire row, acting as a group.

If you return a cell for the `nil` table column, prepare the other corresponding data source implementations and delegate methods to accept a `nil` value for `tableColumn`. If you don’t return a cell for the `nil` table column, the outline view calls this method once for each column, as usual.

## See Also

### Displaying Cells

- [outlineView:willDisplayCell:forTableColumn:item:](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView:willDisplayOutlineCell:forTableColumn:item:](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView:shouldShowOutlineCellForItem:](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView:shouldShowCellExpansionForTableColumn:item:](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.
