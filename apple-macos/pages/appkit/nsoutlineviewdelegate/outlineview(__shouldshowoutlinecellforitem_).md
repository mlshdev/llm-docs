> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldshowoutlinecellforitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldshowoutlinecellforitem:))

# outlineView(\_:shouldShowOutlineCellForItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the specified item should display the outline cell (the disclosure triangle).

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldShowOutlineCellForItem item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the outline cell should be displayed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Returning [false](https://developer.apple.com/documentation/swift/false) causes [frameOfOutlineCell(atRow:)](../nsoutlineview/frameofoutlinecell%28atrow_%29.md) to return `NSZeroRect`, hiding the cell. In addition, the row will not be collapsible by keyboard shortcuts.

This method is called only for expandable rows.

## See Also

### Displaying Cells

- [outlineView(\_:willDisplayCell:for:item:)](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView(\_:willDisplayOutlineCell:for:item:)](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView(\_:dataCellFor:item:)](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView(\_:shouldShowCellExpansionFor:item:)](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.

# outlineView:shouldShowOutlineCellForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the specified item should display the outline cell (the disclosure triangle).

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldShowOutlineCellForItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the outline cell should be displayed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Returning [false](https://developer.apple.com/documentation/swift/false) causes [frameOfOutlineCellAtRow:](../nsoutlineview/frameofoutlinecell%28atrow_%29.md) to return `NSZeroRect`, hiding the cell. In addition, the row will not be collapsible by keyboard shortcuts.

This method is called only for expandable rows.

## See Also

### Displaying Cells

- [outlineView:willDisplayCell:forTableColumn:item:](outlineview%28__willdisplaycell_for_item_%29.md): Informs the delegate that the cell specified by the column and item will be displayed.
- [outlineView:willDisplayOutlineCell:forTableColumn:item:](outlineview%28__willdisplayoutlinecell_for_item_%29.md): Informs the delegate that an outline view is about to display a cell used to draw the expansion symbol.
- [outlineView:dataCellForTableColumn:item:](outlineview%28__datacellfor_item_%29.md): Returns the cell to use in a given column for a given item.
- [outlineView:shouldShowCellExpansionForTableColumn:item:](outlineview%28__shouldshowcellexpansionfor_item_%29.md): Invoked to allow the delegate to control cell expansion for a specific column and item.
