> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/column(of:)](https://developer.apple.com/documentation/appkit/nsbrowser/column(of:))

# column(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the column number in which the given matrix is located.

> Use the item-based `NSBrowser` instead.

## Declaration

```swift
func column(of matrix: NSMatrix) -> Int
```

## Parameters

- `matrix`: The matrix for which to return the column number.

<a id="return-value"></a>

## Return Value

The index of the column in which the specified matrix appears.

## See Also

### Deprecated

- [matrix(inColumn:)](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass()](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass(\_:)](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.

# columnOfMatrix: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the column number in which the given matrix is located.

> Use the item-based `NSBrowser` instead.

## Declaration

```objectivec
- (NSInteger) columnOfMatrix:(NSMatrix *) matrix;
```

## Parameters

- `matrix`: The matrix for which to return the column number.

<a id="return-value"></a>

## Return Value

The index of the column in which the specified matrix appears.

## See Also

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [matrixInColumn:](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass:](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.
