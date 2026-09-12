> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/scrollviascroller:](https://developer.apple.com/documentation/appkit/nsbrowser/scrollviascroller:)

# scrollViaScroller:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.3)

Scrolls columns left or right based on an `NSScroller`.

> There is no replacement.

## Declaration

```objectivec
- (void) scrollViaScroller:(NSScroller *) sender;
```

## Parameters

- `sender`: The `NSScroller` object that determines the scrolling of the browser columns.

## See Also

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixInColumn:](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass:](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.
