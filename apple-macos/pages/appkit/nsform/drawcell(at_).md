> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/drawcell(at:)](https://developer.apple.com/documentation/appkit/nsform/drawcell(at:))

# drawCell(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Displays the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func drawCell(at index: Int)
```

## Parameters

- `index`: The index of the entry to draw.

<a id="Discussion"></a>

## Discussion

Because this method is called automatically whenever a cell needs drawing, you never need to invoke it explicitly. It is included in the API so you can override it if you subclass `NSFormCell`.

## See Also

### Related Documentation

- [indexOfCell(withTag:)](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem()](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.

# drawCellAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Displays the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) drawCellAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the entry to draw.

<a id="Discussion"></a>

## Discussion

Because this method is called automatically whenever a cell needs drawing, you never need to invoke it explicitly. It is included in the API so you can override it if you subclass `NSFormCell`.

## See Also

### Related Documentation

- [indexOfCellWithTag:](indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem](indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
