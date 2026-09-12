> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/cell(for:)](https://developer.apple.com/documentation/appkit/nsgridview/cell(for:))

# cell(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the grid cell object that contains the given view or one of its ancestors.

## Declaration

```swift
func cell(for view: NSView) -> NSGridCell?
```

## See Also

### Creating and Merging Cells

- [cell(atColumnIndex:rowIndex:)](cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [mergeCells(inHorizontalRange:verticalRange:)](mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

# cellForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the grid cell object that contains the given view or one of its ancestors.

## Declaration

```objectivec
- (NSGridCell *) cellForView:(NSView *) view;
```

## See Also

### Creating and Merging Cells

- [cellAtColumnIndex:rowIndex:](cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [mergeCellsInHorizontalRange:verticalRange:](mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.
