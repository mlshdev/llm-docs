> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/frame(ofinsideofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/frame(ofinsideofcolumn:))

# frame(ofInsideOfColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the specified column, not including borders.

## Declaration

```swift
func frame(ofInsideOfColumn column: Int) -> NSRect
```

## Parameters

- `column`: The index of the column for which to retrieve the inside frame.

<a id="return-value"></a>

## Return Value

The rectangle containing the column, not including the column borders.

## See Also

### Getting Column Frames

- [frame(ofColumn:)](frame%28ofcolumn_%29.md): Returns the rectangle containing the given column.

# frameOfInsideOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the specified column, not including borders.

## Declaration

```objectivec
- (NSRect) frameOfInsideOfColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column for which to retrieve the inside frame.

<a id="return-value"></a>

## Return Value

The rectangle containing the column, not including the column borders.

## See Also

### Getting Column Frames

- [frameOfColumn:](frame%28ofcolumn_%29.md): Returns the rectangle containing the given column.
