> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/getrow(_:column:for:)](https://developer.apple.com/documentation/appkit/nsmatrix/getrow(_:column:for:))

# getRow(\_:column:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.

## Declaration

```swift
func getRow(_ row: UnsafeMutablePointer<Int>, column col: UnsafeMutablePointer<Int>, for point: NSPoint) -> Bool
```

## Parameters

- `row`: On return, the row of the cell containing the specified point.
- `col`: On return, the column of the cell containing the specified point.
- `point`: The point to locate; this point should be in the coordinate system of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point lies within one of the cells in the receiver; [false](https://developer.apple.com/documentation/swift/false) if the point falls outside the bounds of the receiver or lies within an intercell spacing.

## See Also

### Finding Matrix Coordinates

- [getRow(\_:column:of:)](getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell

# getRow:column:forPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.

## Declaration

```objectivec
- (BOOL) getRow:(NSInteger *) row column:(NSInteger *) col forPoint:(NSPoint) point;
```

## Parameters

- `row`: On return, the row of the cell containing the specified point.
- `col`: On return, the column of the cell containing the specified point.
- `point`: The point to locate; this point should be in the coordinate system of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point lies within one of the cells in the receiver; [false](https://developer.apple.com/documentation/swift/false) if the point falls outside the bounds of the receiver or lies within an intercell spacing.

## See Also

### Finding Matrix Coordinates

- [getRow:column:ofCell:](getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell
