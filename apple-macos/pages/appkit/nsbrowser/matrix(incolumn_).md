> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/matrix(incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/matrix(incolumn:))

# matrix(inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the matrix located in the specified column.

> Use the item-based `NSBrowser` instead.

## Declaration

```swift
func matrix(inColumn column: Int) -> NSMatrix?
```

## Parameters

- `column`: The column index of the matrix to obtain.

<a id="return-value"></a>

## Return Value

The matrix located in the column.

## See Also

### Deprecated

- [column(of:)](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixClass()](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass(\_:)](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.

# matrixInColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the matrix located in the specified column.

> Use the item-based `NSBrowser` instead.

## Declaration

```objectivec
- (NSMatrix *) matrixInColumn:(NSInteger) column;
```

## Parameters

- `column`: The column index of the matrix to obtain.

<a id="return-value"></a>

## Return Value

The matrix located in the column.

## See Also

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixClass](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass:](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.
