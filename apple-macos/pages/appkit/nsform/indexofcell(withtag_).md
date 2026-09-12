> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/indexofcell(withtag:)](https://developer.apple.com/documentation/appkit/nsform/indexofcell(withtag:))

# indexOfCell(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the index of the entry whose tag is `tag`.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func indexOfCell(withTag tag: Int) -> Int
```

## Parameters

- `tag`: The tag of the desired entry.

## See Also

### Related Documentation

- [tag](../nscell/tag.md): A tag for identifying the cell.

### Getting Cells and Indices

- [indexOfSelectedItem()](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
- [cell(at:)](cell%28at_%29.md): Deprecated. Returns the entry at the specified index.

# indexOfCellWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the index of the entry whose tag is `tag`.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (NSInteger) indexOfCellWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the desired entry.

## See Also

### Related Documentation

- [tag](../nscell/tag.md): A tag for identifying the cell.

### Getting Cells and Indices

- [indexOfSelectedItem](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
- [cellAtIndex:](cell%28at_%29.md): Deprecated. Returns the entry at the specified index.
