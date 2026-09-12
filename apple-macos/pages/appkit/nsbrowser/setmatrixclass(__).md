> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/setmatrixclass(_:)](https://developer.apple.com/documentation/appkit/nsbrowser/setmatrixclass(_:))

# setMatrixClass(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the matrix class to be used in the browser’s columns.

> Use the item-based `NSBrowser` instead.

## Declaration

```swift
func setMatrixClass(_ factoryId: AnyClass)
```

## Parameters

- `factoryId`: The matrix class (`NSMatrix` or an `NSMatrix` subclass) used in the browser’s columns.

## See Also

### Deprecated

- [column(of:)](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrix(inColumn:)](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass()](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.

# setMatrixClass: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the matrix class to be used in the browser’s columns.

> Use the item-based `NSBrowser` instead.

## Declaration

```objectivec
- (void) setMatrixClass:(Class) factoryId;
```

## Parameters

- `factoryId`: The matrix class (`NSMatrix` or an `NSMatrix` subclass) used in the browser’s columns.

## See Also

### Deprecated

- [updateScroller](updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixInColumn:](matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass](matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
