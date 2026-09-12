> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/cell(at:)](https://developer.apple.com/documentation/appkit/nsform/cell(at:))

# cell(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func cell(at index: Int) -> Any!
```

## Parameters

- `index`: The index of the desired entry.

<a id="return-value"></a>

## Return Value

The form cell object at the specified index.

## See Also

### Getting Cells and Indices

- [indexOfCell(withTag:)](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem()](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.

# cellAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (id) cellAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the desired entry.

<a id="return-value"></a>

## Return Value

The form cell object at the specified index.

## See Also

### Getting Cells and Indices

- [indexOfCellWithTag:](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
