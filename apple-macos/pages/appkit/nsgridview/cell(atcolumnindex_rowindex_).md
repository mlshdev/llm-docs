> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/cell(atcolumnindex:rowindex:)](https://developer.apple.com/documentation/appkit/nsgridview/cell(atcolumnindex:rowindex:))

# cell(atColumnIndex:rowIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the grid cell object at the specified column and row index.

## Declaration

```swift
func cell(atColumnIndex columnIndex: Int, rowIndex: Int) -> NSGridCell
```

## See Also

### Creating and Merging Cells

- [cell(for:)](cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.
- [mergeCells(inHorizontalRange:verticalRange:)](mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

# cellAtColumnIndex:rowIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the grid cell object at the specified column and row index.

## Declaration

```objectivec
- (NSGridCell *) cellAtColumnIndex:(NSInteger) columnIndex rowIndex:(NSInteger) rowIndex;
```

## See Also

### Creating and Merging Cells

- [cellForView:](cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.
- [mergeCellsInHorizontalRange:verticalRange:](mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.
