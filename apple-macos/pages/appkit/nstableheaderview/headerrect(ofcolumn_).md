> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview/headerrect(ofcolumn:)](https://developer.apple.com/documentation/appkit/nstableheaderview/headerrect(ofcolumn:))

# headerRect(ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the header tile for the column at `columnIndex`.

## Declaration

```swift
func headerRect(ofColumn column: Int) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if `columnIndex` is out of bounds.

## See Also

### Related Documentation

- [rect(ofColumn:)](../nstableview/rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.

### Utility methods

- [column(at:)](column%28at_%29.md): Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.

# headerRectOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the header tile for the column at `columnIndex`.

## Declaration

```objectivec
- (NSRect) headerRectOfColumn:(NSInteger) column;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if `columnIndex` is out of bounds.

## See Also

### Related Documentation

- [rectOfColumn:](../nstableview/rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.

### Utility methods

- [columnAtPoint:](column%28at_%29.md): Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.
