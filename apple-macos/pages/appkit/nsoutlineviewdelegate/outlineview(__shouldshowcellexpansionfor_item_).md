> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldshowcellexpansionfor:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldshowcellexpansionfor:item:))

# outlineView(\_:shouldShowCellExpansionFor:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to control cell expansion for a specific column and item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldShowCellExpansionFor tableColumn: NSTableColumn?, item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow an expansion tooltip to appear in the column `tableColumn` for item `item`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Cell expansion can occur when the mouse hovers over the specified cell and the cell contents are unable to be fully displayed within the cell. If this method returns [true](https://developer.apple.com/documentation/swift/true), the full cell contents will be shown in a special floating tool tip view, otherwise the content is truncated.

## See Also

### Displaying Cells

- [outlineView(\_:willDisplayCell:for:item:)](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView(\_:willDisplayOutlineCell:for:item:)](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView(\_:dataCellFor:item:)](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView(\_:shouldShowOutlineCellForItem:)](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).

# outlineView:shouldShowCellExpansionForTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to control cell expansion for a specific column and item.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldShowCellExpansionForTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow an expansion tooltip to appear in the column `tableColumn` for item `item`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Cell expansion can occur when the mouse hovers over the specified cell and the cell contents are unable to be fully displayed within the cell. If this method returns [true](https://developer.apple.com/documentation/swift/true), the full cell contents will be shown in a special floating tool tip view, otherwise the content is truncated.

## See Also

### Displaying Cells

- [outlineView:willDisplayCell:forTableColumn:item:](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView:willDisplayOutlineCell:forTableColumn:item:](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView:dataCellForTableColumn:item:](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView:shouldShowOutlineCellForItem:](outlineview%28__shouldshowoutlinecellforitem_%29.md): Returns whether the specified item should display the outline cell (the disclosure triangle).
