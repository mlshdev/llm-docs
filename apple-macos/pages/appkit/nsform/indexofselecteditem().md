> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/indexofselecteditem()](https://developer.apple.com/documentation/appkit/nsform/indexofselecteditem())

# indexOfSelectedItem() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the index of the selected entry.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func indexOfSelectedItem() -> Int
```

<a id="return-value"></a>

## Return Value

The index of the selected entry, or `-1` if no entry is selected.

## See Also

### Getting Cells and Indices

- [indexOfCell(withTag:)](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [cell(at:)](cell%28at_%29.md): Deprecated. Returns the entry at the specified index.

# indexOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the index of the selected entry.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (NSInteger) indexOfSelectedItem;
```

<a id="return-value"></a>

## Return Value

The index of the selected entry, or `-1` if no entry is selected.

## See Also

### Getting Cells and Indices

- [indexOfCellWithTag:](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [cellAtIndex:](cell%28at_%29.md): Deprecated. Returns the entry at the specified index.
