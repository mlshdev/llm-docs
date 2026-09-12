> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/getrow(_:column:of:)](https://developer.apple.com/documentation/appkit/nsmatrix/getrow(_:column:of:))

# getRow(\_:column:of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver for the specified cell and returns the row and column of the cell

## Declaration

```swift
func getRow(_ row: UnsafeMutablePointer<Int>, column col: UnsafeMutablePointer<Int>, of cell: NSCell) -> Bool
```

## Parameters

- `row`: On return, the row in which the cell is located.
- `col`: On return, the column in which the cell is located.
- `cell`: The cell to locate within the matrix.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell is one of the cells in the receiver, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

.

## See Also

### Finding Matrix Coordinates

- [getRow(\_:column:for:)](getrow%28__column_for_%29.md): Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.

# getRow:column:ofCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver for the specified cell and returns the row and column of the cell

## Declaration

```objectivec
- (BOOL) getRow:(NSInteger *) row column:(NSInteger *) col ofCell:(NSCell *) cell;
```

## Parameters

- `row`: On return, the row in which the cell is located.
- `col`: On return, the column in which the cell is located.
- `cell`: The cell to locate within the matrix.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell is one of the cells in the receiver, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

.

## See Also

### Finding Matrix Coordinates

- [getRow:column:forPoint:](getrow%28__column_for_%29.md): Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.
