> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/mergecells(inhorizontalrange:verticalrange:)](https://developer.apple.com/documentation/appkit/nsgridview/mergecells(inhorizontalrange:verticalrange:))

# mergeCells(inHorizontalRange:verticalRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

## Declaration

```swift
func mergeCells(inHorizontalRange hRange: NSRange, verticalRange vRange: NSRange)
```

<a id="Discussion"></a>

## Discussion

This function invalidates other cells in the range, and they no longer maintain their layout, constraints, or content views.  Cell merging has no effect on the base cell coordinate system of the grid view, and cell references within a merged region refer to the single merged cell.

Use this method to configure the grid geometry before installing views. If the cells being merged contain content views, only the top-leading views are kept.

## See Also

### Creating and Merging Cells

- [cell(atColumnIndex:rowIndex:)](cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [cell(for:)](cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.

# mergeCellsInHorizontalRange:verticalRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

## Declaration

```objectivec
- (void) mergeCellsInHorizontalRange:(NSRange) hRange verticalRange:(NSRange) vRange;
```

<a id="Discussion"></a>

## Discussion

This function invalidates other cells in the range, and they no longer maintain their layout, constraints, or content views.  Cell merging has no effect on the base cell coordinate system of the grid view, and cell references within a merged region refer to the single merged cell.

Use this method to configure the grid geometry before installing views. If the cells being merged contain content views, only the top-leading views are kept.

## See Also

### Creating and Merging Cells

- [cellAtColumnIndex:rowIndex:](cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [cellForView:](cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.
