> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/getrow(_:column:for:)](https://developer.apple.com/documentation/appkit/nsbrowser/getrow(_:column:for:))

# getRow(\_:column:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Gets the row and column coordinates for the specified point, if a cell exists at that point.

## Declaration

```swift
func getRow(_ row: UnsafeMutablePointer<Int>?, column: UnsafeMutablePointer<Int>?, for point: NSPoint) -> Bool
```

## Parameters

- `row`: On output, the row number of the cell at the specified point, or `-1` if there is no cell at the point.
- `column`: On output, he column number of the cell at the specified point, or `-1` if there is no cell at the point.
- `point`: The point to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a cell exists at the specified point; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If a row does not exist at `point`, then `-1` is set for the row. If a column does not exist at `point`, then `-1` is set for the column.

## See Also

### Getting Row Frames

- [frame(ofRow:inColumn:)](frame%28ofrow_incolumn_%29.md): Returns the frame of the cell at the specified location, including the expandable arrow.

# getRow:column:forPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Gets the row and column coordinates for the specified point, if a cell exists at that point.

## Declaration

```objectivec
- (BOOL) getRow:(NSInteger *) row column:(NSInteger *) column forPoint:(NSPoint) point;
```

## Parameters

- `row`: On output, the row number of the cell at the specified point, or `-1` if there is no cell at the point.
- `column`: On output, he column number of the cell at the specified point, or `-1` if there is no cell at the point.
- `point`: The point to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a cell exists at the specified point; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If a row does not exist at `point`, then `-1` is set for the row. If a column does not exist at `point`, then `-1` is set for the column.

## See Also

### Getting Row Frames

- [frameOfRow:inColumn:](frame%28ofrow_incolumn_%29.md): Returns the frame of the cell at the specified location, including the expandable arrow.
