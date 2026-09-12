> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/matrixclass()](https://developer.apple.com/documentation/appkit/nsbrowser/matrixclass())

# matrixClass() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the matrix class used in the browser’s columns.

> Use the item-based `NSBrowser` instead.

## Declaration

```swift
func matrixClass() -> AnyClass
```

<a id="return-value"></a>

## Return Value

The class of `NSMatrix` used in the browser’s columns.

## See Also

### Deprecated

- [column(of:)](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrix(inColumn:)](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [setMatrixClass(\_:)](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.

# matrixClass (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the matrix class used in the browser’s columns.

> Use the item-based `NSBrowser` instead.

## Declaration

```objectivec
- (Class) matrixClass;
```

<a id="return-value"></a>

## Return Value

The class of `NSMatrix` used in the browser’s columns.

## See Also

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixInColumn:](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [setMatrixClass:](setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.
