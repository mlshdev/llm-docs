> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/displaycolumn:](https://developer.apple.com/documentation/appkit/nsbrowser/displaycolumn:)

# displayColumn:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.3)

Updates the browser to display the given column.

> Use [setNeedsDisplayInRect:](../nsview/setneedsdisplay%28__%29.md) instead.

## Declaration

```objectivec
- (void) displayColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column to display.

## See Also

### Related Documentation

- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixInColumn:](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass:](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.
