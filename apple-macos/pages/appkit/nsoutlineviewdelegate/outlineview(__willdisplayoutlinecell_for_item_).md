> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:willdisplayoutlinecell:for:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:willdisplayoutlinecell:for:item:))

# outlineView(\_:willDisplayOutlineCell:for:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, willDisplayOutlineCell cell: Any, for tableColumn: NSTableColumn?, item: Any)
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell.
- `tableColumn`: The table column.
- `item`: The item.

<a id="Discussion"></a>

## Discussion

Informs the delegate that `outlineView` is about to display `cell`—an expandable cell (a cell that has the expansion symbol)—for the column and item specified by `tableColumn` and `item`. The delegate can modify cell to alter its display attributes.

This method is not invoked when `outlineView` is about to display a non-expandable cell.

## See Also

### Displaying Cells

- [outlineView(\_:willDisplayCell:for:item:)](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView(\_:dataCellFor:item:)](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView(\_:shouldShowOutlineCellForItem:)](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView(\_:shouldShowCellExpansionFor:item:)](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

# outlineView:willDisplayOutlineCell:forTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView willDisplayOutlineCell:(id) cell forTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell.
- `tableColumn`: The table column.
- `item`: The item.

<a id="Discussion"></a>

## Discussion

Informs the delegate that `outlineView` is about to display `cell`—an expandable cell (a cell that has the expansion symbol)—for the column and item specified by `tableColumn` and `item`. The delegate can modify cell to alter its display attributes.

This method is not invoked when `outlineView` is about to display a non-expandable cell.

## See Also

### Displaying Cells

- [outlineView:willDisplayCell:forTableColumn:item:](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView:dataCellForTableColumn:item:](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView:shouldShowOutlineCellForItem:](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView:shouldShowCellExpansionForTableColumn:item:](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.
