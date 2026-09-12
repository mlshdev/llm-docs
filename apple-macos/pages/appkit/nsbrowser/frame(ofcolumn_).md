> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/frame(ofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/frame(ofcolumn:))

# frame(ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the given column.

## Declaration

```swift
func frame(ofColumn column: Int) -> NSRect
```

## Parameters

- `column`: The index of the column for which to retrieve the frame.

<a id="return-value"></a>

## Return Value

The rectangle containing the specified column.

## See Also

### Getting Column Frames

- [frame(ofInsideOfColumn:)](frame%28ofinsideofcolumn_%29.md): Returns the rectangle containing the specified column, not including borders.

# frameOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the given column.

## Declaration

```objectivec
- (NSRect) frameOfColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column for which to retrieve the frame.

<a id="return-value"></a>

## Return Value

The rectangle containing the specified column.

## See Also

### Getting Column Frames

- [frameOfInsideOfColumn:](frame%28ofinsideofcolumn_%29.md): Returns the rectangle containing the specified column, not including borders.
