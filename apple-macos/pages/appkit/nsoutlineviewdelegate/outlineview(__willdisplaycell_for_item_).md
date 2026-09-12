> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:willdisplaycell:for:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:willdisplaycell:for:item:))

# outlineView(\_:willDisplayCell:for:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the cell specified by the column and item will be displayed.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, willDisplayCell cell: Any, for tableColumn: NSTableColumn?, item: Any)
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell.
- `tableColumn`: The table column.
- `item`: The item.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to modify `cell` to provide further setup for the `cell` in `tableColumn` and `item`. It is not safe to do drawing inside this method—you should only set up state for `cell`.

## See Also

### Displaying Cells

- [outlineView(\_:willDisplayOutlineCell:for:item:)](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView(\_:dataCellFor:item:)](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView(\_:shouldShowOutlineCellForItem:)](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView(\_:shouldShowCellExpansionFor:item:)](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

# outlineView:willDisplayCell:forTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the cell specified by the column and item will be displayed.

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView willDisplayCell:(id) cell forTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell.
- `tableColumn`: The table column.
- `item`: The item.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to modify `cell` to provide further setup for the `cell` in `tableColumn` and `item`. It is not safe to do drawing inside this method—you should only set up state for `cell`.

## See Also

### Displaying Cells

- [outlineView:willDisplayOutlineCell:forTableColumn:item:](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView:dataCellForTableColumn:item:](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView:shouldShowOutlineCellForItem:](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
- [outlineView:shouldShowCellExpansionForTableColumn:item:](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.
